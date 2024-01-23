export default function Message({ message }) {
  return (
    <div className="flex items-center gap-x-3 bg-neutral-900 w-fit max-w-prose rounded-md p-1 bg-opacity-30 mb-2">
      <img
        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
        alt=""
        className="w-[30px] h-[30px] rounded-full"
      />
      <span>{message} </span>
    </div>
  );
}
