import React, { useContext } from "react";

import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import useNotes from "../hooks/useNotes";
import LocaleContext from "../context/LocaleContext";
import LoadingPage from "./LoadingPage";

export default function ActivePage() {
	const { shownNotes, loading, title, setSearchParams } = useNotes("Active");
	const { locale } = useContext(LocaleContext);

	function changeSearchParams(keyword) {
		setSearchParams({ title: keyword });
	}

	if (loading) {
		return <LoadingPage />;
	}

	return (
		<main>
			<h1>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h1>
			<SearchBar keywordChange={changeSearchParams} keyword={title} />
			<NoteList notes={shownNotes} locale={locale} />
			<AddButton />
		</main>
	);
}
