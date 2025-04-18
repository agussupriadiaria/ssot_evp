export default {
	async initPage() {
		// Jalankan query dulu
		await Find_GENERAL.run();

		// Setelah query selesai, validasi rowId
		const rowId = Number(appsmith.URL.queryParams.rowId);
		const found = Find_GENERAL.data.find(row => Number(row["Index"]) === rowId);

		if (!found || !found["GENERAL"]) {
			navigateTo("/ssot-knowledge-base-everpro/not-found-6802357ceb43173b4ab717be?branch=master", {}, "SAME_WINDOW");
		}
	}
}
