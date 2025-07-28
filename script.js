// Chants data
const chants = [
    {
        id: 1,
        title: "บูชาพระรัตนตรัย (บทสวดมนต์นะโม 3 จบ)",
        subtitle: "บทสวดนี้ใช้ในการระลึกถึงพระพุทธเจ้า ก่อนเริ่มสวดบทอื่น ๆ เพื่อแสดงความเคารพและตั้งจิตให้สงบ",
        thai: "นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ<br>นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ<br>นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ",
        sub_thai: "นะ-โม ตัด-สะ ภะ-คะ-วะ-โต อะ-ระ-หะ-โต สัม-มา-สัม-พุด-ทัด-สะ<br>นะ-โม ตัด-สะ ภะ-คะ-วะ-โต อะ-ระ-หะ-โต สัม-มา-สัม-พุด-ทัด-สะ<br>นะ-โม ตัด-สะ ภะ-คะ-วะ-โต อะ-ระ-หะ-โต สัม-มา-สัม-พุด-ทัด-สะ<br><span class='translation-note'>'ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระอรหันต์ ผู้ตรัสรู้เองโดยชอบ (กล่าว 3 จบ)'</span>",
        english: "Namo tassa bhagavato arahato sammāsambuddhassa.<br>Namo tassa bhagavato arahato sammāsambuddhassa.<br>Namo tassa bhagavato arahato sammāsambuddhassa.<br><span class='translation-note'>Homage to the Blessed One, the Worthy One, the Perfectly Self-Enlightened One. (Chanted 3 times)</span>",
        audioThai: "audio/บทสวดมนต์นะโม3จบ.mp3"
    },
    {
        id: 2,
        title: "คำบูชาพระรัตนตรัย (พระพุทธ พระธรรม พระสงฆ์)",
        subtitle: "บทสวดเพื่อแสดงความเคารพบูชาพระรัตนตรัย คือ พระพุทธ พระธรรม พระสงฆ์",
        thai: "อิมินา สักกาเรณะ พุทธัง อภิปูชะยามิ\nอิมินา สักกาเรณะ ธัมมัง อภิปูชะยามิ\nอิมินา สักกาเรณะ สังฆัง อภิปูชะยามิ",
        sub_thai: "อิ-มิ-นา สัก-กา-เร-นะ พุด-ทัง อะ-ภิ-พู-ชา-ยา-มิ\nอิ-มิ-นา สัก-กา-เร-นะ ธัม-มัง อะ-ภิ-พู-ชา-ยา-มิ\nอิ-มิ-นา สัก-กา-เร-นะ สัง-ฆัง อะ-ภิ-พู-ชา-ยา-มิ<br><span class='translation-note'>ข้าพเจ้าขอบูชาพระพุทธเจ้า ด้วยสักการะนี้\nข้าพเจ้าขอบูชาพระธรรม ด้วยสักการะนี้\nข้าพเจ้าขอบูชาพระสงฆ์ ด้วยสักการะนี้</span>",
        english: "Imiṇā sakkārena Buddhaṁ abhipūjayāmi.<br>Imiṇā sakkārena Dhammaṁ abhipūjayāmi.<br>Imiṇā sakkārena Saṅghaṁ abhipūjayāmi.<br><span class='translation-note'>With this offering, I worship the Buddha.<br>With this offering, I worship the Dhamma.<br>With this offering, I worship the Sangha.</span>",
        audioThai: "audio/คำบูชาพระรัตนตรัย.mp3",
    },
    {
        id: 3,
        title: "บทสวดไตรสรณคมน์",
        subtitle: "บทสวดนี้ใช้ในการแสดงความเคารพและขอถึงพระพุทธ พระธรรม พระสงฆ์ เป็นสรณะอันสูงสุด",
        thai: `พุทธัง สะระณัง คัจฉามิ<br>ธัมมัง สะระณัง คัจฉามิ<br>สังฆัง สะระณัง คัจฉามิ<br>ทุติยัมปิ พุทธัง สะระณัง คัจฉามิ<br>ทุติยัมปิ ธัมมัง สะระณัง คัจฉามิ<br>ทุติยัมปิ สังฆัง สะระณัง คัจฉามิ<br>ตะติยัมปิ พุทธัง สะระณัง คัจฉามิ<br>ตะติยัมปิ ธัมมัง สะระณัง คัจฉามิ<br>ตะติยัมปิ สังฆัง สะระณัง คัจฉามิ`,
        sub_thai: `พุด-ทัง สะ-ระ-นัง คัด-ฉา-มิ<br>ธัม-มัง สะ-ระ-นัง คัด-ฉา-มิ<br>สัง-ฆัง สะ-ระ-นัง คัด-ฉา-มิ<br>ทุ-ติ-ยัม-ปิ พุด-ทัง สะ-ระ-นัง คัด-ฉา-มิ<br>ทุ-ติ-ยัม-ปิ ธัม-มัง สะ-ระ-นัง คัด-ฉา-มิ<br>ทุ-ติ-ยัม-ปิ สัง-ฆัง สะ-ระ-นัง คัด-ฉา-มิ<br>ตะ-ติ-ยัม-ปิ พุด-ทัง สะ-ระ-นัง คัด-ฉา-มิ<br>ตะ-ติ-ยัม-ปิ ธัม-มัง สะ-ระ-นัง คัด-ฉา-มิ<br>ตะ-ติ-ยัม-ปิ สัง-ฆัง สะ-ระ-นัง คัด-ฉา-มิ<br><span class='translation-note'>'ข้าพเจ้าขอถึงพระพุทธเจ้าเป็นสรณะ'<br>'ข้าพเจ้าขอถึงพระธรรมเป็นสรณะ'<br>'ข้าพเจ้าขอถึงพระสงฆ์เป็นสรณะ'<br>(กล่าวซ้ำเป็นครั้งที่ 2 และ 3 ตามลำดับ)</span>`,
        english: `Buddhaṁ saraṇaṁ gacchāmi<br>Dhammaṁ saraṇaṁ gacchāmi<br>Saṅghaṁ saraṇaṁ gacchāmi<br>Dutiyampi Buddhaṁ saraṇaṁ gacchāmi<br>Dutiyampi Dhammaṁ saraṇaṁ gacchāmi<br>Dutiyampi Saṅghaṁ saraṇaṁ gacchāmi<br>Tatiyampi Buddhaṁ saraṇaṁ gacchāmi<br>Tatiyampi Dhammaṁ saraṇaṁ gacchāmi<br>Tatiyampi Saṅghaṁ saraṇaṁ gacchāmi<br><span class='translation-note'>I go to the Buddha for refuge.<br>I go to the Dhamma for refuge.<br>I go to the Sangha for refuge.<br>(Repeated a second and third time)</span>`,
        audioThai: "audio/บทสวดไตรสรณคมน์.mp3"
    },
    {
        id: 4,
        title: "บทสวดคุณพระรัตนตรัย (พุทธคุณ ธรรมคุณ สังฆคุณ)",
        subtitle: "บทสวดนี้ใช้ในการแสดงความเคารพและระลึกถึงคุณของพระพุทธ พระธรรม และพระสงฆ์ เป็นสรณะอันสูงสุด",
        thai: "อิติปิ โส ภะคะวา (หัวหน้ากล่าวนำ)<br>อะระหัง สัมมาสัมพุทโธ (รับพร้อมกัน)<br>วิชชาจะระณะ-สัมปันโน สุคะโต โลกะวิทู อะนุตตะโร ปุริสะทัมมะสาระถิ สัตถาเทวะมะนุสสานัง พุทโธ ภะคะวาติ (พุทธคุณ) (กราบ 1 ครั้ง)<br><br>สวากขาโต (หัวหน้ากล่าวนำ)<br>ภะคะวะตา ธัมโม สันทิฏฐิโก อะกาลิโก (รับพร้อมกัน)<br>เอหิปัสสิโก โอปะนะยิโก ปัจจัตตัง เวทิตัพโพ วิญญูฮีติ (ธรรมคุณ) (กราบ 1 ครั้ง)<br><br>สุปะฏิปันโน (หัวหน้ากล่าวนำ)<br>ภะคะวะโต สาวะกะสังโฆ, (รับพร้อมกัน)<br>อุชุปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ,<br>ญายะปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ,<br>สามีจิปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ,<br>ยะทิทัง จัตตาริ ปุริสะยุคานิ อัฏฐะ ปุริสะปุคคะลา,<br>เอสะ ภะคะวะโต สาวะกะสังโฆ,<br>อาหุเนยโย, ปาหุเนยโย, ทักขิเยยโย,<br>อัญชะลีกะระณีโย,<br>อะนุตตะรัง ปุญญักเขตตัง โลกัสสาติ. (กราบ 1 ครั้ง)",
        sub_thai: "อิ-ติ-ปิ โส ภะ-คะ-วา (หัวหน้า)<br>อะ-ระ-หัง สัม-มา-สัม-พุด-โธ (พร้อมกัน)<br>วิช-ชา-จะ-ระ-นะ-สัม-ปัน-โน สุ-คะ-โต โลก-วิ-ดู อะ-นุด-ตะ-โร ปุ-ริ-สะ-ทัม-มะ-สา-ระ-ถิ สัต-ถา เท-วะ-มะ-นุด-สา-นัง พุด-โธ ภะ-คะ-วา-ติ (กราบ)<br><br>สะ-วาก-ขา-โต (หัวหน้า)<br>ภะ-คะ-วะ-ตา ธัม-โม สัน-ทิด-ถิ-โก อะ-กา-ลิ-โก (พร้อมกัน)<br>เอ-หิ-พัด-สิ-โก โอ-ปะ-นะ-ยิ-โก ปัด-จัด-ตัง เว-ดิ-ตับ-โพ วิน-ยู-หิ-ติ (กราบ)<br><br>สุ-ปะ-ติ-ปัน-โน (หัวหน้า)<br>ภะ-คะ-วะ-โต สา-วะ-กะ-สัง-โฆ, (พร้อมกัน)<br>อุ-ชุ-ปะ-ติ-ปัน-โน ภะ-คะ-วะ-โต สา-วะ-กะ-สัง-โฆ,<br>ยา-ยะ-ปะ-ติ-ปัน-โน ภะ-คะ-วะ-โต สา-วะ-กะ-สัง-โฆ,<br>สา-มี-จิ-ปะ-ติ-ปัน-โน ภะ-คะ-วะ-โต สา-วะ-กะ-สัง-โฆ,<br>ยะ-ทิ-ทัง จัด-ตา-ริ ปุ-ริ-สะ-ยุ-กา-นิ อัด-ถะ ปุ-ริ-สะ-ปุก-คะ-ลา,<br>เอ-สะ ภะ-คะ-วะ-โต สา-วะ-กะ-สัง-โฆ,<br>อา-หุ-เน-ยโย, พา-หุ-เน-ยโย, ทัก-ขิ-เนยโย,<br>อัญ-จะ-ลี-กะ-ระ-นี-โย,<br>อะ-นุด-ตะ-รัง ปุน-ญัก-เขด-ตัง โลกัส-สา-ติ. (กราบ)<br><br><span class='translation-note'>'พระผู้มีพระภาคเจ้า เป็นพระอรหันต์ ตรัสรู้ชอบได้โดยพระองค์เอง ทรงถึงพร้อมด้วยวิชชาและจรณะ เป็นผู้ไปดี รู้แจ้งโลก เป็นสารถีฝึกบุรุษผู้ควรฝึก ไม่มีใครยิ่งกว่า เป็นครูของเทวดาและมนุษย์ เป็นพระพุทธเจ้า เป็นผู้มีพระภาค<br><br>พระธรรมเป็นสิ่งที่พระผู้มีพระภาคเจ้าตรัสไว้ดีแล้ว เป็นสิ่งที่เห็นได้ด้วยตนเอง ไม่จำกัดกาล ควรน้อมเข้ามาพิจารณา และสามารถรู้ได้เฉพาะตนโดยปัญญา<br><br>พระสงฆ์สาวกของพระผู้มีพระภาคเจ้า ปฏิบัติดีแล้ว ปฏิบัติตรง ปฏิบัติเพื่อความรู้ยิ่ง ปฏิบัติสมควร คือบุรุษ ๔ คู่ รวมเป็น ๘ บุคคล เป็นสงฆ์สาวกของพระผู้มีพระภาค สมควรแก่ทักษิณา สมควรแก่การต้อนรับ สมควรแก่ของทำบุญ สมควรแก่การกราบไหว้ เป็นเนื้อนาบุญอันยอดเยี่ยมของโลก'</span>",
        english: "Itipi so bhagavā (Leader recites)<br>Arahaṁ sammāsambuddho (All respond)<br>Vijjā-caraṇa-sampanno sugato lokavidū anuttaro purisadamma-sārathi satthā devamanussānaṁ buddho bhagavāti. (Buddha's Qualities) (Bow)<br><br>Svākkhāto (Leader recites)<br>Bhagavatā dhammo sandiṭṭhiko akāliko (All respond)<br>Ehipassiko opanayiko paccattaṁ veditabbo viññūhīti. (Dhamma's Qualities) (Bow)<br><br>Supaṭipanno (Leader recites)<br>Bhagavato sāvaka-saṅgho, (All respond)<br>Uju-paṭipanno bhagavato sāvaka-saṅgho,<br>Ñāya-paṭipanno bhagavato sāvaka-saṅgho,<br>Sāmīci-paṭipanno bhagavato sāvaka-saṅgho,<br>Yadidaṁ cattāri purisayugāni aṭṭha purisapuggalā,<br>Esa bhagavato sāvaka-saṅgho,<br>Āhuneyyo, pāhuneyyo, dakkhiṇeyyo,<br>Añjalikaraṇīyo,<br>Anuttaraṁ puññakkhettaṁ lokassāti. (Sangha's Qualities) (Bow)<br><span class='translation-note'>Thus indeed is the Blessed One, the Worthy One, the Rightly Self-awakened One,<br>Accomplished in knowledge and conduct, the Well-gone, Knower of the worlds,<br>Incomparable Leader of persons to be tamed, Teacher of devas and humans,<br>The Blessed One, the Worthy One.<br><br>Well-expounded is the dhamma by the Blessed One,<br>Visible here and now, timeless, inviting one to come and see,<br>Leading onward, to be experienced by the wise for themselves.<br><br>Well-practiced is the Sangha of the Blessed One's disciples,<br>Practicing straightforwardly, practicing methodically,<br>Practicing wisely, practicing properly.<br>These are the four pairs and eight kinds of persons,<br>This is the Sangha of the Blessed One's disciples,<br>Worthy of gifts, worthy of hospitality, worthy of offerings,<br>To be respected, the incomparable field of merit for the world.</span>",
        audioThai: "audio/บทสวดคุณพระรัตนตรัย.mp3"
    },
    {
        id: 5,
        title: "บทพาหุงชัยมงคลคาถา",
        subtitle: "บทสวดนี้เป็นคาถาชัยชนะของพระพุทธเจ้า ใช้สวดเพื่อความเป็นสิริมงคล ปัดเป่าสิ่งไม่ดี เสริมพลังจิตใจ",
        thai: "พาหุงสะหัส สะมะภินิมมิตะสาวุธันตัง<br>ครีเมขะลัง อุทิตะโฆ ระสะเสนะมารัง<br>ทานาทิธัมมะวิธินา ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>มาราติเร กะมะภิยุชฌิตะสัพพะรัตติง<br>โฆรัมปะนาฬะวะกะมักขะมะถัทธะยักขัง<br>ขันตีสุทันตะวิธินา ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>นาฬาคิริง คะชะวะรัง อะติมัตตะภูตัง<br>ทาวัคคิจักกะมะสะนีวะ สุทารุณันตัง<br>เมตตัมพุเสกะวิธินา ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>อุกขิตตะขัคคะมะติหัตถะสุทารุณันตัง<br>ธาวันติโยชะนะปะถังคุลิมาละวันตัง<br>อิทธีภิสังขะตะมะโน ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>กัตตะวานะ กัฏฐะมุทะรัง อิวะ คัพภินียา<br>จิญจายะ ทุฏฐะวะจะนัง ชะยะกายะมัชเฌ<br>สันเตนะ โสมะวิธินา ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>สัจจัง วิหายะ มะติสัจจะกาวาทะเกตุง<br>วาทาภิโรปิตะมะนัง อะติอันธะภูตัง<br>ปัญญาปะทีปะชะลิโต ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>นันโทปะนันทะภุชะคัง วิพุธัง มะหิทธิง<br>ปุตเตนะ เถระภุชะเคนะ ทะมาปะยันโต<br>อิทธูปะเทสะวิธินา ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>ทุคคาหะทิฏฐิภุชะเคนะ สุทัฏฐะหัตถัง<br>พรัหมัง วิสุทธิชุติมิทธิพะกาภิธานัง<br>ญาณาคะเทนะ วิธินา ชิตะวา มุนินโท<br>ตันเตชะสา ภะวะตุ เต ชะยะมังคะลานิ<br><br>เอตาปิ พุทธะชะยะมังคะละอัฉฐะคาถา โย<br>วาจะโน ทินะทิเน สะระเต มะตันที<br>หิตวานะเนกะวิวิธานิ จุปัททะวานิ<br>โมกขัง สุขัง อะธิคะเมยยะ นะโร สะปัญโญ",
        sub_thai: "พา-หุง-สะ-หัส สะ-มะ-ภิ-นิม-มิ-ตะ-สา-วุ-ทัน-ตัง<br>ครี-เม-ขะ-ลัง อุ-ทิ-ตะ-โฆ ระ-สะ-เส-นะ-มา-รัง<br>ทา-นา-ทิ-ธัม-มะ-วิ-ธิ-นา จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>มา-รา-ติ-เร กะ-มะ-ภิ-ยุด-ชิ-ตะ-สับ-พะ-รัด-ติง<br>โฆ-รัม-ปะ-นาล-ะ-วะ-กะ-มัก-ขะ-มะ-ทัด-ทะ-ยัก-ขัง<br>ขัน-ตี-สุ-ทัน-ตะ-วิ-ธิ-นา จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>นา-ลา-คิ-ริง คะ-จะ-วะ-รัง อะ-ติ-มัต-ตะ-ภู-ตัง<br>ทา-วัก-คิ-จัก-กะ-มะ-สะ-นี-วะ สุ-ดา-รุ-นัน-ตัง<br>เมด-ตัม-บุ-เส-กะ-วิ-ธิ-นา จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>อุก-ขิ-ตะ-ขัก-คะ-มะ-ติ-หัด-ถะ-สุ-ดา-รุ-นัน-ตัง<br>ทา-วัน-ติ-โย-จะ-นะ-ปะ-ถัง-กุ-ลิ-มา-ละ-วัน-ตัง<br>อิด-ธี-ภิ-สัง-ขะ-ตะ-มะ-โน จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>กัด-ตะ-วา-นะ กัด-ถะ-มุ-ดะ-รัง อิ-วะ กับ-ภิ-นี-ยา<br>จิน-จา-ยะ ทุด-ถะ-วะ-จะ-นัง ชะ-ยะ-กา-ยะ-มัช-เฌ<br>สัน-เต-นะ โส-มะ-วิ-ธิ-นา จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>สัด-จัง วิ-หา-ยะ มะ-ติ-สัด-จะ-กา-วา-ทะ-เค-ตุง<br>วา-ทา-ภิ-โร-ปิ-ตะ-มะ-นัง อะ-ติ-อัน-ทะ-ภู-ตัง<br>ปัน-ยา-ปะ-ที-ปะ-จะ-ลิ-โต จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>นัน-โด-ปะ-นัน-ทะ-ภู-จะ-คัง วิ-พุ-ทัง มะ-หิด-ทิง<br>พุด-เต-นะ เท-ระ-ภู-จะ-เค-นะ ดะ-มา-ปะ-ยัน-โต<br>อิด-ทู-ปะ-เท-สะ-วิ-ธิ-นา จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>ทุก-กา-หะ-ทิด-ถิ-ภู-จะ-เค-นะ สุ-ดัด-ถะ-หัด-ถัง<br>พรัม-มั่ง วิ-สุด-ทิ-ชุ-ติ-มิด-ทิ-พะ-กา-พิ-ทา-นัง<br>ยา-นา-คะ-เท-นะ วิ-ธิ-นา จิ-ตะ-วา มุ-นิน-โด<br>ตัน-เต-จะ-สา ภะ-วะ-ตุ เต ชะ-ยะ-มัง-คะ-ลา-นิ<br><br>เอ-ตา-ปิ พุด-ทะ-จะ-ยะ-มัง-คะ-ละ-อัด-ถะ-กา-ถา โย<br>วา-จะ-โน ดิ-นะ-ดิ-เน สะ-ระ-เต มะ-ตัน-ที<br>หิ-ตะ-วา-นะ เน-กะ-วิ-วิ-ทา-นิ จุ-พัด-ทะ-วา-นิ<br>โมก-ขัง สุ-ขัง อะ-ทิ-คะ-เมย-ยะ นะ-โร สะ-ปัน-โญ<br><span class='translation-note'>ชัยชนะจงเป็นของท่าน ด้วยฤทธานุภาพของพระพุทธเจ้า ผู้ชนะกองทัพมารที่ยิ่งใหญ่ ที่ถืออาวุธพร้อมลุยด้วยแขนพัน<br><br>ชัยชนะจงเป็นของท่าน ด้วยความอดทนและวินัย ที่พระองค์ทรงชนะอสุรกายอาลวะกะ ผู้จู่โจมในยามราตรี<br><br>ชัยชนะจงเป็นของท่าน ด้วยฤทธิมหากรุณา ที่พระองค์ทรงสงบช้างนาลาคิริง ที่ดุร้ายรุนแรงยิ่งกว่าฟ้าร้องและไฟ<br><br>ชัยชนะจงเป็นของท่าน ด้วยฤทธิ์อัศจรรย์ ที่พระองค์ทรงควบคุมฆาตกรอังคุลิมาละ ผู้วิ่งไล่ตามด้วยดาบที่ยกขึ้น<br><br>ชัยชนะจงเป็นของท่าน ด้วยความสงบ ที่พระองค์ทรงปราบชินจา ผู้กล่าวหาผิดในที่ชุมนุม<br><br>ชัยชนะจงเป็นของท่าน ด้วยแสงสว่างแห่งปัญญา ที่พระองค์ทรงชนะสัจจกะ ผู้พูดจาหยิ่งยโสและยึดมั่นในความเห็นผิด<br><br>ชัยชนะจงเป็นของท่าน ด้วยคำสอนอัศจรรย์ ที่พระองค์ทรงควบคุมพญานาคนันทะและอุปนันทะ ด้วยศิษย์ของพระองค์<br><br>ชัยชนะจงเป็นของท่าน ด้วยความรู้ขั้นสูงสุด ที่พระองค์ทรงปราบพระพรหมบาคะ ผู้ยึดมั่นในความเห็นผิด<br><br>ผู้ที่ท่องบทนี้ทุกวัน จะสามารถเอาชนะทุกข์ภัยและบรรลุถึงความสุขและความหลุดพ้นได้</span>",
        english: "Pāhuṁ sahassaṁ samabhinimmita-sāvudhantaṁ<br>Giriṁ mekhalam udita-ghora-sasena-māraṁ<br>Dānādi-dhamma-vidhinā jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Mārātirekam abhiyujjhita-sabbaraṭṭhiṁ<br>Ghoraṁ panālavam akhamatta ya yakkhaṁ<br>Khantī-sudanta-vidhinā jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Nālāgiriṁ gaja-varaṁ ati-matta-bhūtaṁ<br>Dāvaggi-cakka-masanīva sudāruṇantaṁ<br>Mettāmbuseka-vidhinā jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Ukkhitta-khagga-mati-hattha sudāruṇantaṁ<br>Dhāvanti yojana-pathaṁ aṅgulimālavantaṁ<br>Iddhībhisaṅkhata-mano jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Kattvāna kaṭṭha-mudaraṁ iva gabbhinīyā<br>Cīñcāya duṭṭha-vacanaṁ jaya kāya-majjhe<br>Santena soma-vidhinā jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Saccaṁ vihāya mati-saccaka-vāda-ketuṁ<br>Vādābhirōpita-manaṁ ati-andha-bhūtaṁ<br>Paññā-padīpa-jalito jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Nandopananda-bhujagaṁ vibudhaṁ mahiddhiṁ<br>Puttena thera-bhujagena damāpayanto<br>Iddhūpadesa-vidhinā jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Duggāha-diṭṭhi-bhujagena su-daṭṭha-hatthaṁ<br>Brahmaṁ visuddhi-juti-middhi-bhakkābhidhānaṁ<br>Ñāṇāgadena vidhinā jitavā Munindo<br>Taṁ tejasa bhavatu te jaya-maṅgalāni<br><br>Etāpi Buddha-jaya-maṅgala-gāthā aṭṭha<br>Yo vācano dina-dine sarate matandī<br>Hitvāna neka-vividhāni cupaddavāni<br>Mokkhaṁ sukhaṁ adhigameyya naro sapañño<br><span class='translation-note'>Victory be yours through the power of the Buddha, who conquered Māra's mighty host, raising weapons and charging with a thousand arms.<br><br>Victory be yours through the patience and discipline by which he conquered the ferocious ogre Āḷavaka, who attacked him through the night.<br><br>Victory be yours through the power of loving-kindness, by which he tamed the rampaging elephant Nālāgiri, more destructive than thunder or fire.<br><br>Victory be yours through miraculous power, by which he subdued the murderer Aṅgulimāla, who ran after him with raised sword.<br><br>Victory be yours through serenity, by which he subdued Cincā, who falsely accused him in the midst of the assembly.<br><br>Victory be yours through wisdom’s light, by which he defeated Saccaka, the arrogant debater, who clung to false views.<br><br>Victory be yours through miraculous instruction, by which he tamed the powerful Nāga kings Nanda and Upananda using his disciple.<br><br>Victory be yours through supreme knowledge, by which he subdued Baka Brahmā, who held tight to wrong views.<br><br>He who daily recites these eight verses of the Buddha’s victorious glory, shall overcome various troubles and attain the bliss of liberation.</span>",
        audioThai: "audio/พาหุงชัยมงคลคาถา.mp3"
    },
    {
        id: 6,
        title: "ชัยมงคลคาถา (ตอนต้น)",
        subtitle: "บทสวดนี้แสดงถึงชัยชนะของพระพุทธเจ้า พร้อมอำนวยพรให้ผู้สวดได้รับชัยชนะและสิริมงคล",
        thai: "มะหาการุณิโก นาโถ   หิตายะ สัพพะปาณินัง<br>ปูเรตวา ปาระมี สัพพา   ปัตโต สัมโพธิมุตตะมัง<br>เอเตนะ สัจจะวัชเชนะ   โหตุ เต ชะยะมังคะลัง<br><br>ชะยันโต โพธิยา มูเล   สักยานัง นันทิวัฑฒะโน<br>เอวัง ตวัง วิชะโย โหหิ   ชะยัสสุ ชะยะมังคะเล<br><br>อะปะราชิตะปัลลังเก   สีเส ปะฐะวิโปกขะเร<br>อะภิเสเก สัพพะพุทธานัง   อัคคัปปัตโต ปะโมทะติ<br><br>สุนักขัตตัง สุมังคะลัง   สุปะภาตัง สุหฏฐิตัง<br>สุขะโณ สุมุหุตโต จะ   สุยิฏฐัง พรหมะจาริสุ<br><br>ปะทักขิณัง กายะกัมมัง   วาจากัมมัง ปะทักขิณัง<br>ปะทักขิณัง มะโนกัมมัง   ปะณิธี เต ปะทักขิณา<br>ปะทักขิณานิ กัตวานะ   ละภันตัตเถ ปะทักขิเณ",
        sub_thai: "มะหา-กา-รุ-นิ-โก นา-โถ   หิ-ตา-ยะ สับ-พะ-ปา-นิ-นัง<br>ปู-เร-ตะ-วา ปา-ระ-มี สับ-พา   ปัด-โต สัม-โพ-ธิ-มุด-ตะ-มัง<br>เอ-เต-นะ สัด-จะ-วัด-เช-นะ   โห-ตุ เต ชะ-ยะ-มัง-คะ-ลัง<br><br>ชะ-ยัน-โต โพ-ธิ-ยา มู-เล   สัก-ยา-นัง นัน-ดิ-วัด-ถะ-โน<br>เอ-วัง ตะ-วัง วิ-ชะ-โย โห-หิ   ชะ-ยัด-สุ ชะ-ยะ-มัง-คะ-เล<br><br>อะ-ปะ-รา-ชิ-ตะ-ปัน-ลัง-เก   สี-เส ปะ-ถะ-วิ-โปก-ขะ-เร<br>อะ-พิ-เส-เก สับ-พะ-พุด-ธา-นัง   อัก-กัด-ปัด-โต ปะ-โม-ทะ-ติ<br><br>สุ-นัก-ขัด-ตัง สุ-มัง-คะ-ลัง   สุ-ปะ-ภา-ตัง สุ-หัด-ถิ-ตัง<br>สุ-ขะ-โณ สุ-มุ-หุด-โต จะ   สุ-ยิด-ถัง พรำ-มะ-จา-ริ-สุ<br><br>ปะ-ดัก-ขิ-นัง กา-ยะ-กำ-มัง   วา-จา-กำ-มัง ปะ-ดัก-ขิ-นัง<br>ปะ-ดัก-ขิ-นัง มะ-โน-กำ-มัง   ปะ-นิ-ธี เต ปะ-ดัก-ขิ-นา<br>ปะ-ดัก-ขิ-นา-นิ กัด-วา-นะ   ละ-พัน-ตัด-เถ ปะ-ดัก-ขิ-เน<br><span class='translation-note'>พระผู้มีพระภาคเจ้าทรงเป็นที่พึ่ง ด้วยพระกรุณาอันยิ่งใหญ่<br>เพื่อประโยชน์แก่สัตว์ทั้งปวง<br>ทรงบำเพ็ญบารมีทั้งปวงบริบูรณ์<br>ทรงบรรลุพระสัมโพธิญาณอันยอดยิ่ง<br>ด้วยอานุภาพแห่งสัจจวาจานี้<br>ขอชัยมงคลจงบังเกิดแก่ท่านเถิด<br><br>เมื่อพระองค์ทรงชนะมาร ณ ควงไม้โพธิ์<br>เป็นผู้ยังวงศ์ศากยะให้เจริญด้วยความปีติ<br>ฉันใด ท่านจงมีชัยฉันนั้น<br>ขอท่านจงมีชัยชนะ มีชัยมงคลเถิด<br><br>พระองค์ประทับนั่งบนบัลลังก์ที่ไม่มีใครชนะได้<br>เหนือพื้นปฐพีที่เป็นประดุจแท่นบัลลังก์<br>เมื่อได้รับพุทธาภิเษกจากพระพุทธเจ้าทั้งปวง<br>ทรงถึงตำแหน่งอันยอดยิ่งด้วยความปีติ<br><br>รุ่งอรุณเป็นฤกษ์ดี เป็นมงคลดี<br>เป็นเวลาเช้าอันแจ่มใส เป็นเวลาที่เหมาะเจาะ<br>เป็นกาลอันสุขสันต์ เป็นขณะอันประเสริฐ<br>เป็นกาลที่สมควรแก่การบำเพ็ญพรหมจรรย์<br><br>การกระทำด้วยกายของท่าน เป็นการกระทำที่ถูกทาง<br>การกระทำด้วยวาจาของท่าน เป็นการกระทำที่ถูกทาง<br>การกระทำด้วยใจของท่าน เป็นการกระทำที่ถูกทาง<br>ความปรารถนาของท่าน เป็นความปรารถนาที่ถูกทาง<br>เมื่อได้กระทำกิจอันถูกทางแล้ว<br>ย่อมได้ผลอันถูกทางตามที่หวังไว้<br></span>",
        english: "Mahākaruṇiko nātho hitāya sabbapāṇinaṃ<br>pūretvā pāramī sabbā patto sambodhimuttamaṃ<br>etena saccavajjena hotu te jayamangalaṃ<br><br>Jayanto bodhiyā mūle sakkānaṃ nandivaḍḍhano<br>evaṃ tvaṃ vijayo hohi jayas su jaya maṅgale<br><br>Aparājitapallaṅke sīse pathavipokkhare<br>abhiseke sabbabuddhānaṃ aggappatto pamodati<br><br>Sunaṭṭhitaṃ sumaṅgalaṃ supabhātaṃ suṭṭhitaṃ<br>sukhano sumuhutto ca suyiṭṭhaṃ brahmacārisu<br><br>Padakkhiṇaṃ kāyakammaṃ vācākammaṃ padakkhiṇaṃ<br>padakkhiṇaṃ manokammaṃ paṇidhī te padakkhiṇā<br>padakkhiṇāni katvāna labhantatthe padakkhiṇe<br><br><span class='translation-note'>The Great Compassionate Protector, for the benefit of all beings, fulfilled all perfections and attained the supreme enlightenment. By the truth of this statement, may there be victorious blessings for you.<br><br>When the Buddha conquered Māra beneath the Bodhi tree, increasing the joy of the Sakyan clan, so too may you gain such victory—rejoice in this victorious blessing.<br><br>Sitting undefeated upon the throne on the earth’s surface, the supreme coronation of all Buddhas—he rejoices in attaining the highest state.<br><br>This is a fortunate time, a blessed moment, a bright and auspicious dawn, rightly established, properly observed, most fitting for the holy life.<br><br>Right bodily action, right verbal action, right mental action—your aspirations are righteous. Having performed such righteous deeds, one shall attain righteous success.</span>",
        audioThai: "audio/ชัยมงคลคาถาตอนต้น.mp3"
    },
    {
        id: 7,
        title: "ชัยมงคลคาถา (ตอนปลาย)",
        subtitle: "บทสวดนี้เป็นการอธิษฐานขอความสวัสดี ความเป็นสิริมงคล และความคุ้มครองจากพุทธ ธรรม และสงฆ์",
        thai: "ภะวะตุ สัพพะมังคะลัง รักขันตุ สัพพะเทวะตา<br>สัพพะพุทธานุภาเวนะ สะทา โสตถี ภะวันตุ เต<br><br>ภะวะตุ สัพพะมังคะลัง รักขันตุ สัพพะเทวะตา<br>สัพพะธัมมานุภาเวนะ สะทา โสตถี ภะวันตุ เต<br><br>ภะวะตุ สัพพะมังคะลัง รักขันตุ สัพพะเทวะตา<br>สัพพะสังฆานุภาเวนะ สะทา โสตถี ภะวันตุ เต",
        sub_thai: "ภะ-วะ-ตุ สัพ-พะ-มัง-คะ-ลัง รัก-ขัน-ตุ สัพ-พะ-เท-วะ-ตา<br>สัพ-พะ-พุด-ธา-นุ-พา-เว-นะ สะ-ทา โสต-ถี ภะ-วัน-ตุ เต<br><br>ภะ-วะ-ตุ สัพ-พะ-มัง-คะ-ลัง รัก-ขัน-ตุ สัพ-พะ-เท-วะ-ตา<br>สัพ-พะ-ธรรม-มา-นุ-พา-เว-นะ สะ-ทา โสต-ถี ภะ-วัน-ตุ เต<br><br>ภะ-วะ-ตุ สัพ-พะ-มัง-คะ-ลัง รัก-ขัน-ตุ สัพ-พะ-เท-วะ-ตา<br>สัพ-พะ-สัง-ฆา-นุ-พา-เว-นะ สะ-ทา โสต-ถี ภะ-วัน-ตุ เต<br><span class='translation-note'>ขอจงมีแต่ความเจริญงอกงามด้วยสิริมงคลทั้งปวง<br>ขอเหล่าเทพเจ้าทั้งหลายจงปกป้องรักษาท่าน<br>ด้วยอานุภาพแห่งพระพุทธเจ้า<br>ขอความสวัสดีจงมีแด่ท่านตลอดกาล<br><br>ขอจงมีแต่ความเจริญงอกงามด้วยสิริมงคลทั้งปวง<br>ขอเหล่าเทพเจ้าทั้งหลายจงปกป้องรักษาท่าน<br>ด้วยอานุภาพแห่งพระธรรม<br>ขอความสวัสดีจงมีแด่ท่านตลอดกาล<br><br>ขอจงมีแต่ความเจริญงอกงามด้วยสิริมงคลทั้งปวง<br>ขอเหล่าเทพเจ้าทั้งหลายจงปกป้องรักษาท่าน<br>ด้วยอานุภาพแห่งพระสงฆ์<br>ขอความสวัสดีจงมีแด่ท่านตลอดกาล</span>",
        english: "Bhavatu sabba-maṅgalaṁ rakkhantu sabba-devatā<br>Sabba-buddhānubhāvena sadā sotthi bhavantu te<br><br>Bhavatu sabba-maṅgalaṁ rakkhantu sabba-devatā<br>Sabba-dhammānubhāvena sadā sotthi bhavantu te<br><br>Bhavatu sabba-maṅgalaṁ rakkhantu sabba-devatā<br>Sabba-saṅghānubhāvena sadā sotthi bhavantu te<br><span class='translation-note'>May all blessings be upon you.<br>May all deities protect you.<br>By the power of the Buddha,<br>May safety and well-being always be with you.<br><br>May all blessings be upon you.<br>May all deities protect you.<br>By the power of the Dhamma,<br>May safety and well-being always be with you.<br><br>May all blessings be upon you.<br>May all deities protect you.<br>By the power of the Sangha,<br>May safety and well-being always be with you.</span>",
        audioThai: "audio/ชัยมงคลคาถาตอนปลาย.mp3"
    },
    {
        id: 8,
        title: "บทสวดเมตตาตนเอง (อะหัง สุขิโต โหมิ)",
        subtitle: "บทสวดนี้เป็นการแผ่เมตตาแก่ตนเอง ขอให้ตนเองมีความสุข ปราศจากเวรภัยและอุปสรรคทั้งปวง",
        thai: "อะหัง สุขิโต โหมิ<br>นิททุกโข โหมิ<br>อะเวโร โหมิ<br>อัพยาปัชโฌ โหมิ<br>อะนีโฆ โหมิ<br>สุขี อัตตานัง ปะริหะรามิ",
        sub_thai: "อะ-หัง สุ-ขิ-โต โห-มิ<span class='translation-note'> : ขอให้ข้าพเจ้ามีความสุข</span><br>นิ-ทุก-โข โห-มิ<span class='translation-note'> : ขอให้ข้าพเจ้าปราศจากความทุกข์</span><br>อะ-เว-โร โห-มิ<span class='translation-note'> : ขอให้ข้าพเจ้าปราศจากเวร</span><br>อัพ-ยา-ปัด-โช โห-มิ<span class='translation-note'> : ขอให้ข้าพเจ้าปราศจากอุปสรรคอันตรายทั้งปวง</span><br>อะ-นี-โฆ โห-มิ<span class='translation-note'> : ขอให้ข้าพเจ้าปราศจากความทุกข์ทางใจ</span><br>สุ-ขี อัด-ตา-นัง ปะ-ริ-หะ-รา-มิ<span class='translation-note'> : ขอให้ข้าพเจ้ามีความสุขกายสุขใจ รักษาตนให้พ้นจากทุกภัยทั้งสิ้นเถิด</span>",
        english: "Ahaṁ sukhito homi<span class='translation-note'> : May I be happy.</span><br>niddukkho homi<span class='translation-note'> : May I be free from suffering.</span><br>avera homi<span class='translation-note'> : May I be free from enmity.</span><br>avyāpajjho homi<span class='translation-note'> : May I be free from danger and harm.</span><br>anīgho homi<span class='translation-note'> : May I be free from mental distress.</span><br>sukhī attānaṁ pariharāmi<span class='translation-note'> : May I take care of myself happily in both body and mind.</span>",
        audioThai: "audio/บทสวดเมตตาตนเอง.mp3"
    },
    {
        id: 9,
        title: "บทสวดเมตตาแผ่สัตว์ทั้งหลาย",
        subtitle: "บทสวดแผ่เมตตาต่อสัตว์ทั้งหลายที่เป็นเพื่อนร่วมทุกข์ เกิด แก่ เจ็บ ตาย",
        thai: "สัพเพ สัตตา<br>อะเวรา โหนตุ<br>อัพะยาปัชฌา โหนตุ<br>อะนีฆา โหนตุ<br>สุขี อัตตานัง ปะริหะรันตุ",
        sub_thai: "สัพ-เพ สัต-ตา<span class='translation-note'> : สัตว์ทั้งหลายที่เป็นเพื่อนทุกข์ เกิดแก่เจ็บตาย ด้วยกันทั้งหมดทั้งสิ้น</span><br>อะ-เว-รา โหน-ตุ<span class='translation-note'> : จงเป็นสุขเป็นสุขเถิด อย่าได้มีเวรแก่กันและกันเลย</span><br>อัพ-พะ-ยา-ปัด-ชา โหน-ตุ<span class='translation-note'> : จงเป็นสุขเป็นสุขเถิด อย่าได้เบียดเบียนซึ่งกันและกันเลย</span><br>อะ-นี-ฆา โหน-ตุ<span class='translation-note'> : จงเป็นสุขเป็นสุขเถิด อย่าได้มีความทุกข์กาย ทุกข์ใจเลย</span><br>สุ-ขี อัด-ตา-นัง ปะ-ริ-หะ-รัน-ตุ<span class='translation-note'> : จงมีความสุขกาย สุขใจ รักษาตนให้พ้นจากทุกข์ภัยทั้งสิ้นเถิด</span>",
        english: "Sabbe sattā<span class='translation-note'> : All beings who are fellow sufferers in birth, aging, sickness, and death.</span><br>avera hontu<span class='translation-note'> : May they be happy and free from enmity.</span><br>abyāpajjhā hontu<span class='translation-note'> : May they be happy and free from harm.</span><br>anīghā hontu<span class='translation-note'> : May they be happy and free from physical and mental suffering.</span><br>sukhī attānaṁ pariharantu<span class='translation-note'> : May they live happily and take care of themselves free from all dangers.</span>",
        audioThai: "audio/บทสวดเมตตาสัตว์ทั้งหลาย.mp3"
    },
    {
        id: 10,
        title: "บทสวดแผ่เมตตาอุทิศส่วนกุศล",
        subtitle: "บทแผ่เมตตาและอุทิศส่วนบุญให้แก่บุคคลและสรรพสัตว์ทั้งหลาย",
        thai: "อิทัง เม มาตาปิตูนัง โหตุ สุขิตา โหนตุ มาตาปิตะโร<br>อิทัง เม ญาตีนัง โหตุ สุขิตา โหนตุ ญาตะโย<br>อิทัง เม คุรูปัชฌายาจริยานัง โหตุ สุขิตา โหนตุ คุรูปัชฌายาจริยา<br>อิทัง สัพพะเทวะตานัง โหตุ สุขิตา โหนตุ สัพเพ เทวา<br>อิทัง สัพพะเปตานัง โหตุ สุขิตา โหนตุ สัพเพ เปตา<br>อิทัง สัพพะเวรีนัง โหตุ สุขิตา โหนตุ สัพเพ เวรี<br>อิทัง สัพพะสัตตานัง โหตุ สุขิตา โหนตุ สัพเพ สัตตา",
        sub_thai: "อิ-ทัง เม มา-ตา-พิ-ตู-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ มา-ตา-พิ-ตะ-โร<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่บิดามารดาของข้าพเจ้า ขอให้บิดามารดาของข้าพเจ้ามีความสุข</span><br>อิ-ทัง เม ญา-ตี-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ ญา-ตะ-โย<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่ญาติทั้งหลายของข้าพเจ้า ขอให้ญาติทั้งหลายของข้าพเจ้ามีความสุข</span><br>อิ-ทัง เม คุ-รู-อุ-ปัด-ชา-ยา-จะ-ริ-ยา-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ คุ-รู-อุ-ปัด-ชา-ยา-จะ-ริ-ยา<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่ครูอุปัชฌาย์อาจารย์ของข้าพเจ้า ขอให้ครูอุปัชฌาย์อาจารย์ของข้าพเจ้ามีความสุข</span><br>อิ-ทัง สัพ-พะ-เท-วะ-ตา-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ สัพ-เพ เท-วา<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่เทวดาทั้งหลายทั้งปวง ขอให้เทวดาทั้งหลายทั้งปวงมีความสุข</span><br>อิ-ทัง สัพ-พะ-เป-ตา-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ สัพ-เพ เป-ตา<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่เปรตทั้งหลายทั้งปวง ขอให้เปรตทั้งหลายทั้งปวงมีความสุข</span><br>อิ-ทัง สัพ-พะ-เว-รี-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ สัพ-เพ เว-รี<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่เจ้ากรรมนายเวรทั้งหลายทั้งปวง ขอให้เจ้ากรรมนายเวรทั้งหลายทั้งปวงมีความสุข</span><br>อิ-ทัง สัพ-พะ-สัต-ตา-นัง โห-ตุ สุ-ขิ-ตา โหน-ตุ สัพ-เพ สัต-ตา<span class='translation-note'> : ขอส่วนบุญนี้จงสำเร็จแก่สัตว์ทั้งหลายทั้งปวง ขอให้สัตว์ทั้งหลายทั้งปวงมีความสุขทั่วหน้ากันเทอญ.</span>",
        english: "Idaṁ me mātāpitūnaṁ hotu, sukhitā hontu mātāpitāro<span class='translation-note'> : May this merit be dedicated to my parents. May my parents be happy.</span><br>Idaṁ me ñātīnaṁ hotu, sukhitā hontu ñātayo<span class='translation-note'> : May this merit be dedicated to my relatives. May all my relatives be happy.</span><br>Idaṁ me gurū-upajjhāyācariyānaṁ hotu, sukhitā hontu gurū-upajjhāyācariyā<span class='translation-note'> : May this merit be dedicated to my teachers and preceptors. May they be happy.</span><br>Idaṁ sabbadevatānaṁ hotu, sukhitā hontu sabbe devā<span class='translation-note'> : May this merit be dedicated to all deities. May all deities be happy.</span><br>Idaṁ sabbapetānaṁ hotu, sukhitā hontu sabbe petā<span class='translation-note'> : May this merit be dedicated to all hungry ghosts. May all hungry ghosts be happy.</span><br>Idaṁ sabbaverīnaṁ hotu, sukhitā hontu sabbe verī<span class='translation-note'> : May this merit be dedicated to all enemies and karmic creditors. May they be happy.</span><br>Idaṁ sabbasattānaṁ hotu, sukhitā hontu sabbe sattā<span class='translation-note'> : May this merit be dedicated to all beings. May all beings everywhere be happy.</span>",
        audioThai: "audio/บทสวดแผ่เมตตาอุทิศส่วนกุศล.mp3"
    }
    ,
    {
        id: 11,
        title: "บทสวดมนต์บูชาพระรัตนตรัย (พระพุทธ พระธรรม พระสงฆ์)",
        subtitle: "บทสวดนี้เป็นการแสดงความเคารพและน้อมบูชาต่อ 'พระรัตนตรัย' ซึ่งเป็นที่พึ่งสูงสุดในพระพุทธศาสนา",
        thai: "อะระหัง สัมมาสัมพุทโธ ภะคะวา&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พุทธัง ภะคะวันตัง อะภิวาเทมิ [กราบ]<br>สวากขาโต ภะคะวะตา ธัมโม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ธัมมัง นะมัสสามิ [กราบ]<br>สุปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;สังฆัง นะมามิ [กราบ]",
        sub_thai: "อะ-ระ-หัง สัม-มา-สัม-พุด-โธ ภะ-คะ-วา&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พุด-ทัง ภะ-คะ-วัน-ตัง อะ-ภิ-วา-เท-มิ (กราบ)<br>สะ-วาก-ขา-โต ภะ-คะ-วะ-ตา ธัม-โม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ธัม-มัง นะ-มัส-สา-มิ (กราบ)<br>สุ-ปะ-ติ-ปัน-โน ภะ-คะ-วะ-โต สา-วะ-กะ-สัง-โฆ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;สัง-ฆัง นะ-มา-มิ (กราบ)<br><span class='translation-note'>'พระผู้มีพระภาคเจ้า เป็นพระอรหันต์ ตรัสรู้ชอบได้โดยพระองค์เอง<br>ข้าพเจ้าขอกราบไหว้พระพุทธเจ้า ผู้เป็นพระผู้มีพระภาคเจ้า'<br>'พระธรรม เป็นธรรมที่พระผู้มีพระภาคเจ้า ตรัสไว้ดีแล้ว ข้าพเจ้าขอนอบน้อมพระธรรม'<br>'พระสงฆ์สาวกของพระผู้มีพระภาคเจ้า ปฏิบัติดีแล้ว ข้าพเจ้าขอนอบน้อมพระสงฆ์'</span>",
        english: "Arahaṁ sammāsambuddho bhagavā&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buddhaṁ bhagavantaṁ abhivādemi. (Bow)<br>Svākkhāto bhagavatā dhammo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dhammaṁ namassāmi. (Bow)<br>Supaṭipanno bhagavato sāvaka-saṅgho&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saṅghaṁ namāmi. (Bow)<br><span class='translation-note'>The Blessed One is an Arahant, perfectly enlightened by Himself.<br>I pay homage to the Blessed Buddha.<br>The Dhamma is well proclaimed by the Blessed One.<br>I respectfully venerate the Dhamma.<br>The Sangha of the Blessed One's disciples has practiced well.<br>I bow with respect to the Sangha.</span>",
        audioThai: "audio/บทสวดมนต์บูชาพระรัตนตรัย.mp3",
    },
];

