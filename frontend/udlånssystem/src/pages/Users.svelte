<script lang="js">
  import Table from "../components/table.svelte";

  import axios from "axios";
  async function getData() {
    const response = await axios.get(
      "http://172.16.3.135:80/SOP-IT-System/Users"
    );
    console.log(response);
    const data = response.data;

    console.log(data);
    return data;
  }

  let inputData = [
    ["username", "name", "phone", "age"],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],

    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
    ["kenn7575", "Kenni", 53805027, 19],
    ["nima123", "Nima", 12345678, 18],
    //add a lot more unique data
    ["jesp1234", "Jesper", 12345678, 17],
    ["had4753", "Hanne", 65432112, 11],
    ["kur2445", "kurt", 12345678, 18],
  ];
</script>

<div class="table">
  <Table {inputData} />
</div>

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
