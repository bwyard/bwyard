// ============================================================
// Nav types — data-driven navigation (NavItem is a DB record)
// ============================================================

export type NavItemTarget = '_self' | '_blank';

export type NavItem = {
  id: string;
  label: string;
  href: string;
  order: number;
  target: NavItemTarget;
  visible: boolean;
  parentId: string | null;
  children?: NavItem[];
};
