export default {
	handleRowCheck() {
		const rowId = appsmith.URL.queryParams.rowId; // Ambil rowId dari URL

		// Cek jika rowId tidak valid
		if (!rowId) {
			navigateTo("/ssot-knowledge-base-everpro/not-found-6802357ceb43173b4ab717be?branch=master", {}, "SAME_WINDOW"); // Arahkan ke halaman Not Found
			return;
		}

		// Filter data dari query Find_GENERAL untuk cari row yang cocok
		const result = Find_GENERAL.data.filter(row => row.Index == rowId);

		if (result.length === 0) {
			// Data tidak ditemukan
			navigateTo("/ssot-knowledge-base-everpro/not-found-6802357ceb43173b4ab717be?branch=master", {}, "SAME_WINDOW");
		}

		// Jika data ditemukan, lanjutkan render seperti biasa
	}
}
