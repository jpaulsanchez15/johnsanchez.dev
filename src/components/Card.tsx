type Props = {
  href?: string;
  title: string;
  description: string;
};

const Card = (props: Props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      className="block max-h-full w-full md:w-1/2 p-6 bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-xs hover:shadow-white"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-400">{props.description}</p>
    </a>
  );
};

export default Card;
