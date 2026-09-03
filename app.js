/**
 * KisanConnect (किसान कनेक्ट) - Full Interactive Web Application
 * Direct Farm-to-Fork Marketplace with INR (₹) Pricing
 */

// ==========================================
// 1. DATASETS: Real-world Indian Crops & Mandi Rates
// ==========================================

const INITIAL_CROPS = [
    {
        id: "kc-001",
        name: "Sharbati Golden Wheat",
        name_hi: "शरबती प्रीमियम गेहूं",
        category: "grains",
        variety: "C-306 Sharbati (MP Sehore)",
        farmer: "Baldev Singh Yadav",
        village: "Sehore, Madhya Pradesh",
        state: "Madhya Pradesh",
        phone: "9826012345",
        rating: 4.9,
        reviewsCount: 42,
        priceKg: 34,
        priceQuintal: 3400,
        mandiRateKg: 28,
        retailRateKg: 52,
        availableKg: 3500,
        moqKg: 25,
        organic: true,
        harvestDate: "2026-08-15",
        img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
        badge: "GI Tag Certified"
    },
    {
        id: "kc-002",
        name: "Nashik Red Onion",
        name_hi: "नासिक लाल प्याज",
        category: "vegetables",
        variety: "Garwa Winter Crop",
        farmer: "Ramesh Patil",
        village: "Lasalgaon, Nashik",
        state: "Maharashtra",
        phone: "9850123456",
        rating: 4.8,
        reviewsCount: 88,
        priceKg: 26,
        priceQuintal: 2600,
        mandiRateKg: 22,
        retailRateKg: 45,
        availableKg: 4200,
        moqKg: 50,
        organic: false,
        harvestDate: "2026-08-28",
        img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
        badge: "Direct from Lasalgaon"
    },
    {
        id: "kc-003",
        name: "Punjab Basmati Paddy Rice",
        name_hi: "पंजाब 1121 बासमती चावल",
        category: "grains",
        variety: "Pusa 1121 Extra Long Grain",
        farmer: "Gurpreet Singh Dhillon",
        village: "Khanna, Ludhiana",
        state: "Punjab",
        phone: "9814098765",
        rating: 5.0,
        reviewsCount: 65,
        priceKg: 68,
        priceQuintal: 6800,
        mandiRateKg: 58,
        retailRateKg: 110,
        availableKg: 5000,
        moqKg: 30,
        organic: true,
        harvestDate: "2026-08-20",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        badge: "Export Quality Grade A"
    },
    {
        id: "kc-004",
        name: "Kolar Farm Fresh Tomatoes",
        name_hi: "कोलार फार्म फ्रेश टमाटर",
        category: "vegetables",
        variety: "Vaishnavi Hybrid Red",
        farmer: "Manjunath Gowda",
        village: "Kolar APMC Hub",
        state: "Karnataka",
        phone: "9448011223",
        rating: 4.7,
        reviewsCount: 39,
        priceKg: 19,
        priceQuintal: 1900,
        mandiRateKg: 15,
        retailRateKg: 38,
        availableKg: 1200,
        moqKg: 20,
        organic: false,
        harvestDate: "2026-08-30",
        img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
        badge: "Harvested Today"
    },
    {
        id: "kc-005",
        name: "Ratnagiri Alphonso Mango Pulp/Box",
        name_hi: "रत्नागिरी हापुस आम",
        category: "fruits",
        variety: "Devgad Hapus A+",
        farmer: "Suresh Kelkar",
        village: "Devgad, Ratnagiri",
        state: "Maharashtra",
        phone: "9822055667",
        rating: 5.0,
        reviewsCount: 124,
        priceKg: 160,
        priceQuintal: 16000,
        mandiRateKg: 130,
        retailRateKg: 260,
        availableKg: 800,
        moqKg: 10,
        organic: true,
        harvestDate: "2026-08-24",
        img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
        badge: "100% Naturally Ripened"
    },
    {
        id: "kc-006",
        name: "Latur Organic Toor / Arhar Dal",
        name_hi: "लातूर जैविक अरहर दाल",
        category: "pulses",
        variety: "Desi Unpolished Yellow",
        farmer: "Ankush Deshmukh",
        village: "Latur",
        state: "Maharashtra",
        phone: "9763044556",
        rating: 4.9,
        reviewsCount: 52,
        priceKg: 118,
        priceQuintal: 11800,
        mandiRateKg: 102,
        retailRateKg: 175,
        availableKg: 2400,
        moqKg: 15,
        organic: true,
        harvestDate: "2026-08-10",
        img: "https://images.unsplash.com/photo-1585994192704-58580b06b0bb?auto=format&fit=crop&w=600&q=80",
        badge: "Zero Chemical Polish"
    },
    {
        id: "kc-007",
        name: "Agra Gold Fresh Potatoes",
        name_hi: "आगरा गोल्ड आलू",
        category: "vegetables",
        variety: "Kufri Chipsona Grade 1",
        farmer: "Harish Chandra Verma",
        village: "Khandauli, Agra",
        state: "Uttar Pradesh",
        phone: "9412033445",
        rating: 4.6,
        reviewsCount: 31,
        priceKg: 18,
        priceQuintal: 1800,
        mandiRateKg: 14,
        retailRateKg: 32,
        availableKg: 6500,
        moqKg: 50,
        organic: false,
        harvestDate: "2026-08-27",
        img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
        badge: "Crisp Low-Sugar"
    },
    {
        id: "kc-008",
        name: "Unjha Premium Cumin (Jeera)",
        name_hi: "ऊँझा प्रीमियम जीरा",
        category: "spices",
        variety: "Gujarat Cumin-4",
        farmer: "Prafulbhai Patel",
        village: "Unjha APMC Yard",
        state: "Gujarat",
        phone: "9825099887",
        rating: 4.9,
        reviewsCount: 78,
        priceKg: 310,
        priceQuintal: 31000,
        mandiRateKg: 280,
        retailRateKg: 460,
        availableKg: 1500,
        moqKg: 5,
        organic: true,
        harvestDate: "2026-08-05",
        img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
        badge: "Aroma Rich Machine Cleaned"
    },
    {
        id: "kc-009",
        name: "Kinnow / Orange Citrus",
        name_hi: "अब Abohar किन्नू संतरा",
        category: "fruits",
        variety: "Sweet Juicy Hybrid",
        farmer: "Jagmeet Singh Brar",
        village: "Abohar, Fazilka",
        state: "Punjab",
        phone: "9872011223",
        rating: 4.8,
        reviewsCount: 45,
        priceKg: 38,
        priceQuintal: 3800,
        mandiRateKg: 30,
        retailRateKg: 65,
        availableKg: 3000,
        moqKg: 20,
        organic: false,
        harvestDate: "2026-08-29",
        img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
        badge: "Juicy Farm Fresh"
    },
    {
        id: "kc-010",
        name: "Bikaneri Desi Moong Dal",
        name_hi: "बीकानेरी देशी मूंग दाल",
        category: "pulses",
        variety: "Green Moong Split",
        farmer: "Ramkishan Bishnoi",
        village: "Nokha, Bikaner",
        state: "Rajasthan",
        phone: "9414077889",
        rating: 4.9,
        reviewsCount: 37,
        priceKg: 98,
        priceQuintal: 9800,
        mandiRateKg: 85,
        retailRateKg: 145,
        availableKg: 1800,
        moqKg: 10,
        organic: true,
        harvestDate: "2026-08-18",
        img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80",
        badge: "High Protein Organic"
    },
    {
        id: "kc-011",
        name: "Shimla Royal Delicious Apple",
        name_hi: "शिमला रॉयल डिलीशियस सेब",
        category: "fruits",
        variety: "Himachal Grade A Crisp",
        farmer: "Pawan Thakur",
        village: "Kotgarh, Shimla",
        state: "Himachal Pradesh",
        phone: "9816044332",
        rating: 5.0,
        reviewsCount: 92,
        priceKg: 110,
        priceQuintal: 11000,
        mandiRateKg: 92,
        retailRateKg: 180,
        availableKg: 2000,
        moqKg: 15,
        organic: true,
        harvestDate: "2026-08-25",
        img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
        badge: "Direct Orchard Harvest"
    },
    {
        id: "kc-012",
        name: "Guntur Teja Red Chilli",
        name_hi: "गुंटूर तेजा लाल मिर्च",
        category: "spices",
        variety: "Stemless Spicy S17",
        farmer: "Venkateshwarlu Rao",
        village: "Guntur Mandi",
        state: "Andhra Pradesh",
        phone: "9848033221",
        rating: 4.8,
        reviewsCount: 61,
        priceKg: 195,
        priceQuintal: 19500,
        mandiRateKg: 175,
        retailRateKg: 290,
        availableKg: 1400,
        moqKg: 10,
        organic: false,
        harvestDate: "2026-08-12",
        img: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
        badge: "High Pungency Hot"
    }
];

