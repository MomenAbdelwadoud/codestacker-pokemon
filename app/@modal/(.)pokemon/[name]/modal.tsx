"use client";

import {X} from "lucide-react";
import {useRouter} from "next/navigation";
import {useEffect, useRef, type ElementRef} from "react";
import {createPortal} from "react-dom";

export default function Modal({children}: {children: React.ReactNode}) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return createPortal(
		<div className="bg-[rgba(0,0,0,0.3)] top-0 left-0 right-0 bottom-0 absolute z-50 flex place-content-center">
			<dialog
				ref={dialogRef}
				className="w-1/3 h-2/3 bg-white flex justify-center items-center shadow-mainCard border-dark border-3 rounded-sm"
				onClose={onDismiss}>
				{children}
				<button
					onClick={onDismiss}
					className="absolute top-5 right-5">
					<X></X>
				</button>
			</dialog>
		</div>,
		document.getElementById("modal-root")!
	);
}
