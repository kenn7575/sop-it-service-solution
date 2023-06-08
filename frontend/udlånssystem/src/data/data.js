import axios from "axios";

function objectToList(data) {
    var temp_list = [];
    var temp_list2 = [];

    Object.keys(data[0]).map((key) => { if (key !== "password") temp_list2.push(key.replaceAll("_", " ")); });

    temp_list.push(temp_list2);

    Object.values(data).map((row, index) => {
    temp_list2 = [];
    Object.entries(data[index]).map(([key, value]) => { if (key !== "password") temp_list2.push(value); })

    temp_list.push(temp_list2);
    })

  return temp_list;
} 

export async function getData(table) {
    var {data} = await axios.get(
        "", { params: { table: table } }
    );

    data = objectToList(data);
    return data;
}

