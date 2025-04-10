export default {
	handleRowModal: () => {
		const rowId = appsmith.URL.queryParams.rowId;
		if (rowId) {
			storeValue("targetRowId", rowId);  // simpan rowId ke local store
		}
	}
}