// Render chants
function renderChants(chantsToRender = chants) {
    const grid = document.getElementById('chantsGrid');
    grid.innerHTML = '';

    chantsToRender.forEach(chant => {
        const chantCard = document.createElement('div');
        chantCard.className = 'chant-card';
        chantCard.onclick = () => showChantFullScreen(chant);
        chantCard.innerHTML = `
                    <div class="chant-header">
                        <h3 class="chant-title">${chant.title}</h3>
                        <p class="chant-subtitle">${chant.subtitle}</p>
                        <div class="audio-controls">
                            <button class="play-btn" data-lang="thai" onclick="event.stopPropagation(); playChantAudio('${chant.audioThai}', this)">
                                    <span class="btn-text">🇹🇭 Thai</span>
                            </button>
                            <span class="audio-info">⏱ <span class="duration-placeholder">--:--</span></span>
                        </div>
                    </div>
                `;
        grid.appendChild(chantCard);
        // Load audio to get real duration
        const audio = new Audio(chant.audioThai);
        audio.addEventListener('loadedmetadata', () => {
            const durationSpan = chantCard.querySelector('.duration-placeholder');
            durationSpan.textContent = formatDuration(audio.duration);
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredChants = chants.filter(chant =>
            chant.title.toLowerCase().includes(searchTerm) ||
            chant.subtitle.toLowerCase().includes(searchTerm) ||
            chant.thai.toLowerCase().includes(searchTerm) ||
            chant.sub_thai.toLowerCase().includes(searchTerm) ||
            chant.english.toLowerCase().includes(searchTerm)
        );
        renderChants(filteredChants);
    });
}

let currentAudio = null;
let currentButton = null;
let currentTextSpan = null;
let currentDurationSpan = null;
let countdownInterval = null;

function playChantAudio(audioSrc, button) {
    const textSpan = button.querySelector('.btn-text');
    const lang = button.dataset.lang;
    const label = lang === 'thai' ? '🇹🇭 Thai' : '🇬🇧 English';

    // ✅ ถ้ากดปุ่มเดิม
    if (currentAudio && currentButton === button) {
        if (!currentAudio.paused) {
            currentAudio.pause();
            textSpan.innerHTML = '▶️ Resume';
            clearInterval(countdownInterval);
        } else {
            currentAudio.play();
            textSpan.innerHTML = '⏸ Playing...';

            // ✅ Resume countdown
            countdownInterval = setInterval(() => {
                if (currentAudio && !currentAudio.paused) {
                    const remaining = currentAudio.duration - currentAudio.currentTime;
                    updateCountdown(currentAudio.duration, currentDurationSpan);
                }
            }, 1000);
        }
        return;
    }

    // ✅ ถ้ามีเสียงอื่นกำลังเล่น -> หยุด
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton && currentTextSpan) {
            currentButton.classList.remove('playing');
            currentTextSpan.innerHTML = currentButton.dataset.lang === 'thai' ? '🇹🇭 Thai' : '🇬🇧 English';
        }
        clearInterval(countdownInterval);
    }

    // ✅ เริ่มเสียงใหม่
    currentAudio = new Audio(audioSrc);
    currentButton = button;
    currentTextSpan = textSpan;
    currentDurationSpan = button.closest('.audio-controls').querySelector('.duration-placeholder');

    button.classList.add('playing');
    textSpan.innerHTML = '⏸ Playing...';
    currentAudio.play();

    // ✅ เริ่มนับ countdown
    currentAudio.addEventListener('loadedmetadata', () => {
        updateCountdown(currentAudio.duration, currentDurationSpan);
        countdownInterval = setInterval(() => {
            if (currentAudio && !currentAudio.paused) {
                const remaining = currentAudio.duration - currentAudio.currentTime;
                updateCountdown(remaining, currentDurationSpan);
            }
        }, 1000);
    });

    // ✅ เมื่อเล่นจบ
    currentAudio.onended = () => {
        button.classList.remove('playing');
        textSpan.innerHTML = label;
        clearInterval(countdownInterval);
        currentAudio = null;
        currentButton = null;
        currentTextSpan = null;
        currentDurationSpan = null;
    };
}

