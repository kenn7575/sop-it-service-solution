<script lang="js">
    import Table from "../components/table.svelte";
    import axios from "axios";
    import { onMount } from "svelte";
    import { getData } from "../data/data";

    let inputData = [[]];

    onMount(async () => {
        inputData = await getData('products');
    });
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