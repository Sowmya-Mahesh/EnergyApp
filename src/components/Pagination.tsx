
import { useTranslation } from 'react-i18next';
type Props = {
    //onSort: (field: "location" | "usageKwh" | "recordedAt" | "status") => void;
    //sortField: string;
    //sortDirection: "asc" | "desc";
    loading: boolean;
    error: string;
    totalPages: number;
    page: number;
    handlePage: (page: number) => void;
};
const Pagination = ({ totalPages, page, handlePage }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="pagination">
            <button
                disabled={page === 1}
                onClick={() => handlePage(page - 1)}
            >
                {t('pagination.prev')}
            </button>

            <span>
                {t('pagination.page')} {page}  {t('pagination.of')} {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => handlePage(page + 1)}
            >
                {t('pagination.next')}
            </button>
        </div>
    );
};

export default Pagination;