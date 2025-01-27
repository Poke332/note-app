import React, { useState } from "react";
import { getNote } from "../utils/network-data";

function useDetail(id) {
	const [notes, setNotes] = useState(null);
	const [loading, setLoading] = useState(true);

	React.useEffect(() => {
		const fetchDetail = async () => {
			try {
				const { error, data } = await getNote(id);
				if (!error) {
					setNotes(data);
				}
			} catch {
				throw new Error(
					"Failed to get notes, this note doesnt exist or you are forbidden to access it"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchDetail();

		return () => {
			setLoading(true);
			setNotes(null);
		};
	}, [id]);

	return [notes, loading, setLoading];
}

export default useDetail;