const MANDI_BENCHMARK_RATES = [
    { commodity: "Wheat (गेहूं)", mandi: "Sehore Mandi", state: "Madhya Pradesh", msp: "₹2,275", rate: "₹2,450", trend: "up", change: "+₹45" },
    { commodity: "Basmati Paddy 1121", mandi: "Khanna Mandi", state: "Punjab", msp: "₹2,183", rate: "₹3,850", trend: "up", change: "+₹120" },
    { commodity: "Red Onion (प्याज)", mandi: "Lasalgaon APMC", state: "Maharashtra", msp: "Market Driven", rate: "₹2,200", trend: "down", change: "-₹80" },
    { commodity: "Tomato (टमाटर)", mandi: "Kolar APMC", state: "Karnataka", msp: "Market Driven", rate: "₹1,600", trend: "up", change: "+₹50" },
    { commodity: "Toor Dal / Arhar", mandi: "Latur Mandi", state: "Maharashtra", msp: "₹7,000", rate: "₹9,800", trend: "up", change: "+₹210" },
    { commodity: "Potato (आलू)", mandi: "Agra Mandi", state: "Uttar Pradesh", msp: "Market Driven", rate: "₹1,450", trend: "down", change: "-₹30" },
    { commodity: "Cumin / Jeera", mandi: "Unjha Mandi", state: "Gujarat", msp: "Market Driven", rate: "₹29,500", trend: "up", change: "+₹650" },
    { commodity: "Cotton (कपास)", mandi: "Rajkot Yard", state: "Gujarat", msp: "₹6,620", rate: "₹7,400", trend: "up", change: "+₹90" },
    { commodity: "Mustard (सरसों)", mandi: "Bharatpur Mandi", state: "Rajasthan", msp: "₹5,650", rate: "₹5,900", trend: "up", change: "+₹40" },
    { commodity: "Chana / Gram", mandi: "Bikaner Yard", state: "Rajasthan", msp: "₹5,440", rate: "₹6,150", trend: "up", change: "+₹75" }
];

