import React, { useContext } from "react";

import LoadingPage from "./LoadingPage";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import useNotes from "../hooks/useNotes";
import LocaleContext from "../context/LocaleContext";

export default function ArchivePage() {
	const { shownNotes, loading, title, setSearchParams } =
		useNotes("Archived");
	const { locale } = useContext(LocaleContext);

	function changeSearchParams(keyword) {
		setSearchParams({ title: keyword });
	}

	if (loading) {
		return <LoadingPage />;
	}

	return (
		<main>
			<h1>{locale === "id" ? "Arsip Catatan" : "Archived Notes"}</h1>
			<SearchBar keywordChange={changeSearchParams} keyword={title} />
			<NoteList notes={shownNotes} locale={locale} />
			<AddButton />
		</main>
	);
}
