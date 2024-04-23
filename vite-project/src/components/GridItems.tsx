type GridItemsProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  view: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export function GridItems({
  id,
  title,
  channel,
  view,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: GridItemsProps) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
      </a>
      <div className="absolute bottom-1 right-2 bg-drvonfsry-dark text-secondary text-sm px-0.5 rounded">
        {duration}
      </div>
    </div>
  );
}
