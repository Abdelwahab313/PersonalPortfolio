import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

/**
 * Minimal history router. Three routes:
 *   /                 home
 *   /blog             index of every post
 *   /blog/<slug>      one post
 * everything else     not found
 *
 * Hand-rolled on purpose: react-router would add ~11 kB gzip to a bundle
 * the spec measures in tens of kB, and three routes do not need it.
 */

const RouterContext = createContext(null);

export function normalizePath(pathname) {
  let p = pathname || "/";
  const cut = p.search(/[?#]/);
  if (cut !== -1) p = p.slice(0, cut);
  if (p[0] !== "/") p = `/${p}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function parseRoute(pathname) {
  const path = normalizePath(pathname);
  if (path === "/") return {name: "home", path, params: {}};
  if (path === "/blog") return {name: "blog", path, params: {}};
  const match = path.match(/^\/blog\/([^/]+)$/);
  if (match) {
    return {name: "post", path, params: {slug: decodeURIComponent(match[1])}};
  }
  return {name: "not-found", path, params: {}};
}

function splitTarget(to) {
  const hashAt = to.indexOf("#");
  if (hashAt === -1) return {path: to, hash: ""};
  return {path: to.slice(0, hashAt), hash: to.slice(hashAt + 1)};
}

function scrollHash(hash) {
  if (!hash) {
    window.scrollTo(0, 0);
    return;
  }
  const el = document.getElementById(hash);
  if (el) el.scrollIntoView({behavior: "auto", block: "start"});
}

export function RouterProvider({children, onNavigate}) {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname)
  );
  const pathRef = useRef(path);
  const navigateRef = useRef(onNavigate);
  navigateRef.current = onNavigate;

  useEffect(() => {
    const onPop = () => {
      const next = normalizePath(window.location.pathname);
      pathRef.current = next;
      setPath(next);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (navigateRef.current) navigateRef.current(path);
  }, [path]);

  const navigate = useCallback((to, options = {}) => {
    const {replace = false} = options;
    const {path: rawPath, hash} = splitTarget(to);
    const next = rawPath ? normalizePath(rawPath) : pathRef.current;
    const changed = next !== pathRef.current;
    const url = next + (hash ? `#${hash}` : "");

    if (replace) window.history.replaceState({}, "", url);
    else if (changed || hash) window.history.pushState({}, "", url);

    if (changed) {
      pathRef.current = next;
      setPath(next);
      requestAnimationFrame(() => scrollHash(hash));
    } else {
      scrollHash(hash);
    }
  }, []);

  const value = useMemo(
    () => ({path, route: parseRoute(path), navigate}),
    [path, navigate]
  );

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used inside <RouterProvider>");
  return ctx;
}

export function Link({to, onClick, children, ...rest}) {
  const {navigate} = useRouter();

  const handleClick = event => {
    if (onClick) onClick(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
