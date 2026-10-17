// data.js - Données par défaut de MyBudget
const defaultData = {
    envelopes: [
        { id: '1', name: 'Courses', wallet: 'commun', budget: 450, type: 'classic', color: 'from-emerald-500 to-teal-500 text-emerald-600 border-emerald-200 bg-emerald-50' },
        { id: '2', name: 'Essence / Transport', wallet: 'commun', budget: 150, type: 'classic', color: 'from-cyan-500 to-blue-500 text-cyan-600 border-cyan-200 bg-cyan-50' },
        { id: '3', name: 'Restaurants & Sorties', wallet: 'commun', budget: 200, type: 'classic', color: 'from-amber-500 to-orange-500 text-amber-600 border-amber-200 bg-amber-50' },
        { id: '4', name: 'Shopping Perso', wallet: 'moi', budget: 100, type: 'classic', color: 'from-pink-500 to-rose-500 text-pink-600 border-pink-200 bg-pink-50' },
        { id: '5', name: 'Soins & Santé', wallet: 'moi', budget: 80, type: 'classic', color: 'from-purple-500 to-indigo-500 text-purple-600 border-purple-200 bg-purple-50' },
        { id: '6', name: 'Épargne Vacances', wallet: 'commun', budget: 300, type: 'savings', color: 'from-violet-600 to-fuchsia-600 text-fuchsia-600 border-fuchsia-200 bg-fuchsia-50' }
    ],
    transactions: [
        { id: 't1', date: '2026-10-01', label: 'Salaire', amount: 2500, wallet: 'moi', type: 'income', payer: 'Moi' },
        { id: 't2', date: '2026-10-02', label: 'Supermarché Carrefour', amount: 85.50, wallet: 'commun', envelopeId: '1', type: 'expense', payer: 'Moi' },
        { id: 't3', date: '2026-10-05', label: 'Restaurant italien', amount: 64.00, wallet: 'commun', envelopeId: '3', type: 'expense', payer: 'Conjoint' }
    ]
};
