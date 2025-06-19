export function Image({
  src,
  alt,
  loading = "lazy",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={src} alt={alt} loading={loading} draggable={false} {...props} />
  );
}
