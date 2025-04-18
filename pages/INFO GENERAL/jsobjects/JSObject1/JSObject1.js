export default {
	checkRowId() {
		if (Find_GENERAL.data.length === 0) {
			showAlert("Halaman tidak ditemukan", "error");
			navigateTo("/not-found-page", {}, "SAME_WINDOW");
		}
	}
}
