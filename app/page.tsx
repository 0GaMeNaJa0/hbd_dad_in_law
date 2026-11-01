'use client'

import { useEffect, useRef, useState } from 'react'

const photos = [
  ['Messenger_creation_105F73CB-E1D7-4C65-BDB1-690E93BDA596.jpeg', 'บันทึกการเดินทาง'],
  ['img_1_1793495608622.jpg', 'ในวันที่ธรรมดา'],
  ['Messenger_creation_593D764C-A95A-4CC2-BD9D-FB70045FD4DD.jpeg', 'ความทรงจำยามค่ำ'],
  ['Messenger_creation_32998280-FE14-46BF-9CBB-07F9B65666FB.jpeg', 'แสงแดดวันนั้น'],
  ['Messenger_creation_3EBAB53A-1857-4BBF-88FC-3F0986E997EA.png', 'วันที่ได้ใช้เวลาร่วมกัน'],
  ['Messenger_creation_6FA732E9-28AA-40B7-A6A3-AFB4D872357B.jpeg', 'ช่วงเวลาสบายๆ'],
  ['img_3_1793495616481.jpg', 'ความภูมิใจของหมอ'],
  ['Messenger_creation_75AB01CA-F797-4D6F-937C-58BA3A90A163.png', 'อีกหนึ่งวันสำคัญ'],
  ['Messenger_creation_FC133C1D-C575-4F94-9D7C-AFE8B1F16D9E.jpeg', 'ระหว่างทาง'],
  ['Messenger_creation_91302467-3A47-4E67-8037-7EEEBF461E7F.jpeg', 'วันพักของหมอ'],
  ['Messenger_creation_CC4AA0E5-4348-4175-81CD-600DBDBF5AD4.jpeg', 'เรื่องเล่าในภาพ'],
  ['Messenger_creation_ED5505F5-FB93-4572-86C0-2062F40DAFB0.jpeg', 'ช่วงเวลาที่อยากบันทึก'],
  ['Messenger_creation_F3D80480-CD31-41E5-9E51-7A849DABC4BB.png', 'ภาพที่อยากเก็บไว้'],
  ['Messenger_creation_F9F13D5C-BB25-4541-8A1C-06C9D0065FEE.png', 'วันธรรมดาที่มีความหมาย'],
  ['img_4_1793495623814.jpg', 'ขอบคุณสำหรับการดูแล']
]
const chapters: Array<[string, string, number]> = [
  ['จุดเริ่มต้น', 'คอร์ทแบดพนัสนิคม ตอนที่ผมอยู่ ม.4 เราเจอกันโดยไม่รู้เลยว่าหมอจะเป็นคนที่ดูแลผมมาจนถึงทุกวันนี้', 1],
  ['ระหว่างทาง', 'หมอคอยดูแล คอยรับฟัง และคอยถามผมเสมอว่าอยากจะกินอะไร อยากจะทำอะไร สิ่งเหล่านี้กลายเป็นสิ่งที่ผมจำได้เสมอ', 0],
  ['วันที่ผมโตขึ้น', 'จากบางแสนกลับบ้านทุกสุดสัปดาห์ จนมาทำงานกรุงเทพฯ หมอยังช่วยดูแลและให้คำปรึกษาในวันที่ชีวิตมีปัญหา', 8],
  ['วันนี้และต่อจากนี้', 'รถของหมอ คำปรึกษาของหมอ และความไว้ใจที่หมอให้ เป็นส่วนสำคัญที่ช่วยให้ผมเดินมาได้ไกลกว่าที่คิด', 14],
]
function Confetti(){return <div className="confetti" aria-hidden>{Array.from({length:55},(_,i)=><i key={i} style={{left:`${i*41%100}%`,animationDelay:`${i%12*.08}s`,background:['#f3b562','#ea6f5f','#95b7a5','#fff0d2'][i%4]}}/>)}</div>}
export default function Home(){
 const [chapter,setChapter]=useState(0),[chapterDrag,setChapterDrag]=useState(0),[activePhoto,setActivePhoto]=useState(0),[celebrate,setCelebrate]=useState(false),[letterVisible,setLetterVisible]=useState(false),[typed,setTyped]=useState('');
 const chapterTouch=useRef(0);
 const handleChapterTouchMove=(x:number)=>{const delta=x-chapterTouch.current;setChapterDrag(Math.max(-90,Math.min(90,delta)))};
 const handleChapterTouchEnd=(x:number)=>{const delta=chapterTouch.current-x;setChapterDrag(0);if(Math.abs(delta)<45)return;setChapter(current=>Math.max(0,Math.min(chapters.length-1,current+(delta>0?1:-1))))};
 const line='ถึงหมอ — คนที่ผมอยากขอบคุณที่สุด';
 useEffect(()=>{if(!letterVisible||typed.length===line.length)return;const t=window.setTimeout(()=>setTyped(line.slice(0,typed.length+1)),65);return()=>window.clearTimeout(t)},[letterVisible,typed]);
 return <main>
  <header className="topbar"><a href="#top" className="wordmark">a letter <span>for</span> หมอ</a><a href="#gallery">15 frames ↓</a></header>
  <section className="cover" id="top"><div className="cover-copy"><p className="label">HAPPY BIRTHDAY · 01 NOVEMBER</p><h1>คนที่<br/><i>ดูแลผม</i><br/>มาตลอด</h1><p className="cover-deck">บันทึกคำขอบคุณ<br/>สำหรับความช่วยเหลือในทุกช่วงชีวิต</p><a className="round-cta" href="#begin">เลื่อนเพื่ออ่าน<br/><b>↓</b></a></div><div className="cover-image"><img src="/photos/Messenger_creation_105F73CB-E1D7-4C65-BDB1-690E93BDA596.jpeg" alt="ภาพบันทึกการเดินทาง"/><span className="image-stamp">MEMORY<br/>NO. 01</span></div><div className="cover-note">บางคนเข้ามาในชีวิต<br/>แล้วช่วยให้เรา<br/>เดินต่อได้</div></section>
  <section className="begin section" id="begin"><div className="section-index">/ 00</div><div className="begin-grid"><h2>หมอไม่ใช่<br/><i>แค่คนที่ช่วย</i></h2><div><p className="lead">หมอคือคนที่อยู่ข้างกันในวันที่ผมยังไม่รู้ว่าจะโตไปเป็นอะไร</p><p>ตั้งแต่วันแรกที่คอร์ทแบดพนัสนิคม จนถึงวันนี้ เวลาหลายปีถูกประกอบขึ้นจากมื้อข้าว การเดินทาง คำปรึกษา และน้ำใจเล็กๆ นับไม่ถ้วน</p><a href="#chapters" className="underlink">อ่านเรื่องราวระหว่างทาง <span>↗</span></a></div></div></section>
  <section className="chapters section" id="chapters"><div className="section-index">/ 01 — 04</div><div className="chapter-layout"><div className="chapter-menu">{chapters.map(([title,,],i)=><button key={title} onClick={()=>setChapter(i)} className={chapter===i?'selected':''}><span>0{i+1}</span><strong>{title}</strong><em>↗</em></button>)}</div><div className="chapter-detail" style={{transform:`translateX(${chapterDrag}px)`,transition:chapterDrag?'none':'transform .42s cubic-bezier(.22,.8,.25,1)'}} onTouchStart={e=>{chapterTouch.current=e.touches[0].clientX;setChapterDrag(0)}} onTouchMove={e=>handleChapterTouchMove(e.touches[0].clientX)} onTouchEnd={e=>handleChapterTouchEnd(e.changedTouches[0].clientX)}><div className="chapter-photo"><img src={`/photos/${photos[chapters[chapter][2]][0]}`} alt={chapters[chapter][0]}/></div><div className="chapter-text"><span>chapter 0{chapter+1}</span><h3>{chapters[chapter][0]}</h3><p>{chapters[chapter][1]}</p><small className="swipe-hint">ปัดซ้ายหรือขวาเพื่อดูเรื่องถัดไป&nbsp; →</small></div></div></div></section>
  <section className="gallery section" id="gallery"><div className="gallery-head"><div className="section-index">/ 15 frames</div><h2>หยิบดูได้<br/><i>ทีละภาพ</i></h2><p>รูปทั้งหมดวางรวมกันไว้ตรงนี้<br/>กดที่กองรูปเพื่อหยิบดูทีละใบ</p></div><div className="photo-pile-wrap"><div className="photo-pile" role="button" tabIndex={0} aria-label="หยิบรูปถัดไป" onClick={()=>setActivePhoto((activePhoto+1)%photos.length)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')setActivePhoto((activePhoto+1)%photos.length)}}>{photos.map(([src,caption],i)=>{const offset=(i-activePhoto+photos.length)%photos.length;return <div key={src} className={`pile-photo ${offset===0?'pile-top':''}`} style={{zIndex:photos.length-offset,transform:`translate(${Math.min(offset,5)*10}px, ${Math.min(offset,5)*-7}px) rotate(${(offset%2?3:-3)+offset*.8}deg)`}}><img src={`/photos/${src}`} alt={caption} loading="lazy"/></div>})}</div><div className="pile-info"><span>ภาพที่ {String(activePhoto+1).padStart(2,'0')} / {photos.length}</span><strong>{photos[activePhoto][1]}</strong><button onClick={()=>setActivePhoto((activePhoto+1)%photos.length)}>หยิบรูปถัดไป <b>↗</b></button></div></div></section>
  <section className="quote"><div className="quote-number">02</div><blockquote>“ขอบคุณที่ช่วยให้ผม<br/><i>ไม่ต้องเดินทางคนเดียว</i>”</blockquote><p>— จากคนที่ได้รับการดูแลมาตลอด</p></section>
  <section className="letter section"><div className="section-index">/ a note</div><div className={`letter-paper ${letterVisible?'open':''}`}><div className="letter-top"><span>01 · 11 · 2026</span><span>เขียนถึงหมอ</span></div>{!letterVisible?<div className="letter-closed"><span>มีข้อความหนึ่งที่อยากให้หมออ่าน</span><button onClick={()=>setLetterVisible(true)}>เปิดจดหมาย <b>↗</b></button></div>:<div className="letter-copy"><h2>{typed}<span className="blink">|</span></h2><p>สุขสันต์วันเกิดครับ ขอให้ปีนี้เป็นปีที่ดี สุขภาพแข็ง ไม่เจ็บป่วยบ่อยๆ</p><p>ในทุกๆ ช่วงเวลาที่ผ่านมา ผมมีหมอคอยช่วยเหลือมาตลอด เราอาจจะไม่ได้เป็นครอบครัวเดียวกัน แต่หมอก็ดูแลผมเหมือนคนในครอบครัวคนหนึ่ง พร้อมช่วยเหลือ พร้อมดูแลในเวลาเป็นทุกข์หรือมีปัญหา โดยไม่ได้มองว่าผมเป็นคนอื่นไกล</p><p>หนึ่งในการเติบโตของผมก็มีหมอนี่แหละ ที่คอยดันหลังและช่วยเหลืออยู่ตลอด ยังไงก็ตามผมจะบอกว่าอายุเริ่มเยอะแล้วอย่าลืมดูสุขภาพตัวเองให้มากและขอขอบคุณที่ดูแลกันมาจนถึงทุกวันนี้ ขอบคุณครับ</p><p className="signature">ขอบคุณครับ<br/><b>จากผม</b></p></div>}</div></section>
  <section className="ending"><p className="label">TODAY IS YOUR DAY</p><h2>สุขสันต์วันเกิด<br/><i>นะครับหมอ</i></h2><p>ขอให้สุขภาพแข็งแรง<br/>มีความสุขและมีเวลาพักผ่อนมากขึ้น</p><button onClick={()=>setCelebrate(true)}>{celebrate?'ส่งคำขอบคุณแล้ว ✦':'กดเพื่อส่งคำขอบคุณ'}</button></section><footer><span>made with gratitude</span><span>for หมอ · always</span></footer>{celebrate&&<Confetti/>}
 </main>
}


