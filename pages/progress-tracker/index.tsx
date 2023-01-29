import { Box, DataTable, Grid, Meter, RangeInput, Text } from "grommet";
import React, { useState } from "react";

function ProgressTracker() {
  const [data, setData] = useState([
    { name: "Alan", percent: 20 },
    { name: "Bryan", percent: 30 },
    { name: "Chris", percent: 40 },
    { name: "Eric", percent: 80 },
  ]);

  return (
    <DataTable
      columns={[
        {
          property: "name",
          header: <Text>Name</Text>,
          primary: true,
        },
        {
          property: "percent",
          header: "Complete",
          render: (datum) => (
            <Box pad={{ vertical: "xsmall" }}>
              {/* <Meter
                values={[
                  {
                    value: datum.percent,
                    label: "hello",
                    onClick: (e) => console.log("datum:", datum, e),
                  },
                ]}
                thickness="small"
                size="small"
              /> */}
              <RangeInput
                // step={2}
                value={datum.percent}
                onChange={(event) => {
                  console.log("value:", event.target.value);
                  setData((prev) =>
                    prev.map((person) =>
                      person.name === datum.name
                        ? { ...person, percent: Number(event.target.value) }
                        : person
                    )
                  );
                }}
              />
            </Box>
          ),
        },
      ]}
      data={data}
    />
  );
}

export default ProgressTracker;