// Translations dictionary
const TRANSLATIONS = {
    en: {
        liveMandi: "LIVE APMC MANDI RATES (₹/QTL)",
        brandTag: "किसान कनेक्ट • Direct Farm Trading",
        searchPlaceholder: "Search crops (e.g. Sharbati Wheat, Alphonso, Onions, Basmati)...",
        mandiBoard: "Mandi Board",
        sellProduce: "Sell Produce",
        catAll: "All Crops",
        catGrains: "Grains & Cereals",
        catVeggies: "Fresh Vegetables",
        catFruits: "Organic Fruits",
        catPulses: "Pulses & Dals",
        catSpices: "Spices & Herbs",
        catOrganic: "Certified Organic",
        heroBadge: "100% Direct Farmer Payout • Zero Middleman Markup",
        heroTitle: 'Fresh From <span class="text-gradient">Indian Farms</span> Directly To Your Doorstep',
        heroDesc: "Empowering Indian Kisans with fair market rates in Indian Rupees (₹). Buy fresh harvest directly from verified farmers across India at APMC-benchmarked prices.",
        exploreCrops: "Explore Crops",
        calcSavings: "Calculate ₹ Savings",
        krishiMitra: "Krishi Mitra AI",
        mPaid: "Paid to Farmers",
        mFarmers: "Registered Kisans",
        mMandis: "APMC Mandis Linked",
        mQuality: "Produce Freshness",
        availableHarvest: "Fresh Crops Available for Direct Purchase",
        harvestSubtitle: "Directly sourced, priced in INR (₹) per Kg / Quintal with verified quality tests",
        filterState: "State",
        sortBy: "Sort By",
        priceUnit: "Display Unit",
        organicOnly: "Organic Only",
        reset: "Reset",
        farmerPrice: "Farmer Price",
        retailPrice: "City Retail Price",
        quickOrder: "Instant Order at ₹26/kg",
        fairTradeTitle: "Fair-Trade Economics",
        calcTitle: "Calculate Your Direct-from-Farm Savings in INR (₹)",
        calcSubtitle: "See how much money stays in your pocket and how much extra profit goes straight to the Indian farmer's bank account.",
        selectCommodity: "Select Commodity / Crop",
        purchaseQty: "Monthly Purchase Quantity:",
        impactBreakdown: "Financial Impact (INR ₹)",
        yourSavings: "Your Total Savings",
        kisanExtra: "Extra Kisan Income",
        buyAtFairPrice: "Buy This Harvest at Direct ₹ Rate",
        farmerModalTitle: "List Your Harvest for Sale (अपनी फसल बेचें)",
        farmerModalSub: "Connect directly with buyers across India. Zero commission fee.",
        publishListing: "Publish Produce Listing"
    },
    hi: {
        liveMandi: "लाइव कृषि मंडी भाव (₹/क्विंटल)",
        brandTag: "किसान कनेक्ट • सीधा खेत से व्यापार",
        searchPlaceholder: "फसल खोजें (जैसे शरबती गेहूं, प्याज, बासमती चावल, आम)...",
        mandiBoard: "मंडी भाव",
        sellProduce: "फसल बेचें",
        catAll: "सभी फसलें",
        catGrains: "अनाज एवं दलहन",
        catVeggies: "ताज़ी सब्जियां",
        catFruits: "जैविक फल",
        catPulses: "दालें",
        catSpices: "मसाले",
        catOrganic: "प्रमाणित जैविक",
        heroBadge: "100% किसान को सीधा भुगतान • बिचौलियों का मुनाफा शून्य",
        heroTitle: 'सीधे <span class="text-gradient">भारतीय खेतों</span> से आपकी थाली तक',
        heroDesc: "भारतीय किसानों को उनकी उपज का सही मूल्य (₹) दिलाना। देश भर के सत्यापित किसानों से सीधे खरीदें सर्वोत्तम मंडी भाव पर।",
        exploreCrops: "फसलें देखें",
        calcSavings: "₹ बचत कैलकुलेटर",
        krishiMitra: "कृषि मित्र AI",
        mPaid: "किसानों को भुगतान",
        mFarmers: "पंजीकृत किसान",
        mMandis: "मंडी हब जुड़े",
        mQuality: "ताज़गी रेटिंग",
        availableHarvest: "सीधी खरीद हेतु ताज़ा फसलें",
        harvestSubtitle: "भारतीय रुपये (₹) प्रति किलो/क्विंटल में पारदर्शी भाव",
        filterState: "राज्य",
        sortBy: "क्रमबद्ध करें",
        priceUnit: "मूल्य इकाई",
        organicOnly: "केवल जैविक",
        reset: "रीसेट",
        farmerPrice: "किसान भाव",
        retailPrice: "बाजार फुटकर भाव",
        quickOrder: "₹26/किलो पर तुरंत आर्डर",
        fairTradeTitle: "पारदर्शी व्यापार अर्थशास्त्र",
        calcTitle: "किसान कनेक्ट से अपनी ₹ बचत की गणना करें",
        calcSubtitle: "देखें कि बिचौलियों को हटाकर आप कितने रुपये बचाते हैं और किसान को कितना अधिक मुनाफा मिलता है।",
        selectCommodity: "फसल चुनें",
        purchaseQty: "मासिक खरीद मात्रा:",
        impactBreakdown: "आर्थिक लाभ विवरण (INR ₹)",
        yourSavings: "आपकी कुल बचत",
        kisanExtra: "किसान का अतिरिक्त लाभ",
        buyAtFairPrice: "उचित मूल्य पर अभी खरीदें",
        farmerModalTitle: "अपनी फसल बेचने के लिए जोड़ें",
        farmerModalSub: "पूरे भारत के खरीदारों से सीधे जुड़ें। शून्य कमीशन।",
        publishListing: "फसल लिस्टिंग प्रकाशित करें"
    }
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

let state = {
    crops: [],
    selectedCategory: "all",
    selectedState: "all",
    selectedSort: "recommended",
    displayUnit: "kg", // "kg" or "quintal"
    organicOnly: false,
    searchQuery: "",
    cart: [],
    currentLang: "en"
};

// ==========================================
// 3. INITIALIZATION & STORAGE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    loadCrops();
    loadCart();
    renderMandiTicker();
    renderMandiTable();
    renderMarketplace();
    setupEventListeners();
    updateSavingsCalculator();
});

function loadCrops() {
    const saved = localStorage.getItem("kisan_crops");
    if (saved) {
        try {
            state.crops = JSON.parse(saved);
        } catch (e) {
            state.crops = [...INITIAL_CROPS];
        }
    } else {
        state.crops = [...INITIAL_CROPS];
        localStorage.setItem("kisan_crops", JSON.stringify(state.crops));
    }
}

function saveCrops() {
    localStorage.setItem("kisan_crops", JSON.stringify(state.crops));
}

function loadCart() {
    const saved = localStorage.getItem("kisan_cart");
    if (saved) {
        try {
            state.cart = JSON.parse(saved);
        } catch (e) {
            state.cart = [];
        }
    }
    updateCartBadge();
}

function saveCart() {
    localStorage.setItem("kisan_cart", JSON.stringify(state.cart));
    updateCartBadge();
}

// ==========================================
// 4. TICKER & MANDI BOARD
// ==========================================

function renderMandiTicker() {
    const track = document.getElementById("mandiTickerTrack");
    if (!track) return;

    // Double dataset for continuous smooth infinite scrolling
    const items = [...MANDI_BENCHMARK_RATES, ...MANDI_BENCHMARK_RATES];
    track.innerHTML = items.map(item => `
        <div class="ticker-item">
            <span class="crop">${item.commodity}</span>
            <span class="mandi">(${item.mandi}):</span>
            <span class="price">${item.rate}/qtl</span>
            <span class="${item.trend === 'up' ? 'trend-up' : 'trend-down'}">
                <i class="fa-solid fa-arrow-${item.trend === 'up' ? 'trend-up' : 'trend-down'}"></i> ${item.change}
            </span>
        </div>
    `).join("");
}

