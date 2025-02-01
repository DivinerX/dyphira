import { FC } from "react";
type TPageButtonsProps = {
  page: number,
  setPage: (page: number) => void,
  items: any[],
  itemsPerPage: number
}

const PageButton: FC<{ active?: boolean, page?: number, onClick: () => void, disabled?: boolean }> = ({ active = false, page, onClick, disabled }) => {
  return active ? (
    <div className={`relative p-0 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#C8FFF440]"></div>
      <div className="absolute -top-1 -left-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 border-[0.5px] border-[#C8FFF440] bg-[#0d191a] z-30"></div>
      <div className="flex flex-row items-center justify-center gap-2 px-2 py-1 bg-[#C8FFD30D]">
        <p className="text-[10px] text-[#C8FFD3]">{page}</p>
      </div>
    </div>
  ) : (
    <p className={`text-[10px] text-[#C8FFD3] p-2 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} onClick={onClick}>{page}</p>
  )
}

export const PageButtons = ({ page, setPage, items, itemsPerPage }: TPageButtonsProps) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  return (
    <>

      {
        Array.from({ length: totalPages }, (_, index) => (
          <PageButton key={index} active={page === index + 1} page={index + 1} onClick={() => setPage(index + 1)} />
        ))
      }
    </>
  )
}
