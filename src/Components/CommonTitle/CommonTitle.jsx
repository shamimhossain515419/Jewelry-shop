

const CommonTitle = ({ title, pra }) => {
     return (
          <div className=" text-center mx-auto py-4">
               <h1 className=" capitalize text-[#222] leading-9  font-bold  text-2xl  my-1"> {title}</h1>
               <h1 className=" mt-1"> {pra}</h1>
          </div>
     );
};

export default CommonTitle;