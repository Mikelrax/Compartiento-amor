

// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div className={`${shimmer} bg-white shadow-lg rounded-lg overflow-hidden p-4`}>
            <h2 className="text-center text-2xl font-bold mb-4 text-gray-800"></h2>
            <div className='mb-4'>
                <p className="text-center text-gray-700"></p>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className="text-center text-gray-700">
                </div>
                <div className="text-center text-gray-700">
                </div>
                <div className="text-center text-gray-700">
                </div>
                <div className="text-center text-gray-700">
                </div>
            </div>
            <div className='mb-4'>
            </div>
            <div className="flex justify-end">
            </div>
        </div>
    );
}

export function CardsSkeletons() {
    return (
        <>
            <CardSkeleton></CardSkeleton>
            <CardSkeleton></CardSkeleton>
            <CardSkeleton></CardSkeleton>
            <CardSkeleton></CardSkeleton>
            <CardSkeleton></CardSkeleton>
        </>
    )
}