import { useNavigate } from "react-router-dom";
import getData from "@/lib/data/get";
// import { cn } from "@/lib/utils";
import { loginViaCredentials } from "@/lib/services/login";

import { useState, useEffect, HTMLAttributes } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function DatePickerWithRange({}: HTMLAttributes<HTMLDivElement>) {
  const [data, setData] = useState<
    {
      UUID: number;
      Oprettet: Date;
      Opdateret: Date;
      Returneret: Date;
      Bruger: "Kasper Petersen";
      Personale: null | string;
      Recipent: null | string;
      Laanetid: string;
      Returneringsdato: Date;
    }[]
  >();

  useEffect(() => {
    const fetchData = async () => {
      await loginViaCredentials("admin", "admin");
      const { data } = await getData("loans_view");
      console.log("🚀 ~ onClick={ ~ data:", data);
      setData(data);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <Table>
        <TableCaption>A list of all loans.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Opdateret</TableHead>
            <TableHead>Returneret</TableHead>
            <TableHead>Bruger</TableHead>
            <TableHead>Personale</TableHead>
            <TableHead>Recipent</TableHead>
            <TableHead>Laanetid</TableHead>
            <TableHead>Returneringsdato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            ? data.map((loan) => (
                <TableRow
                  key={loan.UUID}
                  onClick={() => {
                    console.log("🚀 ~ onClick={ ~ loan.UUID:", loan.UUID);
                    navigate("/");
                  }}
                >
                  <TableCell className="font-medium">{loan.Oprettet}</TableCell>
                  <TableCell>{loan.Opdateret}</TableCell>
                  <TableCell>{loan.Returneret}</TableCell>
                  <TableCell>{loan.Bruger}</TableCell>
                  <TableCell>{loan.Personale}</TableCell>
                  <TableCell>{loan.Recipent}</TableCell>
                  <TableCell>{loan.Laanetid}</TableCell>
                  <TableCell>{loan.Returneringsdato}</TableCell>
                </TableRow>
              ))
            : []}
        </TableBody>
      </Table>
    </div>
  );
}
