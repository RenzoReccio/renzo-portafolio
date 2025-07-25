'use client'
import PageHead from '@/components/layout/pageHead';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const headInfo = {
    headline: "Collatz Conjecture",
    text: "The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1. It concerns sequences of integers in which each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that these sequences always reach 1, no matter which positive integer is chosen to start the sequence."
}

export default function CollatzConjecture() {
    const [mapData, setMapData] = useState<{ name: number; uv: number; }[]>([]);
    const [inputNumber, setInputNumber] = useState<number>(0);

    function calculateCollatz(n: number): number[] {
        const result = [];
        while (n !== 1 && n > 0) {
            result.push(n);
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
        }
        result.push(1);
        return result;
    }

    function onSubmit() {
        if (inputNumber <= 0) return;

        const data = calculateCollatz(inputNumber);
        setMapData(
            data.map((item, index) => ({ name: index, uv: item }))
        );
    }

    return (
        <div data-testid="projects-index">
            <PageHead {...headInfo} />
            <div className="flex flex-row flex-wrap">
                <div className='w-full md:w-1/4'>
                    <div className='flex w-full'>
                        <input
                            style={{ alignSelf: 'flex-start' }}
                            value={inputNumber}
                            onChange={e => setInputNumber(Number(e.target.value))}
                            name="name"
                            className="w-full md:w-3/4 border dark:border-zinc-700 shadow-sm p-2 m-2 w-2/3 rounded-lg"
                            type="number"
                            data-testid="collatz-input"
                            placeholder="1"
                        />
                        <button
                            style={{ alignSelf: 'flex-start' }}
                            onClick={onSubmit}
                            type="submit"
                            className="mt-2.5 w-full md:w-1/4 bg-zinc-900 hover:bg-slate-800 text-white dark:hover:bg-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 px-4 py-2 rounded-lg"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div className='w-full md:w-3/4' style={{ minHeight: '400px' }}>
                    <ResponsiveContainer height='100%' width='100%'>
                        <LineChart data={mapData}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <Tooltip />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
