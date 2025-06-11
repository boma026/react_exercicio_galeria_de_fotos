type ModalProps = {
    onClose: () => void,
    image:string
}

export const Modal = ({onClose, image}: ModalProps) => {
return (
    <div>
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
            <img src={image} alt="" className="max-h-screen max-w-screen"/>
        </div>
        <div onClick={onClose} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
            x
        </div>

    </div>
)
}