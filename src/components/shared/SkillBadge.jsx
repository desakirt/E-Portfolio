export default function SkillBadge({ children }) {
  return (
    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
      {children}
    </span>
  );
}