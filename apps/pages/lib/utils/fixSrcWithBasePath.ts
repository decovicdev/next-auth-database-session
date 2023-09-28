export default function fixSrcWithBasePath(src: string | undefined) {
  if (process.env.NEXT_PUBLIC_BASE_PATH && src) {
    return process.env.NEXT_PUBLIC_BASE_PATH + src;
  }
  return src;
}
