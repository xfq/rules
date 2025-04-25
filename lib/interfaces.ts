export interface Rule {
  title: string;
  tags: string[];
  slug: string;
  libs?: string[];
  icon?: string;
  description?: string;
  color?: string;
  content: string;
  author?: string | {
    name?: string;
    url?: string;
    avatar?: string | null;
  };
  date?: string;
} 