import { CheckCheck, SnowflakeIcon } from "lucide-react";



const ExplorePlans = () => {

    const ExplaorePlansList = [
        {
            icon: <SnowflakeIcon size={40} color="gray"/>,
            plan: "Free",
            planText: "Try Anhelina",
            price: "$0",
            priceList: "Free for everyone",
            button: "",
            benefits: [
                "Chat with Claude on web, iOS, and Android",
                "Write, edit, and create content",
                "Analyze text and upload images",
                "Generate code and visualize data",
                "Get web search results inside chat"
            ]
        },
        {
            icon: <SnowflakeIcon size={40} color="gray"/>,
            plan: "Free",
            planText: "Try Anhelina",
            price: "$0",
            priceList: "Free for everyone",
            button: "",
            benefits: [
                "Chat with Claude on web, iOS, and Android",
                "Write, edit, and create content",
                "Analyze text and upload images",
                "Generate code and visualize data",
                "Get web search results inside chat"
            ]
        },
        {
            icon: <SnowflakeIcon size={40} color="gray"/>,
            plan: "Free",
            planText: "Try Anhelina",
            price: "$0",
            priceList: "Free for everyone",
            button: "",
            benefits: [
                "Chat with Claude on web, iOS, and Android",
                "Write, edit, and create content",
                "Analyze text and upload images",
                "Generate code and visualize data",
                "Get web search results inside chat"
            ]
        },
    ]

    return (
        <section className="w-full pb-20 md:pb-35">
            <div className="mx-auto w-[90%] md:w-[80%] flex flex-col gap-15">
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-semibold text-white">Explore Plans</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {ExplaorePlansList.map((items, index) => {
                        return (
                            <div key={index} className="border-gray-700 shadow-xl rounded gap-10 bg-gray-800 flex flex-col border-1 p-7 ">
                                <div>
                                    {items.icon}
                                </div>
                                <div className="text-gray-400">
                                    <p className="text-3xl font-semibold">{items.plan}</p>
                                    <p>{items.planText}</p>
                                </div>
                                <div className="text-gray-400">
                                    <p className="text-3xl font-semibold">{items.price}</p>
                                    <p>{items.priceList}</p>
                                </div>
                                <button className="bg-gray-100 text-gray-700 py-2 w-full rounded">
                                    Try Anhelina
                                </button>
                                <div className="border-b-1 border-white"></div>
                                <div>
                                    {items.benefits.map((benefits, index) => {
                                        return (
                                            <div className="flex mt-3" key={index}>
                                                <CheckCheck color="white" />
                                                <p className="ml-3 text-white text">{benefits}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExplorePlans;