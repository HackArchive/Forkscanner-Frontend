


export default function AddNodeForm() {

    return (
        <div className="flex items-center justify-center p-12">

            <div className="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="fName"
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    Node Name
                                </label>
                                <input
                                    type="text"
                                    name="node_name"
                                    id="node_name"
                                    placeholder="node1"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="lName"
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    RPC Host
                                </label>
                                <input
                                    type="text"
                                    name="rpc_host"
                                    id="rpc_host"
                                    placeholder="143.244.138.173"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            for="guest"
                            className="mb-3 block text-base font-medium text-white"
                        >
                            RPC Port
                        </label>
                        <input
                            type="number"
                            name="rpc_port"
                            id="rpc_port"
                            placeholder="8332"
                            min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="fName"
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    RPC User
                                </label>
                                <input
                                    type="text"
                                    name="rpc_user"
                                    id="rpc_user"
                                    placeholder="bitcoin"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="lName"
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    RPC Password
                                </label>
                                <input
                                    type="text"
                                    name="rpc_pass"
                                    id="rpc_pass"
                                    placeholder="Persario_123"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    for="fName"
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    Mirror RPC Host (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="rpc_user"
                                    id="rpc_user"
                                    placeholder="167.71.141.175"
                                    defaultValue={null}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                for="guest"
                                className="mb-3 block text-base font-medium text-white"
                            >
                                Mirror RPC Port (Optional)
                            </label>
                            <input
                                type="number"
                                name="mirror_rpc_port"
                                id="mirror_rpc_port"
                                placeholder="5"
                                min="0"
                                defaultValue={null}
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>


                    <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-white">
                            Archive
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton1"
                                    className="h-5 w-5"
                                />
                                <label
                                    for="radioButton1"
                                    className="pl-3 text-base font-medium text-white"
                                >
                                    True
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton2"
                                    className="h-5 w-5"
                                />
                                <label
                                    for="radioButton2"
                                    className="pl-3 text-base font-medium text-white"
                                >
                                    False
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}