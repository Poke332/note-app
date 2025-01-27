import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getFilteredNotes } from "../utils/local-data";
import {
	getAccessToken,
	getActiveNotes,
	getArchivedNotes,
} from "../utils/network-data";

function useNotes(type) {
	const navigate = useNavigate();
	const [notes, setNotes] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [shownNotes, setShownNotes] = useState(null);
	const [loading, setLoading] = useState(true);

	const title = searchParams.get("title");

	React.useEffect(() => {
		if (!getAccessToken()) {
			setLoading(false);
			navigate("/login");
		}

		const fetchData = async () => {
			try {
				if (type === "Archived") {
					const { error, data } = await getArchivedNotes();
					if (!error) {
						setNotes(data);
					}
				} else if (type === "Active") {
					const { error, data } = await getActiveNotes();
					if (!error) {
						setNotes(data);
					}
				}
			} catch {
				throw new Error(`Failed to fetch ${type} notes`);
			} finally {
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			setLoading(true);
			setNotes([]);
			setShownNotes(null);
		};
	}, []);

	React.useEffect(() => {
		const newNote = title ? getFilteredNotes(title, notes) : notes;
		setShownNotes(newNote);
	}, [searchParams, notes]);

	return { shownNotes, loading, title, setSearchParams };
}

export default useNotes;