function updateCountdown(seconds, durationElement) {
    const formatted = formatDuration(seconds);
    if (durationElement) {
        durationElement.textContent = formatted;
    }
}


function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderChants();
    setupSearch();
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

function showChantFullScreen(chant) {
    const overlay = document.createElement('div');
    overlay.className = 'chant-fullscreen-overlay';
    overlay.innerHTML = `
        <div class="chant-fullscreen-content">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove()">✖</button>
            <h3 class="chant-title">${chant.title}</h3>
             <p class="chant-subtitle">${chant.subtitle}</p>
            <div class="chant-text">
                <div class="thai-verse thai-text">${chant.thai.replace(/\n/g, '<br>')}</div>
                <div class="sub_thai-verse thai-text">${chant.sub_thai.replace(/\n/g, '<br>')}</div>
                <div class="english-translation">${chant.english.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="audio-controls">
                <button class="play-btn" data-lang="thai" onclick="playChantAudio('${chant.audioThai}', this)">
                    <span class="btn-text">🇹🇭 Thai</span>
                </button>
                 <span class="audio-info">⏱ <span class="duration-placeholder">--:--</span></span>
            </div>
        </div>
    `;

    const audio = new Audio(chant.audioThai);
    audio.addEventListener('loadedmetadata', () => {
        const durationSpan = overlay.querySelector('.duration-placeholder');
        durationSpan.textContent = formatDuration(audio.duration);
    });

    // ✅ เพิ่ม event สำหรับคลิกนอก card เพื่อปิด
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
    document.body.appendChild(overlay);
}

let currentVisibleSection = null;

function showSection(event, sectionId) {
    event.preventDefault(); // ✅ ป้องกันการ jump ไปบนสุดของหน้า

    const target = document.getElementById(sectionId);

    // ถ้าคลิกซ้ำ section เดิม -> ซ่อน
    if (currentVisibleSection === target) {
        target.style.display = 'none';
        currentVisibleSection = null;
        return;
    }

    // ซ่อนทุก section อื่น
    document.querySelectorAll('.info-section').forEach(section => {
        section.style.display = 'none';
    });

    // แสดง section ใหม่
    if (target) {
        target.style.display = 'block';
        currentVisibleSection = target;

        // ✅ ไม่ scroll — ถ้าต้องการ scroll นุ่มให้เปิดบรรทัดนี้แทน
        // target.scrollIntoView({ behavior: 'smooth' });
    }
}

let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // ป้องกันไม่ให้เบราว์เซอร์แสดง prompt อัตโนมัติ
    deferredPrompt = e;
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        installBtn.style.display = 'none';
        deferredPrompt = null;
    }
});


