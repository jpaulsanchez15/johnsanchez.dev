const TypographyH1 = (text: string) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
};

const TypographyH2 = (text: string) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {text}
    </h2>
  );
};

const TypographyH3 = (text: string) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
};

const TypographyP = (text: string) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
};

type RowData = {
  leftText: string;
  rightText: string;
};

type TableProps = {
  leftHeaderText: string;
  rightHeaderText: string;
  rows: { leftText: string; rightText: string }[];
};

const TableRow = ({ rowData }: { rowData: RowData }) => {
  return (
    <tr className="m-0 border-t p-0 even:bg-muted odd:text-slate-100">
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {rowData.leftText}
      </td>
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {rowData.rightText}
      </td>
    </tr>
  );
};

const TypographyTable = ({ ...props }: TableProps) => {
  return (
    <div className="my-6 w-1/3 overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border text-slate-100 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {props.leftHeaderText}
            </th>
            <th className="border text-slate-100 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {props.rightHeaderText}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyTable,
};
