import React from "react";

const Pagination = () => {
  return (
    <div className="my-10 lg:my-20 text-center">
    <nav aria-label="Page navigation example">
      <ul className="inline-flex lg:space-x-9 space-x-4 text-sm lg:text-base flex-wrap justify-center">
        {/* Page 1 */}
        <li className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-primary text-white flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition cursor-not-allowed">
          1
        </li>
  
        {/* Page 2 */}
        <li className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-[#EDF2F7] flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition">
          2
        </li>
  
        {/* Page 3 */}
        <li className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-[#EDF2F7] flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition">
          3
        </li>
  
        {/* Next */}
        <li className="cursor-pointer w-[80px] lg:w-[100px] h-[50px] lg:h-[60px] rounded-lg font-normal bg-[#EDF2F7] flex items-center justify-center text-lg lg:text-xl hover:bg-primary hover:text-white transition">
          Next
        </li>
      </ul>
    </nav>
  </div>
  
  );
};

export default Pagination;
