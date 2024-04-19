export default function Three({img, title, price}){
    return (
        <div className="w-[350px] h-[125px] shadow-[0px_0px_10px_lightgray] flex items-center justify-center">
            <img className="ml-[20px]" src={img} alt="" />
            <div className="ml-[5px]">
                <h3 className="text-[#323A4B] text-[17px] font-[600]">{title}</h3>
                <p className="text-[#101828] font-[300]">{price}</p>
            </div>
        </div>
    )
}