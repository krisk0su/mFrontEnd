import React, { useContext } from "react";
import { inject, observer } from "mobx-react";
import { Pagination } from "semantic-ui-react";
import { MovieStore, moviesContext } from "../../Store/MovieStore";
export const MPagination = observer((props: any) => {
  const store: MovieStore = useContext(moviesContext);
  const onPageChange = (e: any, { activePage }: any) => {
    store.updateCurrentPage(activePage);
  };
  return (
    <Pagination
      defaultActivePage={1}
      totalPages={store.totalPages}
      onPageChange={onPageChange}
    />
  );
});
