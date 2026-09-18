import React, { useState, use } from 'react';
import type { Icard } from '../../types/CardType';

interface TechCardProps {
    cardPromise: Promise<Icard[]> | Icard[];
}

const TechCard = ({ cardPromise }: TechCardProps) => {
    const cards = cardPromise instanceof Promise ? use(cardPromise) : cardPromise;
 
    const [selectedStack, setSelectedStack] = useState<Icard[]>([]);

 
    const handleAddToStack = (card: Icard) => {
        const isAlreadyAdded = selectedStack.some((item) => item.id === card.id);
        if (!isAlreadyAdded) {
            setSelectedStack([...selectedStack, card]);
        }
    };
 
    const handleRemoveFromStack = (id: number) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== id));
    };
 
    const handleRemoveAll = () => {
        setSelectedStack([]);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-left mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-800 mb-2">
                 Explore the <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Technologies</span> 
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                 Pick one technology per category to build your ideal stack.
                </p>
            </div>
 
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
           
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards && cards.length > 0 ? (
                        cards.map((card) => {
                            const isAdded = selectedStack.some((item) => item.id === card.id);

                            return (
                                <div 
                                    key={card.id} 
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
                                >
                              
                                    <div className="flex items-center justify-between mb-4">
                                        <img 
                                            src={card.icon} 
                                            alt={card.name} 
                                            className="w-12 h-12 object-contain" 
                                        />
                                        {card.badge && (
                                            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full">
                                                {card.badge}
                                            </span>
                                        )}
                                    </div>

                                 
                                    <div className="mb-2">
                                        <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                                            {card.category}
                                        </span>
                                    </div>
 
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                                        {card.name}
                                    </h3>
 
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                        {card.description}
                                    </p>
 
                                    <div className="flex items-center justify-between text-sm text-slate-600 mb-5 border-t border-gray-100 pt-3">
                                        <span className="font-medium text-slate-700">
                                            Level: <span className="text-indigo-600">{card.difficulty}</span>
                                        </span>
                                        <div className="flex items-center gap-1 font-semibold text-amber-500">
                                            <span>⭐</span>
                                            <span>{card.rating}</span>
                                        </div>
                                    </div>

                              
                                    <button 
                                        onClick={() => handleAddToStack(card)}
                                        disabled={isAdded}
                                        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm ${
                                            isAdded 
                                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        }`}
                                    >
                                        {isAdded ? 'Added to Stack' : 'Add to Stack'}
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-gray-500 col-span-full text-center py-10">No technologies found.</p>
                    )}
                </div>
 
                <div className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-6">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                            <h3 className="font-bold text-slate-800 text-base">
                                Your Stack ({selectedStack.length})
                            </h3>
                            {selectedStack.length > 0 && (
                                <button 
                                    onClick={handleRemoveAll}
                                    className="text-xs text-red-500 hover:text-red-600 font-medium transition-colors"
                                >
                                    Remove All
                                </button>
                            )}
                        </div>

                        {selectedStack.length === 0 ? (
                            <div className="text-center py-10 text-gray-400 text-xs">
                                <p className="font-medium text-gray-600 mb-1">No technologies added yet.</p>
                                <p className="text-gray-400">Select items from the list to build your stack.</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {selectedStack.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                            <div>
                                                <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                                                <span className="text-[10px] text-gray-500">{item.category}</span>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleRemoveFromStack(item.id)}
                                            className="text-gray-400 hover:text-red-500 text-xs font-bold px-2 py-1"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TechCard;