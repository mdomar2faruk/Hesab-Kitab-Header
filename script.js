// --- Initial Load & Window Events ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('.app-section');
    sections.forEach(sec => sec.style.display = 'none');
    const targetSection = document.getElementById('section-' + sectionId);
    if (targetSection) targetSection.style.display = 'block';
    
    if (sectionId === 'home') loadTableData();
    if (sectionId === 'products') loadTableData2();
}

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    const savedLang = localStorage.getItem('lang') || 'bn';
    setLanguage(savedLang);

    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        showUserProfile(user);
    }
    
    const lastSection = localStorage.getItem('currentSection') || 'home';
    showSection(lastSection, false);

    const savedScrollPos = localStorage.getItem('scrollPosition');
    if (savedScrollPos) {
        window.scrollTo(0, parseInt(savedScrollPos));
        localStorage.removeItem('scrollPosition');
    }
};

window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
});






       // --- Section Management ---
function showSection(sectionName, saveState = true) {
    if (saveState) {
        localStorage.setItem('currentSection', sectionName);
    }

    const contentArea = document.getElementById('mainContentArea');
    const lang = localStorage.getItem('lang') || 'bn';
    const savedUser = JSON.parse(localStorage.getItem('userProfile'));
    
    const adminName = "MD OMAR FARUK";
    const adminEmail = "omarfarkqwerty58@gmail.com";

    const user2Name = savedUser ? savedUser.name : "Karim Uddin";
    const user2Email = savedUser ? savedUser.email : "karim@gmail.com";

    const isDark = document.body.classList.contains('dark-mode');

    if (sectionName === 'settings') {
        contentArea.innerHTML = `
            <h2>⚙️ ${lang === 'bn' ? 'মেইন অ্যাডমিন সেটিংস: ইউজার এক্সেস লিস্ট' : 'Main Admin Settings: User Access List'}</h2>
            <p>${lang === 'bn' ? 'এখানে ১০টি ইউজার স্লট রয়েছে। নতুন কেউ রেজিস্টার করলে নোটিফিকেশন আসবে এবং স্ট্যাটাস থেকে কন্ট্রোল করা যাবে:' : 'Here are 10 user slots. New registrations will trigger notifications and can be controlled here:'}</p>
            
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${lang === 'bn' ? 'ইউজার আইডি' : 'User ID'}</th>
                        <th>${lang === 'bn' ? 'ব্যবহারকারীর নাম ও ইমেল' : 'User Name & Email'}</th>
                        <th>${lang === 'bn' ? 'লগইন ডিভাইস' : 'Login Devices'}</th>
                        <th>${lang === 'bn' ? 'অনুমোদিত ফাইল এক্সেস' : 'Allowed File Access'}</th>
                        <th>${lang === 'bn' ? 'স্ট্যাটাস ও কন্ট্রোল' : 'Status & Control'}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>USER-01</strong> <span style="color:blue; font-size:11px;">(Main Admin)</span></td>
                        <td>${adminName}<br><span style="font-size:11px; color:gray;">${adminEmail}</span></td>
                        <td>💻 ২জি/পিসি (Active)</td>
                        <td>সম্পূর্ণ অ্যাক্সেস (সব ফাইল)</td>
                        <td>
                            <select class="status-dropdown" style="color: green;" onchange="handleStatusChange(this, 'USER-01')">
                                <option value="active" selected>Active</option>
                                <option value="deactive">Deactive</option>
                                <option value="block">Block</option>
                                <option value="unblock">Unblock</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>USER-02</strong></td>
                        <td>${user2Name}<br><span style="font-size:11px; color:gray;">${user2Email}</span></td>
                        <td>📱 ফোন ও 💻 পিসি (২টি ডিভাইস)</td>
                        <td>ফাইল ৩ (অর্ডার)</td>
                        <td>
                            <select class="status-dropdown" style="color: green;" onchange="handleStatusChange(this, 'USER-02')">
                                <option value="active" selected>Active</option>
                                <option value="deactive">Deactive</option>
                                <option value="block">Block</option>
                                <option value="unblock">Unblock</option>
                            </select>
                        </td>
                    </tr>
                    <tr><td>USER-03</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-03')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-04</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-04')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-05</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-05')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-06</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-06')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-07</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-07')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-08</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-08')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-09</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-09')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                    <tr><td>USER-10</td><td>0<br><span style="font-size:11px; color:gray;">0</span></td><td>০ ডিভাইস</td><td>0</td>
                        <td><select class="status-dropdown" style="color: gray;" onchange="handleStatusChange(this, 'USER-10')"><option value="active">Active</option><option value="deactive" selected>Deactive</option><option value="block">Block</option><option value="unblock">Unblock</option></select></td>
                    </tr>
                </tbody>
            </table>
        `;
    } 
    else if (sectionName === 'home') {
        const homeCard1 = localStorage.getItem('homeCard1Name') || 'ফাইল শিট ১';
        const homeCard2 = localStorage.getItem('homeCard2Name') || 'ফাইল শিট ২';
        const homeCard3 = localStorage.getItem('homeCard3Name') || 'ফাইল শিট ৩';
        const homeCard4 = localStorage.getItem('homeCard4Name') || 'ফাইল শিট ৪';

        contentArea.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 25px; max-width: 100%;">
                <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
                    <div style="border: 2px solid #ef4444; padding: 25px 30px; border-radius: 8px; font-size: 22px; font-weight: bold; background: ${isDark ? 'rgba(239, 68, 68, 0.05)' : '#fee2e2'}; color: ${isDark ? '#ffffff' : '#1e293b'};">
                        স্বাগতম সোবকিছু বাজারে!
                    </div>
                    <div style="border: 2px solid #ef4444; padding: 25px 30px; border-radius: 8px; font-size: 20px; font-weight: bold; background: ${isDark ? 'rgba(239, 68, 68, 0.05)' : '#fee2e2'}; color: ${isDark ? '#ffffff' : '#1e293b'};">
                        সবকিছু বাজার হিসাব কিতাব ওয়েবসাইট
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                    <div onclick="openCardPage('card1')" style="background-color: ${isDark ? '#1e293b' : '#ffffff'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; height: 95px; border-radius: 8px; position: relative; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <span style="font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 15px; border-bottom: 2px solid ${isDark ? '#38bdf8' : '#0284c7'}; padding-bottom: 2px;">${homeCard1}</span>
                        <button onclick="event.stopPropagation(); editHomeCard('card1')" style="position: absolute; top: 8px; right: 8px; background: #3b82f6; border: none; color: white; padding: 3px 6px; border-radius: 4px; cursor: pointer; font-size: 11px;">✏️</button>
                    </div>
                    <div onclick="openCardPage('card2')" style="background-color: ${isDark ? '#1e293b' : '#ffffff'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; height: 95px; border-radius: 8px; position: relative; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <span style="font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 15px; border-bottom: 2px solid ${isDark ? '#38bdf8' : '#0284c7'}; padding-bottom: 2px;">${homeCard2}</span>
                        <button onclick="event.stopPropagation(); editHomeCard('card2')" style="position: absolute; top: 8px; right: 8px; background: #3b82f6; border: none; color: white; padding: 3px 6px; border-radius: 4px; cursor: pointer; font-size: 11px;">✏️</button>
                    </div>
                    <div onclick="openCardPage('card3')" style="background-color: ${isDark ? '#1e293b' : '#ffffff'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; height: 95px; border-radius: 8px; position: relative; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <span style="font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 15px; border-bottom: 2px solid ${isDark ? '#38bdf8' : '#0284c7'}; padding-bottom: 2px;">${homeCard3}</span>
                        <button onclick="event.stopPropagation(); editHomeCard('card3')" style="position: absolute; top: 8px; right: 8px; background: #3b82f6; border: none; color: white; padding: 3px 6px; border-radius: 4px; cursor: pointer; font-size: 11px;">✏️</button>
                    </div>
                    <div onclick="openCardPage('card4')" style="background-color: ${isDark ? '#1e293b' : '#ffffff'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; height: 95px; border-radius: 8px; position: relative; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <span style="font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 15px; border-bottom: 2px solid ${isDark ? '#38bdf8' : '#0284c7'}; padding-bottom: 2px;">${homeCard4}</span>
                        <button onclick="event.stopPropagation(); editHomeCard('card4')" style="position: absolute; top: 8px; right: 8px; background: #3b82f6; border: none; color: white; padding: 3px 6px; border-radius: 4px; cursor: pointer; font-size: 11px;">✏️</button>
                    </div>
                </div>
            </div>
        `;
    } 
    else if (sectionName === 'card1-details') {
        const savedTitle = localStorage.getItem('excelHeaderTitle') || 'এটা উদাহরণ স্টেপ ১';
        const card1Title = localStorage.getItem('dashCard1Title') || 'মোট এন্ট্রি সংখ্যা';
        const card2Title = localStorage.getItem('dashCard2Title') || 'মোট টাকার পরিমাণ';
        const card3Title = localStorage.getItem('dashCard3Title') || 'মোট পরিমাণ (কেজি)';

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        
        const defaultFrom = `${year}-${month}-${day}T00:00`;
        const defaultTo = `${year}-${month}-${day}T23:59`;

        contentArea.innerHTML = `
            <style>
                .interactive-btn {
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                }
                .interactive-btn:hover {
                    filter: brightness(1.15);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
                .interactive-btn:active {
                    transform: scale(0.95) translateY(0);
                    filter: brightness(0.9);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                /0 1833-950228 Hide number input spinner arrows */
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { 
                    -webkit-appearance: none; 
                    margin: 0; 
                }
                input[type=number] {
                    -moz-appearance: textfield;
                }
            </style>

            <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; background: ${isDark ? '#1e293b' : '#ffffff'}; padding: 25px; border-radius: 10px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; color: ${isDark ? '#ffffff' : '#1e293b'}; box-sizing: border-box; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <button onclick="showSection('home')" class="interactive-btn" style="background: #ef4444; border: none; color: white; padding: 8px 15px; border-radius: 5px; font-weight: bold; font-size: 13px;">⬅️ হোম পেইজে যান</button>
                    
                    <div style="display: flex; align-items: center; background: ${isDark ? '#0f172a' : '#f1f5f9'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; border-radius: 5px; padding: 6px 12px; width: 250px;">
                        <span style="margin-right: 8px; font-size: 14px;">🔍</span>
                        <input type="text" id="itemSearchBar" placeholder="আইটেম সার্চ করুন..." oninput="handleItemSearch()" style="background: transparent; border: none; color: ${isDark ? 'white' : 'black'}; font-size: 13px; width: 100%; outline: none;">
                    </div>
                </div>

                <div style="position: sticky; top: 0; background: ${isDark ? '#1e293b' : '#ffffff'}; z-index: 10; padding-bottom: 15px; border-bottom: 1px solid ${isDark ? '#334155' : '#e2e8f0'}; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                    
                    <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; justify-content: space-between; background: ${isDark ? '#0f172a' : '#f1f5f9'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; border-radius: 5px; padding: 5px 8px; width: 195px;">
                            <div style="display: flex; align-items: center; overflow: hidden;">
                                <span style="font-size: 11px; color: #94a3b8; margin-right: 4px; white-space: nowrap;">From</span>
                                <input type="datetime-local" id="filterFromDate" value="${defaultFrom}" style="background: transparent; border: none; color: ${isDark ? 'white' : 'black'}; font-size: 11px; outline: none; cursor: pointer; width: 100%;">
                            </div>
                            <span onclick="document.getElementById('filterFromDate').showPicker()" style="font-size: 14px; cursor: pointer; background: ${isDark ? '#1e293b' : '#e2e8f0'}; padding: 2px 5px; border-radius: 4px; margin-left: 4px;" title="Calendar">📅</span>
                        </div>

                        <div style="display: flex; align-items: center; justify-content: space-between; background: ${isDark ? '#0f172a' : '#f1f5f9'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; border-radius: 5px; padding: 5px 8px; width: 195px;">
                            <div style="display: flex; align-items: center; overflow: hidden;">
                                <span style="font-size: 11px; color: #94a3b8; margin-right: 4px; white-space: nowrap;">To</span>
                                <input type="datetime-local" id="filterToDate" value="${defaultTo}" style="background: transparent; border: none; color: ${isDark ? 'white' : 'black'}; font-size: 11px; outline: none; cursor: pointer; width: 100%;">
                            </div>
                            <span onclick="document.getElementById('filterToDate').showPicker()" style="font-size: 14px; cursor: pointer; background: ${isDark ? '#1e293b' : '#e2e8f0'}; padding: 2px 5px; border-radius: 4px; margin-left: 4px;" title="Calendar">📅</span>
                        </div>

                        <button onclick="applyDateFilter()" class="interactive-btn" style="background: #2563eb; border: none; color: white; padding: 7px 14px; border-radius: 5px; font-weight: bold; font-size: 12px;">Filter</button>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <button onclick="resetDateFilter()" class="interactive-btn" style="background: #10b981; border: none; color: white; padding: 7px 12px; border-radius: 5px; font-weight: bold; font-size: 12px;" title="রিফ্রেশ / আজকের হিসাব">🔄 রিফ্রেশ</button>
                        <button onclick="printTableSheet()" class="interactive-btn" style="background: #8b5cf6; border: none; color: white; padding: 7px 14px; border-radius: 5px; font-weight: bold; font-size: 12px;">🖨️ প্রিন্ট</button>
                        <button onclick="exportToExcelFile()" class="interactive-btn" style="background: #059669; border: none; color: white; padding: 7px 14px; border-radius: 5px; font-weight: bold; font-size: 12px;" title="এক্সেল ফাইলে সেভ করুন">📊 এক্সেল</button>
                        <button onclick="exportToPdfFile()" class="interactive-btn" style="background: #dc2626; border: none; color: white; padding: 7px 14px; border-radius: 5px; font-weight: bold; font-size: 12px;" title="পিডিএফ ফাইলে সেভ করুন">📄 পিডিএফ</button>
                    </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <h3 id="excelHeaderTitle" style="margin: 0; color: ${isDark ? '#38bdf8' : '#0284c7'};">${savedTitle}</h3>
                        <button onclick="editElementText('excelHeaderTitle')" class="interactive-btn" style="background: #3b82f6; border: none; color: white; padding: 3px 7px; border-radius: 4px; font-size: 11px;">✏️ এডিট</button>
                    </div>
                    <button onclick="openMasterItemsModal()" class="interactive-btn" style="background: #0284c7; border: none; color: white; padding: 7px 14px; border-radius: 5px; font-weight: bold; font-size: 12px;">⚙️ আইটেম লিস্ট সেটআপ (মাস্টার)</button>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; margin-top: 5px;">
                    <div style="background: ${isDark ? '#0f172a' : '#f8fafc'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; padding: 15px; border-radius: 8px; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span id="dashCard1Title" style="font-size: 13px; color: ${isDark ? '#94a3b8' : '#64748b'}; font-weight: bold;">${card1Title}</span>
                            <button onclick="editElementText('dashCard1Title')" class="interactive-btn" style="background: #3b82f6; border: none; color: white; padding: 2px 5px; border-radius: 3px; font-size: 10px;">✏️</button>
                        </div>
                        <div id="totalEntriesVal" style="font-size: 24px; font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'};">০</div>
                        <div id="totalEntriesText" style="font-size: 12px; color: #10b981; margin-top: 4px;">শূণ্যটি</div>
                    </div>

                    <div style="background: ${isDark ? '#0f172a' : '#f8fafc'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; padding: 15px; border-radius: 8px; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span id="dashCard2Title" style="font-size: 13px; color: ${isDark ? '#94a3b8' : '#64748b'}; font-weight: bold;">${card2Title}</span>
                            <button onclick="editElementText('dashCard2Title')" class="interactive-btn" style="background: #3b82f6; border: none; color: white; padding: 2px 5px; border-radius: 3px; font-size: 10px;">✏️</button>
                        </div>
                        <div id="totalTakaVal" style="font-size: 24px; font-weight: bold; color: #f59e0b;">৳০</div>
                        <div id="totalTakaText" style="font-size: 12px; color: #10b981; margin-top: 4px;">শূণ্য টাকা</div>
                    </div>

                    <div style="background: ${isDark ? '#0f172a' : '#f8fafc'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; padding: 15px; border-radius: 8px; position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span id="dashCard3Title" style="font-size: 13px; color: ${isDark ? '#94a3b8' : '#64748b'}; font-weight: bold;">${card3Title}</span>
                            <button onclick="editElementText('dashCard3Title')" class="interactive-btn" style="background: #3b82f6; border: none; color: white; padding: 2px 5px; border-radius: 3px; font-size: 10px;">✏️</button>
                        </div>
                        <div id="totalQtyVal" style="font-size: 24px; font-weight: bold; color: #10b981;">০ কেজি</div>
                        <div id="totalQtyText" style="font-size: 12px; color: ${isDark ? '#38bdf8' : '#0284c7'}; margin-top: 4px;">শূণ্য কেজি</div>
                    </div>
                </div>

                <div style="overflow-x: auto; width: 100%;">
                    <table id="excelTable" style="width: 100%; border-collapse: collapse; text-align: center; font-size: 16px; background: ${isDark ? '#0f172a' : '#ffffff'};">
                        <thead>
                            <tr style="background: ${isDark ? '#1e293b' : '#f1f5f9'}; color: ${isDark ? '#cbd5e1' : '#334155'}; border-bottom: 2px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;">
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">আইটেম নাম্বার</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">তারিখ</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">নাম</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">মোট পরিমাণ (কেজি)</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">মোট টাকা</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">প্রতি কেজি</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};">মোট মূল্য</th>
                                <th style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};" class="no-print">
                                    <div style="display: flex; gap: 6px; justify-content: center; align-items: center;">
                                        <button onclick="addNewRow()" class="interactive-btn" style="background: #10b981; border: none; color: white; padding: 6px 10px; border-radius: 5px; font-weight: bold; font-size: 13px; white-space: nowrap;">➕ রো</button>
                                        <button onclick="saveTableDataToStorage()" class="interactive-btn" style="background: #2563eb; border: none; color: white; padding: 6px 10px; border-radius: 5px; font-weight: bold; font-size: 13px; white-space: nowrap;" title="অটো সেভ হয়">সেভ</button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="excelTableBody">
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="8" style="padding: 14px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; text-align: left; background: ${isDark ? '#1e293b' : '#f1f5f9'};">
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <label for="rowsPerPageSelect" style="color: ${isDark ? '#cbd5e1' : '#334155'}; font-size: 14px; font-weight: bold;">প্রতি পেজে আইটেম দেখুন:</label>
                                        <select id="rowsPerPageSelect" onchange="changeRowsPerPage(this)" style="background: ${isDark ? '#0f172a' : '#ffffff'}; color: ${isDark ? 'white' : 'black'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; padding: 6px 10px; border-radius: 5px; cursor: pointer; font-size: 14px;">
                                            <option value="10">১০</option>
                                            <option value="50">৫০</option>
                                            <option value="100">১০০</option>
                                            <option value="500">৫০০</option>
                                            <option value="1000">১০০০</option>
                                            <option value="all" selected>অল (সব)</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        `;
        loadTableData();
    } 
    else if (sectionName === 'products') {
        contentArea.innerHTML = `<h2>📁 ${lang === 'bn' ? 'ফাইল ২ (পণ্য) পেইজ' : 'File 2 (Products) Page'}</h2><p>${lang === 'bn' ? 'এখানে পণ্যের তালিকা থাকবে।' : 'Product list will be here.'}</p>`;
    } 
    else if (sectionName === 'orders') {
        contentArea.innerHTML = `<h2>📁 ${lang === 'bn' ? 'ফাইল ৩ (অর্ডার) পেইজ' : 'File 3 (Orders) Page'}</h2><p>${lang === 'bn' ? 'এখানে অর্ডার সংক্রান্ত তথ্য থাকবে।' : 'Order information will be here.'}</p>`;
    } 
    else if (sectionName === 'offers') {
        contentArea.innerHTML = `<h2>📁 ${lang === 'bn' ? 'ফাইল ৪ (অফিস) পেইজ' : 'File 4 (Offers) Page'}</h2><p>${lang === 'bn' ? 'এখানে অফিসিয়াল অফার থাকবে।' : 'Official offers will be here.'}</p>`;
    } 
    else if (sectionName === 'contact') {
        contentArea.innerHTML = `<h2>📁 ${lang === 'bn' ? 'ফাইল ৫ (যোগাযোগ) পেইজ' : 'File 5 (Contact) Page'}</h2><p>${lang === 'bn' ? 'যোগাযোগের তথ্য এখানে থাকবে।' : 'Contact info will be here.'}</p>`;
    }
}

function openCardPage(cardId) {
    showSection('card1-details');
}

// --- Master Items Setup Modal ---
function openMasterItemsModal() {
    let modal = document.getElementById('masterItemsModal');
    const isDark = document.body.classList.contains('dark-mode');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'masterItemsModal';
        modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000;`;
        
        let savedMaster = localStorage.getItem('masterItemNames') || "পুকুরের শিং মাছ\nগুলসা টেংরা মাছ\nপোয়া মাছ\nনদীর বাটা মাছ\nমলা মাছ\nগুতুম মাছ\nহাওরের মিশ্র পচিমশালী মাছ";

        modal.innerHTML = `
            <div style="background: ${isDark ? '#1e293b' : '#ffffff'}; padding: 25px; border-radius: 10px; width: 450px; max-width: 90%; color: ${isDark ? '#fff' : '#000'}; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                <h3 style="margin-top: 0; color: #0284c7;">⚙️ মাস্টার আইটেম লিস্ট সেটআপ</h3>
                <p style="font-size: 13px; color: gray;">প্রতি লাইনে একটি করে আইটেমের নাম লিখুন। এখানে একবার নামগুলো লিখে সেভ করলে সব তারিখে এই নামগুলো অটোমেটিক চলে আসবে।</p>
                <textarea id="masterNamesInput" rows="10" style="width: 100%; background: ${isDark ? '#0f172a' : '#f8fafc'}; color: ${isDark ? '#fff' : '#000'}; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; padding: 10px; border-radius: 5px; font-size: 14px; box-sizing: border-box; resize: vertical;">${savedMaster}</textarea>
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 15px;">
                    <button onclick="document.getElementById('masterItemsModal').style.display='none'" style="background: #64748b; border: none; color: white; padding: 8px 14px; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">বাতিল</button>
                    <button onclick="saveMasterItemsList()" style="background: #10b981; border: none; color: white; padding: 8px 14px; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">সেভ করুন</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        const textarea = document.getElementById('masterNamesInput');
        if (textarea) {
            textarea.value = localStorage.getItem('masterItemNames') || "";
        }
        modal.style.display = 'flex';
    }
}

function saveMasterItemsList() {
    const textarea = document.getElementById('masterNamesInput');
    if (!textarea) return;
    const text = textarea.value.trim();
    localStorage.setItem('masterItemNames', text);
    document.getElementById('masterItemsModal').style.display = 'none';
    alert("মাস্টার আইটেম লিস্ট সফলভাবে সেভ করা হয়েছে!");
    loadTableData();
}

// --- Editing Functions ---
function editElementText(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    const currentText = element.innerText;
    const newText = prompt("নতুন শিরোনাম লিখুন:", currentText);
    
    if (newText !== null && newText.trim() !== "") {
        element.innerText = newText.trim();
        localStorage.setItem(elementId, newText.trim());
    }
}

function editHomeCard(cardId) {
    let titleKey = 'homeCard1Name';
    if(cardId === 'card2') titleKey = 'homeCard2Name';
    if(cardId === 'card3') titleKey = 'homeCard3Name';
    if(cardId === 'card4') titleKey = 'homeCard4Name';

    const defaultNames = { card1: 'ফাইল শিট ১', card2: 'ফাইল শিট ২', card3: 'ফাইল শিট ৩', card4: 'ফাইল শিট ৪' };
    const currentTitle = localStorage.getItem(titleKey) || defaultNames[cardId];
    
    const newTitle = prompt("হোম পেজ কার্ডের নতুন নাম লিখুন:", currentTitle);
    if (newTitle !== null && newTitle.trim() !== "") {
        localStorage.setItem(titleKey, newTitle.trim());
        showSection('home', false);
    }
}

function handleStatusChange(selectElement, userId) {
    const action = selectElement.value;
    const lang = localStorage.getItem('lang') || 'bn';

    if (action === 'active') {
        selectElement.style.color = 'green';
        alert(lang === 'bn' ? `${userId} কে একটিভ করা হয়েছে।` : `${userId} activated.`);
    } else if (action === 'deactive') {
        selectElement.style.color = 'orange';
        alert(lang === 'bn' ? `${userId} কে ডিএকটিভ করা হয়েছে।` : `${userId} deactivated.`);
    } else if (action === 'block') {
        selectElement.style.color = 'red';
        alert(lang === 'bn' ? `${userId} কে ব্লক করা হয়েছে।` : `${userId} blocked.`);
    } else if (action === 'unblock') {
        selectElement.style.color = 'green';
        alert(lang === 'bn' ? `${userId} কে আনব্লক করা হয়েছে।` : `${userId} unblocked.`);
    }
}

// --- Auth & Profile Management ---
function openRegister() {
    document.getElementById('registerModal').style.display = 'flex';
}

function closeRegister() {
    document.getElementById('registerModal').style.display = 'none';
}

function togglePassword(inputId) {
    const inputField = document.getElementById(inputId);
    if (inputField.type === "password") {
        inputField.type = "text";
    } else {
        inputField.type = "password";
    }
}

function submitRegister() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPass').value;
    const confPass = document.getElementById('confPass').value;
    const codeInput = document.getElementById('verifyCode').value;
    const picFile = document.getElementById('regPicFile').files[0];
    const lang = localStorage.getItem('lang') || 'bn';

    if (!name || !email || !pass) {
        alert(lang === 'bn' ? 'দয়া করে সব ফিল্ড পূরণ করুন!' : 'Please fill in all fields!');
        return;
    }

    if (pass !== confPass) {
        alert(lang === 'bn' ? 'পাসওয়ার্ড মিলছে না!' : 'Passwords do not match!');
        return;
    }

    if (codeInput !== "1234") {
        alert(lang === 'bn' ? 'ভুল ভেরিফিকেশন কোড! কোড দিন: 1234' : 'Wrong verification code! Code: 1234');
        return;
    }

    if (picFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            saveAndLogin(name, email, e.target.result);
        };
        reader.readAsDataURL(picFile);
    } else {
        saveAndLogin(name, email, 'https://via.placeholder.com/40');
    }
}

function saveAndLogin(name, email, pic) {
    const userData = { name, email, pic };
    localStorage.setItem('userProfile', JSON.stringify(userData));
    showUserProfile(userData);
    closeRegister();
}

function showUserProfile(user) {
    const headerRight = document.getElementById('headerRight');
    const currentTheme = localStorage.getItem('theme');
    const themeIcon = currentTheme === 'dark' ? '☀️' : '🌙'; 
    const currentLang = localStorage.getItem('lang') || 'bn';
    const langBtnText = currentLang === 'bn' ? 'English' : 'বাংলা';
    const logoutText = currentLang === 'bn' ? 'লগআউট' : 'Logout';
    const regText = currentLang === 'bn' ? 'রেজিস্ট্রেশন' : 'Register';

    if (user) {
        headerRight.innerHTML = `
            <button class="lang-btn" onclick="toggleLanguage()">${langBtnText}</button>
            <div style="display: flex; align-items: center; gap: 15px;">
                <button class="theme-btn" onclick="toggleTheme()" title="Theme Toggle">${themeIcon}</button>
                <div class="user-profile">
                    <img src="${user.pic}" alt="Profile">
                    <div style="text-align: left;">
                        <div style="font-size: 13px; font-weight: bold;">${user.name}</div>
                        <div style="font-size: 11px; color: gray;">${user.email}</div>
                    </div>
                    <button class="logout-btn" onclick="logoutUser()">${logoutText}</button>
                </div>
            </div>
        `;
    } else {
        headerRight.innerHTML = `
            <button class="lang-btn" onclick="toggleLanguage()">${langBtnText}</button>
            <button class="register-btn" onclick="openRegister()">${regText}</button>
        `;
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
    
    const savedUser = localStorage.getItem('userProfile');
    showUserProfile(savedUser ? JSON.parse(savedUser) : null);
    showSection(localStorage.getItem('currentSection') || 'home', false);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'bn';
    const newLang = currentLang === 'bn' ? 'en' : 'bn';
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    
    const savedUser = localStorage.getItem('userProfile');
    showUserProfile(savedUser ? JSON.parse(savedUser) : null);
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-bn]');
    elements.forEach(el => {
        if (lang === 'en') {
            el.innerText = el.getAttribute('data-en');
        } else {
            el.innerText = el.getAttribute('data-bn');
        }
    });
}

function logoutUser() {
    localStorage.removeItem('userProfile');
    showUserProfile(null);
    location.reload();
}

// --- Table & Calculation Functions ---
function numberToBanglaWords(num) {
    if (isNaN(num) || num === 0) return "শূণ্যটি";
    return num + "টি";
}

function takaToBanglaWords(num) {
    if (isNaN(num) || num === 0) return "শূণ্য টাকা";
    return num + " টাকা";
}

function qtyToBanglaWords(num) {
    if (isNaN(num) || num === 0) return "শূণ্য কেজি";
    return num + " কেজি";
}

          // --- Dashboard Cards & Calculations ---
function updateDashboardCards() {
    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');

    let totalEntries = 0;
    let totalTaka = 0;
    let totalQty = 0;

    rows.forEach(row => {
        if (row.style.display !== 'none') {
            totalEntries++;
            const qtyInput = row.cells[3].querySelector('input');
            const totalTkInput = row.cells[4].querySelector('input');

            if (qtyInput) totalQty += parseFloat(qtyInput.value) || 0;
            if (totalTkInput) totalTaka += parseFloat(totalTkInput.value) || 0;
        }
    });

    const totalEntriesVal = document.getElementById('totalEntriesVal');
    const totalEntriesText = document.getElementById('totalEntriesText');
    const totalTakaVal = document.getElementById('totalTakaVal');
    const totalTakaText = document.getElementById('totalTakaText');
    const totalQtyVal = document.getElementById('totalQtyVal');
    const totalQtyText = document.getElementById('totalQtyText');

    if (totalEntriesVal) {
        totalEntriesVal.innerText = totalEntries;
        totalEntriesText.innerText = numberToBanglaWords(totalEntries);
    }
    if (totalTakaVal) {
        totalTakaVal.innerText = "৳" + totalTaka;
        totalTakaText.innerText = takaToBanglaWords(totalTaka);
    }
    if (totalQtyVal) {
        totalQtyVal.innerText = totalQty + " কেজি";
        totalQtyText.innerText = qtyToBanglaWords(totalQty);
    }
}

function saveTableDataToStorage() {
    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach((row) => {
        const dateSpan = row.cells[1].querySelector('span');
        const nameInput = row.cells[2].querySelector('input');
        const qtyInput = row.cells[3].querySelector('input');
        const totalTkInput = row.cells[4].querySelector('input');

        const dateStr = dateSpan ? dateSpan.innerText : '';
        const name = nameInput ? nameInput.value : '';
        const qty = qtyInput ? qtyInput.value : '0';
        const totalTk = totalTkInput ? totalTkInput.value : '0';
        const perKg = row.cells[5].innerText;
        const totalPrice = row.cells[6].innerText;
        const timestamp = row.getAttribute('data-timestamp') || new Date().toISOString();

        data.push({ dateStr, name, qty, totalTk, perKg, totalPrice, timestamp });
    });

    localStorage.setItem('excelTableRows', JSON.stringify(data));
    updateDashboardCards();
}

function updateRowNumbers() {
    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');
    let visibleIndex = 1;
    rows.forEach((row) => {
        if (row.style.display !== 'none') {
            row.cells[0].innerText = visibleIndex++;
        }
    });
}

function loadTableData() {
    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    
    const savedData = localStorage.getItem('excelTableRows');
    let rows = [];

    const fromInput = document.getElementById('filterFromDate');
    let currentISODate = new Date();
    if (fromInput && fromInput.value) {
        currentISODate = new Date(fromInput.value);
    }
    const day = String(currentISODate.getDate()).padStart(2, '0');
    const month = String(currentISODate.getMonth() + 1).padStart(2, '0');
    const year = currentISODate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    if (savedData) {
        rows = JSON.parse(savedData);
    } else {
        const masterNames = (localStorage.getItem('masterItemNames') || "পুকুরের শিং মাছ\nগুলসা টেংরা মাছ\nপোয়া মাছ\nনদীর বাটা মাছ\nমলা মাছ\nগুতুম মাছ\nহাওরের মিশ্র পচিমশালী মাছ").split('\n').filter(n => n.trim() !== "");

        rows = masterNames.map(name => ({
            dateStr: formattedDate,
            name: name.trim(),
            qty: "0",
            totalTk: "0",
            perKg: "0.00",
            totalPrice: "0",
            timestamp: currentISODate.toISOString()
        }));
    }

    renderTableRows(rows);
    applyDateFilter();
}

function renderTableRows(rows) {
    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    tbody.innerHTML = "";
    
    const isDark = document.body.classList.contains('dark-mode');

    rows.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-timestamp', item.timestamp || new Date().toISOString());
        tr.innerHTML = `
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 16px;" class="item-number">${index + 1}</td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; color: ${isDark ? '#cbd5e1' : '#334155'}; font-size: 16px;"><span>${item.dateStr}</span></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="text" value="${item.name}" oninput="autoSaveRow(this)" onkeydown="handleKeyboardNavigation(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 100%; outline: none; font-size: 16px;"></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="number" value="${item.qty}" oninput="calculateRow(this)" onkeydown="handleKeyboardNavigation(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 80px; outline: none; font-size: 16px;"></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="number" value="${item.totalTk}" oninput="calculateRow(this)" onkeydown="handleKeyboardNavigation(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 90px; outline: none; font-size: 16px;"></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;" class="per-kg">${item.perKg}</td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;" class="total-price">${item.totalPrice}</td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};" class="no-print"><button onclick="deleteRow(this)" class="interactive-btn" style="background: #ef4444; border: none; color: white; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 14px;">ডিলিট</button></td>
        `;
        tbody.appendChild(tr);
    });

    updateDashboardCards();
}

// --- Keyboard Arrow Navigation for Table Inputs ---
function handleKeyboardNavigation(event, currentInput) {
    const key = event.key;
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) return;

    const currentCell = currentInput.closest('td');
    const currentRow = currentCell.closest('tr');
    const allRows = Array.from(document.querySelectorAll('#excelTableBody tr')).filter(r => r.style.display !== 'none');
    const currentRowIndex = allRows.indexOf(currentRow);
    const cellsInRow = Array.from(currentRow.querySelectorAll('td')).filter(td => td.querySelector('input'));
    const currentCellIndex = cellsInRow.indexOf(currentCell);

    let targetCell = null;

    if (key === 'ArrowRight') {
        if (currentCellIndex < cellsInRow.length - 1) {
            targetCell = cellsInRow[currentCellIndex + 1];
        }
    } else if (key === 'ArrowLeft') {
        if (currentCellIndex > 0) {
            targetCell = cellsInRow[currentCellIndex - 1];
        }
    } else if (key === 'ArrowDown') {
        if (currentRowIndex < allRows.length - 1) {
            const nextRowCells = Array.from(allRows[currentRowIndex + 1].querySelectorAll('td')).filter(td => td.querySelector('input'));
            targetCell = nextRowCells[currentCellIndex] || nextRowCells[nextRowCells.length - 1];
        }
    } else if (key === 'ArrowUp') {
        if (currentRowIndex > 0) {
            const prevRowCells = Array.from(allRows[currentRowIndex - 1].querySelectorAll('td')).filter(td => td.querySelector('input'));
            targetCell = prevRowCells[currentCellIndex] || prevRowCells[prevRowCells.length - 1];
        }
    }

    if (targetCell) {
        const targetInput = targetCell.querySelector('input');
        if (targetInput) {
            event.preventDefault();
            targetInput.focus();
            targetInput.select();
        }
    }
}

function applyDateFilter() {
    const fromInput = document.getElementById('filterFromDate');
    const toInput = document.getElementById('filterToDate');
    if (!fromInput || !toInput) return;

    const fromDate = new Date(fromInput.value);
    const toDate = new Date(toInput.value);

    const day = String(fromDate.getDate()).padStart(2, '0');
    const month = String(fromDate.getMonth() + 1).padStart(2, '0');
    const year = fromDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const timestamp = row.getAttribute('data-timestamp');
        const rowDate = new Date(timestamp);

        if (rowDate >= fromDate && rowDate <= toDate) {
            row.style.display = "";
            const dateSpan = row.cells[1].querySelector('span');
            if (dateSpan) dateSpan.innerText = formattedDate;
        } else {
            row.style.display = "none";
        }
    });

    updateRowNumbers();
    updateDashboardCards();
}

function resetDateFilter() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    const fromInput = document.getElementById('filterFromDate');
    const toInput = document.getElementById('filterToDate');

    if (fromInput && toInput) {
        fromInput.value = `${year}-${month}-${day}T00:00`;
        toInput.value = `${year}-${month}-${day}T23:59`;
    }
    applyDateFilter();
}

function handleItemSearch() {
    const searchInput = document.getElementById('itemSearchBar');
    const filterText = searchInput.value.toLowerCase();
    const tbody = document.getElementById('excelTableBody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const nameInput = row.cells[2].querySelector('input');
        const itemName = nameInput ? nameInput.value.toLowerCase() : '';
        if (itemName.includes(filterText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

    updateRowNumbers();
    updateDashboardCards();
}

// --- Print Sheet ---
function printTableSheet() {
    const printWindow = window.open('', '', 'height=700,width=900');
    const headerTitle = document.getElementById('excelHeaderTitle')?.innerText || 'হিসাব শিট';
    const totalEntries = document.getElementById('totalEntriesVal')?.innerText || '0';
    const totalTaka = document.getElementById('totalTakaVal')?.innerText || '৳0';
    const totalQty = document.getElementById('totalQtyVal')?.innerText || '0 কেজি';

    let tableHTML = document.getElementById('excelTable').outerHTML;
    
    printWindow.document.write(`
        <html>
            <head>
                <title>${headerTitle}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
                    h2 { text-align: center; color: #0284c7; margin-bottom: 5px; }
                    .summary { display: flex; justify-content: space-around; margin: 20px 0; font-weight: bold; font-size: 16px; border: 1px solid #ccc; padding: 10px; border-radius: 5px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                    th, td { border: 1px solid #94a3b8; padding: 10px 12px; text-align: center; font-size: 15px; }
                    th { background-color: #f1f5f9; color: #1e293b; }
                    input { border: none; text-align: center; font-size: 15px; width: 100%; background: transparent; outline: none; }
                    .no-print { display: none !important; }
                </style>
            </head>
            <body>
                <h2>${headerTitle}</h2>
                <div class="summary">
                    <div>মোট এন্ট্রি: ${totalEntries}</div>
                    <div>মোট টাকা: ${totalTaka}</div>
                    <div>মোট পরিমাণ: ${totalQty}</div>
                </div>
                ${tableHTML}
                <script>
                    window.onload = function() {
                        window.print();
                        window.close();
                    }
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}

function exportToExcelFile() {
    const confirmSave = confirm("আপনি কি এই হিসাব শিটটি এক্সেল ফাইল হিসেবে আপনার ডিভাইসে সেভ করতে চান?");
    if (!confirmSave) return;

    const table = document.getElementById('excelTable');
    let csvContent = "\uFEFF"; 
    const rows = table.querySelectorAll('tr');

    rows.forEach((row, rowIndex) => {
        if (row.style.display === 'none') return;
        const cols = row.querySelectorAll('th, td');
        const rowData = [];

        cols.forEach((col, colIndex) => {
            if (colIndex === 7) return;
            const input = col.querySelector('input');
            const span = col.querySelector('span');
            let text = input ? input.value : (span ? span.innerText : col.innerText);
            text = text.replace(/"/g, '""');
            rowData.push(`"${text}"`);
        });
        csvContent += rowData.join(",") + "\r\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sobkichu_Bazar_Sheet.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- PDF Export ---
function exportToPdfFile() {
    const confirmSave = confirm("আপনি কি এই হিসাব শিটটি পিডিএফ (PDF) ফাইল হিসেবে আপনার ডিভাইসে সেভ করতে চান?");
    if (!confirmSave) return;

    const headerTitle = document.getElementById('excelHeaderTitle')?.innerText || 'হিসাব শিট';
    const totalEntries = document.getElementById('totalEntriesVal')?.innerText || '0';
    const totalTaka = document.getElementById('totalTakaVal')?.innerText || '৳0';
    const totalQty = document.getElementById('totalQtyVal')?.innerText || '0 কেজি';

    let tableHTML = document.getElementById('excelTable').outerHTML;

    const pdfWindow = window.open('', '', 'height=800,width=1000');
    pdfWindow.document.write(`
        <html>
            <head>
                <title>${headerTitle} - PDF</title>
                <style>
                    body { font-family: 'SolaimanLipi', Arial, sans-serif; padding: 30px; color: #1e293b; }
                    h2 { text-align: center; color: #0284c7; margin-bottom: 5px; }
                    .summary { display: flex; justify-content: space-around; margin: 20px 0; font-weight: bold; font-size: 15px; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; background: #f8fafc; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #94a3b8; padding: 10px 12px; text-align: center; font-size: 15px; }
                    th { background-color: #f1f5f9; color: #1e293b; }
                    input { border: none; text-align: center; font-size: 15px; width: 100%; background: transparent; outline: none; }
                    .no-print { display: none !important; }
                </style>
            </head>
            <body>
                <h2>${headerTitle}</h2>
                <div class="summary">
                    <div>মোট এন্ট্রি: ${totalEntries}</div>
                    <div>মোট টাকা: ${totalTaka}</div>
                    <div>মোট পরিমাণ: ${totalQty}</div>
                </div>
                ${tableHTML}
                <script>
                    window.onload = function() {
                        setTimeout(() => {
                            window.print();
                            window.close();
                        }, 500);
                    }
                </script>
            </body>
        </html>
    `);
    pdfWindow.document.close();
}

function changeRowsPerPage(select) {
    const val = select.value;
    localStorage.setItem('rowsPerPageLimit', val);
}

function autoSaveRow(input) {
    saveTableDataToStorage();
}

function calculateRow(input) {
    const row = input.closest('tr');
    const qtyInput = row.cells[3].querySelector('input');
    const totalTkInput = row.cells[4].querySelector('input');
    const perKgCell = row.cells[5];
    const totalPriceCell = row.cells[6];

    const qty = parseFloat(qtyInput.value) || 0;
    const totalTk = parseFloat(totalTkInput.value) || 0;

    const perKg = qty > 0 ? (totalTk / qty) : 0;
    perKgCell.innerText = perKg.toFixed(2);
    totalPriceCell.innerText = totalTk;

    saveTableDataToStorage();
}

function addNewRow() {
    const tbody = document.getElementById('excelTableBody');
    const isDark = document.body.classList.contains('dark-mode');
    const newRow = document.createElement('tr');
    
    const fromInput = document.getElementById('filterFromDate');
    let rowTimestamp = new Date().toISOString();
    let currentDateObj = new Date();
    if (fromInput && fromInput.value) {
        rowTimestamp = new Date(fromInput.value).toISOString();
        currentDateObj = new Date(fromInput.value);
    }
    
    const day = String(currentDateObj.getDate()).padStart(2, '0');
    const month = String(currentDateObj.getMonth() + 1).padStart(2, '0');
    const year = currentDateObj.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    newRow.setAttribute('data-timestamp', rowTimestamp);
    newRow.innerHTML = `
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 16px;" class="item-number">1</td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; color: ${isDark ? '#cbd5e1' : '#334155'}; font-size: 16px;"><span>${formattedDate}</span></td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="text" value="নতুন আইটেম" oninput="autoSaveRow(this)" onkeydown="handleKeyboardNavigation(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 100%; outline: none; font-size: 16px;"></td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="number" value="0" oninput="calculateRow(this)" onkeydown="handleKeyboardNavigation(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 80px; outline: none; font-size: 16px;"></td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="number" value="0" oninput="calculateRow(this)" onkeydown="handleKeyboardNavigation(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 90px; outline: none; font-size: 16px;"></td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;" class="per-kg">0.00</td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;" class="total-price">0</td>
        <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};" class="no-print"><button onclick="deleteRow(this)" class="interactive-btn" style="background: #ef4444; border: none; color: white; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 14px;">ডিলিট</button></td>
    `;
    tbody.appendChild(newRow);
    
    applyDateFilter();
    saveTableDataToStorage();
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    
    applyDateFilter();
    saveTableDataToStorage();
}


// ==========================================
// --- CARD 2: নষ্ট / খারাপ মাছের হিসাব ---
// ==========================================

function loadTableData2() {
    const tbody = document.getElementById('excelTableBody2');
    if (!tbody) return;
    
    const savedData = localStorage.getItem('excelTableRowsCard2');
    let rows = [];

    const fromInput = document.getElementById('filterFromDate2');
    let currentISODate = new Date();
    if (fromInput && fromInput.value) {
        currentISODate = new Date(fromInput.value);
    }
    const day = String(currentISODate.getDate()).padStart(2, '0');
    const month = String(currentISODate.getMonth() + 1).padStart(2, '0');
    const year = currentISODate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    if (savedData) {
        rows = JSON.parse(savedData);
    } else {
        const masterNames = (localStorage.getItem('masterItemNamesCard2') || "পুকুরের শিং মাছ (নষ্ট)\nগুলসা টেংরা মাছ (নষ্ট)\nপোয়া মাছ (নষ্ট)\nনদীর বাটা মাছ (নষ্ট)\nমলা মাছ (নষ্ট)\nগুতুম মাছ (নষ্ট)\nহাওরের মিশ্র পচিমশালী মাছ (নষ্ট)").split('\n').filter(n => n.trim() !== "");

        rows = masterNames.map(name => ({
            dateStr: formattedDate,
            name: name.trim(),
            qty: "0",
            totalTk: "0",
            perKg: "0.00",
            totalPrice: "0",
            timestamp: currentISODate.toISOString()
        }));
    }

    renderTableRows2(rows);
    applyDateFilter2();
}

function renderTableRows2(rows) {
    const tbody = document.getElementById('excelTableBody2');
    if (!tbody) return;
    tbody.innerHTML = "";
    
    const isDark = document.body.classList.contains('dark-mode');

    rows.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-timestamp', item.timestamp || new Date().toISOString());
        tr.innerHTML = `
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-weight: bold; color: ${isDark ? '#38bdf8' : '#0284c7'}; font-size: 16px;" class="item-number">${index + 1}</td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; color: ${isDark ? '#cbd5e1' : '#334155'}; font-size: 16px;"><span>${item.dateStr}</span></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="text" value="${item.name}" oninput="autoSaveRow2(this)" onkeydown="handleKeyboardNavigation2(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 100%; outline: none; font-size: 16px;"></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="number" value="${item.qty}" oninput="calculateRow2(this)" onkeydown="handleKeyboardNavigation2(event, this)" style="background: transparent; color: ${isDark ? 'white' : 'black'}; border: none; text-align: center; width: 80px; outline: none; font-size: 16px;"></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};"><input type="number" value="${item.totalTk}" oninput="calculateRow2(this)" onkeydown="handleKeyboardNavigation2(event, this)" style="background: transparent; color: ${isDark, isDark ? 'white' : 'black'}; border: none; text-align: center; width: 90px; outline: none; font-size: 16px;"></td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;" class="per-kg">${item.perKg}</td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'}; font-size: 16px;" class="total-price">${item.totalPrice}</td>
            <td style="padding: 12px; border: 1px solid ${isDark ? '#334155' : '#cbd5e1'};" class="no-print"><button onclick="deleteRow2(this)" class="interactive-btn" style="background: #ef4444; border: none; color: white; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 14px;">ডিলিট</button></td>
        `;
        tbody.appendChild(tr);
    });

    updateDashboardCards2();
}

function autoSaveRow2(input) {
    saveTableDataToStorage2();
}

function saveTableDataToStorage2() {
    const tbody = document.getElementById('excelTableBody2');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach((row) => {
        const dateSpan = row.cells[1].querySelector('span');
        const nameInput = row.cells[2].querySelector('input');
        const qtyInput = row.cells[3].querySelector('input');
        const totalTkInput = row.cells[4].querySelector('input');

        const dateStr = dateSpan ? dateSpan.innerText : '';
        const name = nameInput ? nameInput.value : '';
        const qty = qtyInput ? qtyInput.value : '0';
        const totalTk = totalTkInput ? totalTkInput.value : '0';
        const perKg = row.cells[5].innerText;
        const totalPrice = row.cells[6].innerText;
        const timestamp = row.getAttribute('data-timestamp') || new Date().toISOString();

        data.push({ dateStr, name, qty, totalTk, perKg, totalPrice, timestamp });
    });

    localStorage.setItem('excelTableRowsCard2', JSON.stringify(data));
    updateDashboardCards2();
}

function calculateRow2(input) {
    const row = input.closest('tr');
    const qtyInput = row.cells[3].querySelector('input');
    const totalTkInput = row.cells[4].querySelector('input');
    const perKgCell = row.cells[5];
    const totalPriceCell = row.cells[6];

    const qty = parseFloat(qtyInput.value) || 0;
    const totalTk = parseFloat(totalTkInput.value) || 0;

    const perKg = qty > 0 ? (totalTk / qty) : 0;
    perKgCell.innerText = perKg.toFixed(2);
    totalPriceCell.innerText = totalTk;

    saveTableDataToStorage2();
}

function updateDashboardCards2() {
    const tbody = document.getElementById('excelTableBody2');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');

    let totalEntries = 0;
    let totalTaka = 0;
    let totalQty = 0;

    rows.forEach(row => {
        if (row.style.display !== 'none') {
            totalEntries++;
            const qtyInput = row.cells[3].querySelector('input');
            const totalTkInput = row.cells[4].querySelector('input');

            if (qtyInput) totalQty += parseFloat(qtyInput.value) || 0;
            if (totalTkInput) totalTaka += parseFloat(totalTkInput.value) || 0;
        }
    });

    const totalEntriesVal = document.getElementById('totalEntriesVal2');
    const totalTakaVal = document.getElementById('totalTakaVal2');
    const totalQtyVal = document.getElementById('totalQtyVal2');

    if (totalEntriesVal) totalEntriesVal.innerText = totalEntries;
    if (totalTakaVal) totalTakaVal.innerText = "৳" + totalTaka;
    if (totalQtyVal) totalQtyVal.innerText = totalQty + " কেজি";
}

function deleteRow2(button) {
    const row = button.closest('tr');
    row.remove();
    applyDateFilter2();
    saveTableDataToStorage2();
}