function renderMandiTable(filterText = "") {
    const tbody = document.getElementById("mandiTableBody");
    if (!tbody) return;

    const filtered = MANDI_BENCHMARK_RATES.filter(item => 
        item.commodity.toLowerCase().includes(filterText.toLowerCase()) ||
        item.mandi.toLowerCase().includes(filterText.toLowerCase()) ||
        item.state.toLowerCase().includes(filterText.toLowerCase())
    );

    tbody.innerHTML = filtered.map(item => `
        <tr>
            <td><strong>${item.commodity}</strong></td>
            <td><i class="fa-solid fa-building-wheat text-muted"></i> ${item.mandi}</td>
            <td>${item.state}</td>
            <td><span class="text-muted">${item.msp}</span></td>
            <td><strong class="text-emerald">${item.rate}</strong></td>
            <td>
                <span class="${item.trend === 'up' ? 'text-success' : 'text-amber'} font-bold">
                    <i class="fa-solid fa-arrow-${item.trend === 'up' ? 'up' : 'down'}"></i> ${item.change}
                </span>
            </td>
        </tr>
    `).join("");
}

// ==========================================
// 5. MARKETPLACE RENDERING & FILTERS
// ==========================================

function renderMarketplace() {
    const grid = document.getElementById("produceGrid");
    const emptyState = document.getElementById("emptyState");
    const visibleCount = document.getElementById("visibleCount");
    if (!grid) return;

    let list = [...state.crops];

    // Filter Category
    if (state.selectedCategory !== "all") {
        if (state.selectedCategory === "organic") {
            list = list.filter(c => c.organic);
        } else {
            list = list.filter(c => c.category === state.selectedCategory);
        }
    }

    // Filter State
    if (state.selectedState !== "all") {
        list = list.filter(c => c.state.toLowerCase() === state.selectedState.toLowerCase());
    }

    // Filter Organic Checkbox
    if (state.organicOnly) {
        list = list.filter(c => c.organic);
    }

    // Filter Search Query
    if (state.searchQuery.trim() !== "") {
        const q = state.searchQuery.toLowerCase();
        list = list.filter(c => 
            c.name.toLowerCase().includes(q) ||
            (c.name_hi && c.name_hi.toLowerCase().includes(q)) ||
            c.farmer.toLowerCase().includes(q) ||
            c.village.toLowerCase().includes(q) ||
            c.variety.toLowerCase().includes(q)
        );
    }

    // Sorting
    if (state.selectedSort === "price-asc") {
        list.sort((a, b) => a.priceKg - b.priceKg);
    } else if (state.selectedSort === "price-desc") {
        list.sort((a, b) => b.priceKg - a.priceKg);
    } else if (state.selectedSort === "rating") {
        list.sort((a, b) => b.rating - a.rating);
    } else if (state.selectedSort === "freshness") {
        list.sort((a, b) => new Date(b.harvestDate) - new Date(a.harvestDate));
    } else if (state.selectedSort === "savings") {
        list.sort((a, b) => (b.retailRateKg - b.priceKg) - (a.retailRateKg - a.priceKg));
    }

    // Update Counter
    if (visibleCount) visibleCount.innerText = list.length;

    if (list.length === 0) {
        grid.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    const isKg = state.displayUnit === "kg";

    grid.innerHTML = list.map(crop => {
        const displayPrice = isKg ? `₹${crop.priceKg}` : `₹${crop.priceQuintal.toLocaleString('en-IN')}`;
        const unitLabel = isKg ? "/kg" : "/qtl";
        const mandiDisplay = isKg ? `₹${crop.mandiRateKg}/kg` : `₹${(crop.mandiRateKg * 100).toLocaleString('en-IN')}/qtl`;
        const savingsPct = Math.round(((crop.retailRateKg - crop.priceKg) / crop.retailRateKg) * 100);

        return `
        <div class="produce-card" data-id="${crop.id}">
            <div class="produce-img-wrap">
                <img src="${crop.img}" alt="${crop.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80'">
                <div class="badge-overlay-left">
                    ${crop.organic ? `<span class="card-tag tag-organic"><i class="fa-solid fa-leaf"></i> Organic</span>` : ''}
                    <span class="card-tag tag-fresh"><i class="fa-solid fa-clock"></i> Harvest: ${crop.harvestDate}</span>
                </div>
                <div class="badge-overlay-right">
                    <span class="card-tag tag-state"><i class="fa-solid fa-location-dot"></i> ${crop.village.split(',')[0]}</span>
                </div>
            </div>

            <div class="produce-body">
                <div class="farmer-row">
                    <div class="farmer-meta">
                        <div class="farmer-avatar">${crop.farmer.charAt(0)}</div>
                        <span class="farmer-name">${crop.farmer}</span>
                    </div>
                    <div class="farmer-rating">
                        <i class="fa-solid fa-star text-amber"></i> ${crop.rating} (${crop.reviewsCount})
                    </div>
                </div>

                <h3 class="crop-title">${state.currentLang === 'hi' && crop.name_hi ? crop.name_hi : crop.name}</h3>
                <div class="crop-specs">
                    <span><i class="fa-solid fa-seedling"></i> ${crop.variety}</span>
                    <span><i class="fa-solid fa-box"></i> MOQ: ${crop.moqKg} kg</span>
                </div>

                <div class="card-price-box">
                    <div>
                        <div class="card-farmer-price">${displayPrice} <span class="unit-label">${unitLabel}</span></div>
                        <span style="font-size:0.75rem; color:#10b981; font-weight:700;">Save ${savingsPct}% vs Market</span>
                    </div>
                    <div class="card-mandi-benchmark">
                        <span class="mandi-lbl">APMC Mandi Rate</span>
                        <span class="mandi-rate-val">${mandiDisplay}</span>
                    </div>
                </div>

                <div class="stock-progress-bar">
                    <div class="stock-text">
                        <span>Available Stock</span>
                        <strong>${crop.availableKg.toLocaleString('en-IN')} kg</strong>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill fill-green" style="width: 75%;"></div>
                    </div>
                </div>

                <div class="card-actions">
                    <button class="btn btn-card-bid" onclick="window.openBidModal('${crop.id}')">
                        <i class="fa-solid fa-handshake"></i> Direct Bid
                    </button>
                    <button class="btn btn-card-buy" onclick="window.addToCart('${crop.id}')">
                        <i class="fa-solid fa-cart-plus"></i> Buy in ₹
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join("");
}

// ==========================================
// 6. SAVINGS CALCULATOR LOGIC (INR ₹)
// ==========================================

const COMMODITY_RATES = {
    wheat: { farmer: 34, market: 52, name: "Sharbati MP Wheat" },
    onion: { farmer: 26, market: 45, name: "Nashik Red Onion" },
    potato: { farmer: 18, market: 32, name: "Agra Gold Potato" },
    rice: { farmer: 68, market: 110, name: "Punjab Basmati Rice" },
    tomato: { farmer: 19, market: 38, name: "Kolar Fresh Tomatoes" },
    mango: { farmer: 160, market: 260, name: "Ratnagiri Alphonso Mango" },
    toor: { farmer: 118, market: 175, name: "Latur Organic Toor Dal" }
};

function updateSavingsCalculator() {
    const cropKey = document.getElementById("calcCropSelect")?.value || "onion";
    const qty = parseInt(document.getElementById("calcQuantitySlider")?.value || "50", 10);

    const data = COMMODITY_RATES[cropKey] || COMMODITY_RATES.onion;
    const farmerRate = data.farmer;
    const marketRate = data.market;

    const directCost = farmerRate * qty;
    const marketCost = marketRate * qty;
    const buyerSavings = marketCost - directCost;
    const farmerExtraGain = Math.round(directCost * 0.22); // ~22% extra over distressed middleman buyout

    // Update DOM
    const qtyVal = document.getElementById("calcQtyVal");
    if (qtyVal) qtyVal.innerText = qty;

    const fRate = document.getElementById("calcFarmerRate");
    if (fRate) fRate.innerText = `₹${farmerRate}/kg`;

    const mRate = document.getElementById("calcMarketRate");
    if (mRate) mRate.innerText = `₹${marketRate}/kg`;

    const bSavings = document.getElementById("calcBuyerSavings");
    if (bSavings) bSavings.innerText = `₹${buyerSavings.toLocaleString('en-IN')}`;

    const fGain = document.getElementById("calcFarmerGain");
    if (fGain) fGain.innerText = `+ ₹${farmerExtraGain.toLocaleString('en-IN')}`;

    const dTotal = document.getElementById("calcDirectTotal");
    if (dTotal) dTotal.innerText = `₹${directCost.toLocaleString('en-IN')}`;

    const mTotal = document.getElementById("calcMarketTotal");
    if (mTotal) mTotal.innerText = `₹${marketCost.toLocaleString('en-IN')}`;

    const barDirect = document.getElementById("barDirectFill");
    if (barDirect) {
        const pct = Math.round((directCost / marketCost) * 100);
        barDirect.style.width = `${pct}%`;
    }
}

window.applyCalcToMarketplace = function() {
    const cropKey = document.getElementById("calcCropSelect")?.value || "onion";
    const data = COMMODITY_RATES[cropKey];
    if (data) {
        const searchInput = document.getElementById("globalSearchInput");
        if (searchInput) {
            searchInput.value = data.name.split(" ")[0];
            state.searchQuery = data.name.split(" ")[0];
            renderMarketplace();
            scrollToMarketplace();
            showToast(`Showing direct listings for ${data.name}`, "info");
        }
    }
};

// ==========================================
// 7. SHOPPING CART & CHECKOUT (INR)
// ==========================================

window.addToCart = function(cropId, quantityKg = null) {
    const crop = state.crops.find(c => c.id === cropId);
    if (!crop) return;

    const defaultQty = quantityKg || crop.moqKg || 10;
    const existingIndex = state.cart.findIndex(item => item.id === cropId);

    if (existingIndex > -1) {
        state.cart[existingIndex].qty += defaultQty;
    } else {
        state.cart.push({
            id: crop.id,
            name: crop.name,
            farmer: crop.farmer,
            village: crop.village,
            priceKg: crop.priceKg,
            qty: defaultQty,
            moqKg: crop.moqKg,
            img: crop.img
        });
    }

    saveCart();
    showToast(`Added ${defaultQty} kg of ${crop.name} to Cart in ₹!`, "success");
};

window.quickBuyFeatured = function() {
    const featured = state.crops.find(c => c.id === "kc-002") || state.crops[0];
    if (featured) {
        window.addToCart(featured.id, 50);
        window.openCartModal();
    }
};

function updateCartBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const totalAmount = state.cart.reduce((sum, item) => sum + (item.priceKg * item.qty), 0);

    const badge = document.getElementById("cartCountBadge");
    const headerTotal = document.getElementById("cartTotalHeader");

    if (badge) badge.innerText = state.cart.length;
    if (headerTotal) headerTotal.innerText = `₹${totalAmount.toLocaleString('en-IN')}`;
}

window.openCartModal = function() {
    renderCartModal();
    const modal = document.getElementById("cartModal");
    if (modal) modal.style.display = "flex";
};

window.closeCartModal = function() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.style.display = "none";
};

function renderCartModal() {
    const container = document.getElementById("cartItemsContainer");
    const emptyMsg = document.getElementById("cartEmptyMsg");
    const summaryCol = document.getElementById("cartSummaryColumn");

    if (!container) return;

    if (state.cart.length === 0) {
        container.innerHTML = "";
        if (emptyMsg) emptyMsg.style.display = "block";
        if (summaryCol) summaryCol.style.opacity = "0.5";
        updateCartTotals(0);
        return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";
    if (summaryCol) summaryCol.style.opacity = "1";

    container.innerHTML = state.cart.map(item => `
        <div class="cart-item-row">
            <div class="cart-item-info">
                <img src="${item.img}" class="cart-item-thumb" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=100&q=80'">
                <div class="cart-item-details">
                    <h5>${item.name}</h5>
                    <div class="cart-item-farmer"><i class="fa-solid fa-user-check"></i> ${item.farmer} (${item.village})</div>
                    <div class="cart-item-rate">₹${item.priceKg}/kg • Subtotal: <strong>₹${(item.priceKg * item.qty).toLocaleString('en-IN')}</strong></div>
                </div>
            </div>
            <div class="cart-qty-ctrl">
                <button class="qty-btn" onclick="window.changeCartQty('${item.id}', -5)">-</button>
                <span style="font-weight:700; font-size:0.9rem; min-width:32px; text-align:center;">${item.qty} kg</span>
                <button class="qty-btn" onclick="window.changeCartQty('${item.id}', 5)">+</button>
                <button class="cart-remove-btn" onclick="window.removeFromCart('${item.id}')" title="Remove"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join("");

    const subtotal = state.cart.reduce((sum, item) => sum + (item.priceKg * item.qty), 0);
    updateCartTotals(subtotal);
}

window.changeCartQty = function(id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== id);
    }
    saveCart();
    renderCartModal();
};

window.removeFromCart = function(id) {
    state.cart = state.cart.filter(i => i.id !== id);
    saveCart();
    renderCartModal();
    showToast("Item removed from cart", "info");
};

function updateCartTotals(subtotal) {
    const packing = subtotal > 0 ? 25 : 0;
    const logistics = subtotal > 0 ? 60 : 0;
    const grandTotal = subtotal + packing + logistics;

    const sub = document.getElementById("summarySubtotal");
    const farmerPayout = document.getElementById("summaryFarmerPayout");
    const log = document.getElementById("summaryLogistics");
    const grand = document.getElementById("summaryGrandTotal");
    const payBtn = document.getElementById("checkoutPayBtnAmount");

    if (sub) sub.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
    if (farmerPayout) farmerPayout.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
    if (log) log.innerText = `₹${logistics}`;
    if (grand) grand.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
    if (payBtn) payBtn.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// ==========================================
// 8. FARMER PRODUCE LISTING FORM (SELL)
// ==========================================

window.openFarmerPortal = function() {
    const modal = document.getElementById("farmerModal");
    if (modal) modal.style.display = "flex";
    
    // Set default harvest date to today
    const dateInput = document.getElementById("harvestDateInput");
    if (dateInput && !dateInput.value) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
};

window.closeFarmerPortal = function() {
    const modal = document.getElementById("farmerModal");
    if (modal) modal.style.display = "none";
};

function handleFarmerListingSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("cropNameInput").value;
    const category = document.getElementById("cropCategorySelect").value;
    const priceKg = parseFloat(document.getElementById("cropPriceInput").value);
    const availableKg = parseInt(document.getElementById("cropQuantityInput").value, 10);
    const moqKg = parseInt(document.getElementById("cropMoqInput").value, 10);
    const farmer = document.getElementById("farmerNameInput").value;
    const phone = document.getElementById("farmerPhoneInput").value;
    const stateVal = document.getElementById("farmerStateSelect").value;
    const village = document.getElementById("farmerVillageInput").value;
    const harvestDate = document.getElementById("harvestDateInput").value;
    const organic = document.getElementById("cropOrganicCheckbox").checked;

    // Realistic crop placeholder images according to category
    const categoryImages = {
        grains: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
        vegetables: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
        fruits: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
        pulses: "https://images.unsplash.com/photo-1585994192704-58580b06b0bb?auto=format&fit=crop&w=600&q=80",
        spices: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80"
    };

    const newCrop = {
        id: `kc-${Date.now()}`,
        name: name,
        category: category,
        variety: "Direct Farm Yield",
        farmer: farmer,
        village: `${village}, ${stateVal}`,
        state: stateVal,
        phone: phone,
        rating: 5.0,
        reviewsCount: 1,
        priceKg: priceKg,
        priceQuintal: Math.round(priceKg * 100),
        mandiRateKg: Math.round(priceKg * 0.88),
        retailRateKg: Math.round(priceKg * 1.55),
        availableKg: availableKg,
        moqKg: moqKg,
        organic: organic,
        harvestDate: harvestDate,
        img: categoryImages[category] || categoryImages.grains,
        badge: "New Farmer Listing"
    };

    state.crops.unshift(newCrop);
    saveCrops();
    renderMarketplace();
    window.closeFarmerPortal();
    e.target.reset();

    showToast(`🎉 Produce "${name}" successfully listed at ₹${priceKg}/kg!`, "success");
    scrollToMarketplace();
}

// ==========================================
// 9. DIRECT BIDDING & NEGOTIATION
// ==========================================

window.openBidModal = function(cropId) {
    const crop = state.crops.find(c => c.id === cropId);
    if (!crop) return;

    document.getElementById("bidCropId").value = crop.id;
    document.getElementById("bidCropName").innerText = crop.name;
    document.getElementById("bidFarmerName").innerText = `Kisan: ${crop.farmer} (${crop.village})`;
    document.getElementById("bidAskingPrice").innerText = `₹${crop.priceKg}/kg`;
    document.getElementById("bidMandiBenchmark").innerText = `₹${crop.mandiRateKg}/kg`;
    document.getElementById("bidOfferPrice").value = crop.priceKg;
    document.getElementById("bidQuantity").value = crop.moqKg || 25;

    updateBidTotal();

    const modal = document.getElementById("bidModal");
    if (modal) modal.style.display = "flex";
};

window.closeBidModal = function() {
    const modal = document.getElementById("bidModal");
    if (modal) modal.style.display = "none";
};

function updateBidTotal() {
    const price = parseFloat(document.getElementById("bidOfferPrice")?.value || 0);
    const qty = parseFloat(document.getElementById("bidQuantity")?.value || 0);
    const total = price * qty;
    const est = document.getElementById("bidTotalEstimate");
    if (est) est.innerText = `₹${total.toLocaleString('en-IN')}`;
}

function handleBidSubmit(e) {
    e.preventDefault();
    const cropId = document.getElementById("bidCropId").value;
    const crop = state.crops.find(c => c.id === cropId);
    const offerPrice = document.getElementById("bidOfferPrice").value;
    const qty = document.getElementById("bidQuantity").value;
    const buyerName = document.getElementById("bidBuyerName").value;

    window.closeBidModal();
    showToast(`Bid of ₹${offerPrice}/kg for ${qty}kg submitted to Kisan ${crop ? crop.farmer : ''}!`, "success");

    // Simulated farmer WhatsApp/SMS notification
    setTimeout(() => {
        showToast(`📲 SMS sent to farmer ${crop ? crop.phone : ''}: Offer ₹${offerPrice}/kg from ${buyerName}`, "info");
    }, 1500);
}

// ==========================================
// 10. CHECKOUT CONFIRMATION & PAYMENT MODAL
// ==========================================

function handleProceedCheckout() {
    if (state.cart.length === 0) {
        showToast("Your cart is empty!", "warning");
        return;
    }

    const name = document.getElementById("checkoutBuyerName")?.value;
    const phone = document.getElementById("checkoutBuyerPhone")?.value;
    const addr = document.getElementById("checkoutBuyerAddress")?.value;

    if (!name || !phone || !addr) {
        showToast("Please enter your name, mobile, and delivery address!", "warning");
        return;
    }

    const subtotal = state.cart.reduce((sum, item) => sum + (item.priceKg * item.qty), 0);
    const grandTotal = subtotal + 25 + 60;
    const orderId = `#KC-${Math.floor(100000 + Math.random() * 900000)}`;

    window.closeCartModal();

    // Show Success Modal
    document.getElementById("successOrderId").innerText = orderId;
    document.getElementById("successAmountText").innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
    document.getElementById("paymentSuccessModal").style.display = "flex";

    // Clear cart
    state.cart = [];
    saveCart();
}

window.closePaymentModal = function() {
    document.getElementById("paymentSuccessModal").style.display = "none";
};

window.downloadOrderSlip = function() {
    const orderId = document.getElementById("successOrderId").innerText;
    const amount = document.getElementById("successAmountText").innerText;
    
    const invoiceText = `
=========================================
   KISANCONNECT (किसान कनेक्ट) TAX INVOICE
   Direct Farm-to-Fork Payout Settlement
=========================================
Order ID     : ${orderId}
Date         : ${new Date().toLocaleDateString('en-IN')}
Total Paid   : ${amount} (INR)
Status       : 100% Locked in Kisan Escrow
Logistics    : Farm Doorstep Pickup Dispatched
GST/Taxes    : Zero Commission (0%)
=========================================
Thank you for supporting Indian Farmers!
`;
    const blob = new Blob([invoiceText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `KisanConnect_Invoice_${orderId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Invoice downloaded successfully!", "success");
};

// ==========================================
// 11. KRISHI MITRA AI ASSISTANT
// ==========================================

window.toggleAiDrawer = function() {
    const drawer = document.getElementById("aiDrawer");
    if (!drawer) return;
    drawer.style.display = drawer.style.display === "none" ? "flex" : "none";
};

window.askAiPreset = function(question) {
    const input = document.getElementById("aiInputText");
    if (input) {
        input.value = question;
        sendAiMessage();
    }
};

function sendAiMessage() {
    const input = document.getElementById("aiInputText");
    const container = document.getElementById("aiMessagesContainer");
    if (!input || !container) return;

    const text = input.value.trim();
    if (!text) return;

    // Append User Message
    const userDiv = document.createElement("div");
    userDiv.className = "ai-msg user";
    userDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
    container.appendChild(userDiv);
    input.value = "";
    container.scrollTop = container.scrollHeight;

    // AI Response Generator
    setTimeout(() => {
        let reply = "🙏 Thank you for your question. ";
        const q = text.toLowerCase();

        if (q.includes("wheat") || q.includes("गेहूं")) {
            reply += "Sharbati Wheat in Madhya Pradesh (Sehore/Indore Mandi) is currently trading at **₹2,450 to ₹3,400/quintal (₹34/kg)**. MSP for Wheat is ₹2,275/qtl.";
        } else if (q.includes("onion") || q.includes("प्याज")) {
            reply += "Nashik/Lasalgaon Red Onion modal rate is **₹2,200/quintal (₹22 - ₹26/kg)**. Demand from South India remains steady.";
        } else if (q.includes("msp") || q.includes("support price")) {
            reply += "Government MSP Rates (2026 Indicative): Wheat ₹2,275/qtl, Paddy Common ₹2,183/qtl, Toor Dal ₹7,000/qtl, Mustard ₹5,650/qtl, Cotton ₹6,620/qtl.";
        } else if (q.includes("rice") || q.includes("basmati") || q.includes("चावल")) {
            reply += "Punjab Pusa 1121 Basmati Paddy is strong at **₹3,850 - ₹4,200/quintal** in Khanna Mandi with high export demand.";
        } else if (q.includes("price") || q.includes("rate") || q.includes("₹")) {
            reply += "On KisanConnect, all prices are transparent in **INR (₹)** directly received by the farmer. You save 35-50% compared to middleman supermarket rates!";
        } else {
            reply += "Based on our live APMC Mandi feeds, overall harvest sentiment is positive across North and Western India. Sowing of Rabi crops is on track. How else can I assist your farm purchase or sales?";
        }

        const botDiv = document.createElement("div");
        botDiv.className = "ai-msg bot";
        botDiv.innerHTML = `<div class="msg-bubble">${reply}</div>`;
        container.appendChild(botDiv);
        container.scrollTop = container.scrollHeight;
    }, 600);
}

// ==========================================
// 12. SEARCH, FILTERS & UTILITY HELPERS
// ==========================================

function setupEventListeners() {
    // Category Tabs
    document.querySelectorAll(".cat-pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".cat-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.selectedCategory = btn.getAttribute("data-category");
            renderMarketplace();
        });
    });

    // State Filter
    document.getElementById("stateFilter")?.addEventListener("change", (e) => {
        state.selectedState = e.target.value;
        renderMarketplace();
    });

    // Sort Filter
    document.getElementById("sortFilter")?.addEventListener("change", (e) => {
        state.selectedSort = e.target.value;
        renderMarketplace();
    });

    // Display Unit Buttons (kg vs quintal)
    document.querySelectorAll(".unit-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".unit-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.displayUnit = btn.getAttribute("data-unit");
            renderMarketplace();
        });
    });

    // Organic Checkbox
    document.getElementById("organicOnlyFilter")?.addEventListener("change", (e) => {
        state.organicOnly = e.target.checked;
        renderMarketplace();
    });

    // Reset Filters
    document.getElementById("resetFiltersBtn")?.addEventListener("click", window.resetAllFilters);

    // Global Search with Autocomplete
    const searchInput = document.getElementById("globalSearchInput");
    const clearBtn = document.getElementById("clearSearchBtn");
    const dropdown = document.getElementById("searchDropdown");

    searchInput?.addEventListener("input", (e) => {
        const val = e.target.value;
        state.searchQuery = val;
        clearBtn.style.display = val ? "block" : "none";
        renderMarketplace();
        renderSearchDropdown(val);
    });

    clearBtn?.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        clearBtn.style.display = "none";
        dropdown.style.display = "none";
        renderMarketplace();
    });

    // Savings Calculator Slider & Select
    document.getElementById("calcQuantitySlider")?.addEventListener("input", updateSavingsCalculator);
    document.getElementById("calcCropSelect")?.addEventListener("change", updateSavingsCalculator);

    // Language Selector
    document.getElementById("langSelect")?.addEventListener("change", (e) => {
        switchLanguage(e.target.value);
    });

    // Modal Triggers
    document.getElementById("openFarmerPortalBtn")?.addEventListener("click", window.openFarmerPortal);
    document.getElementById("closeFarmerModalBtn")?.addEventListener("click", window.closeFarmerPortal);
    document.getElementById("cancelFarmerModalBtn")?.addEventListener("click", window.closeFarmerPortal);
    document.getElementById("farmerListingForm")?.addEventListener("submit", handleFarmerListingSubmit);

    document.getElementById("openMandiModalBtn")?.addEventListener("click", () => {
        document.getElementById("mandiModal").style.display = "flex";
    });
    document.getElementById("closeMandiModalBtn")?.addEventListener("click", () => {
        document.getElementById("mandiModal").style.display = "none";
    });
    document.getElementById("mandiSearchInput")?.addEventListener("input", (e) => {
        renderMandiTable(e.target.value);
    });

    document.getElementById("openCartBtn")?.addEventListener("click", window.openCartModal);
    document.getElementById("closeCartModalBtn")?.addEventListener("click", window.closeCartModal);
    document.getElementById("proceedCheckoutBtn")?.addEventListener("click", handleProceedCheckout);

    document.getElementById("closeBidModalBtn")?.addEventListener("click", window.closeBidModal);
    document.getElementById("cancelBidModalBtn")?.addEventListener("click", window.closeBidModal);
    document.getElementById("bidForm")?.addEventListener("submit", handleBidSubmit);
    document.getElementById("bidOfferPrice")?.addEventListener("input", updateBidTotal);
    document.getElementById("bidQuantity")?.addEventListener("input", updateBidTotal);

    document.getElementById("closePaymentModalBtn")?.addEventListener("click", window.closePaymentModal);

    // Krishi Mitra AI
    document.getElementById("talkToAiBtn")?.addEventListener("click", window.toggleAiDrawer);
    document.getElementById("closeAiDrawerBtn")?.addEventListener("click", window.toggleAiDrawer);
    document.getElementById("sendAiMsgBtn")?.addEventListener("click", sendAiMessage);
    document.getElementById("aiInputText")?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendAiMessage();
    });

    // Hero buttons
    document.getElementById("exploreProduceBtn")?.addEventListener("click", scrollToMarketplace);
    document.getElementById("calcSavingsHeroBtn")?.addEventListener("click", () => {
        document.getElementById("savingsCalculatorSection")?.scrollIntoView({ behavior: "smooth" });
    });
}

function renderSearchDropdown(query) {
    const dropdown = document.getElementById("searchDropdown");
    if (!dropdown) return;

    if (!query || query.trim().length < 2) {
        dropdown.style.display = "none";
        return;
    }

    const matches = state.crops.filter(c => 
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.farmer.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (matches.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    dropdown.innerHTML = matches.map(c => `
        <div class="search-drop-item" onclick="window.selectSearchCrop('${c.name}')">
            <span><strong>${c.name}</strong> (${c.farmer})</span>
            <strong class="text-emerald">₹${c.priceKg}/kg</strong>
        </div>
    `).join("");

    dropdown.style.display = "block";
}

window.selectSearchCrop = function(cropName) {
    const input = document.getElementById("globalSearchInput");
    if (input) {
        input.value = cropName;
        state.searchQuery = cropName;
        document.getElementById("searchDropdown").style.display = "none";
        renderMarketplace();
        scrollToMarketplace();
    }
};

window.resetAllFilters = function() {
    state.selectedCategory = "all";
    state.selectedState = "all";
    state.selectedSort = "recommended";
    state.displayUnit = "kg";
    state.organicOnly = false;
    state.searchQuery = "";

    const searchInput = document.getElementById("globalSearchInput");
    if (searchInput) searchInput.value = "";
    const stateFilter = document.getElementById("stateFilter");
    if (stateFilter) stateFilter.value = "all";
    const sortFilter = document.getElementById("sortFilter");
    if (sortFilter) sortFilter.value = "recommended";
    const organicChk = document.getElementById("organicOnlyFilter");
    if (organicChk) organicChk.checked = false;

    document.querySelectorAll(".cat-pill").forEach(b => b.classList.toggle("active", b.getAttribute("data-category") === "all"));
    document.querySelectorAll(".unit-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-unit") === "kg"));

    renderMarketplace();
    showToast("Filters reset to default", "info");
};

window.filterByKeyword = function(keyword) {
    const input = document.getElementById("globalSearchInput");
    if (input) {
        input.value = keyword;
        state.searchQuery = keyword;
        renderMarketplace();
        scrollToMarketplace();
    }
};

window.filterByState = function(stateName) {
    const select = document.getElementById("stateFilter");
    if (select) {
        select.value = stateName;
        state.selectedState = stateName;
        renderMarketplace();
        scrollToMarketplace();
    }
};

function scrollToMarketplace() {
    document.getElementById("marketplaceSection")?.scrollIntoView({ behavior: "smooth" });
}

function switchLanguage(lang) {
    state.currentLang = lang;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    renderMarketplace();
    showToast(`Language switched to ${lang.toUpperCase()}`, "info");
}

function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "fa-circle-check" : type === "warning" ? "fa-triangle-exclamation" : "fa-circle-info";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
