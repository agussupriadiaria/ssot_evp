export default {
	handleRowCheck() {
		const rowId = appsmith.URL.queryParams.rowId;

		// Cek jika rowId valid (bukan kosong/null)
		if (!rowId) {
			navigateTo("/not-found", {}, "SAME_WINDOW");
			return;
		}

		// Filter data dari query Find_General1
		const result = Find_GENERAL.data.filter(row => row.Index == rowId);

		if (result.length === 0) {
			// Data tidak ditemukan
			navigateTo("/not-found", {}, "SAME_WINDOW");
		}

		// Jika ditemukan, tidak melakukan apa-apa. Lanjut render data.
	}
}
