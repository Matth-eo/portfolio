from pathlib import Path
p=Path("src/components/HeroSection.tsx")
s=p.read_text(encoding="utf-8")
s=s.replace("FiArrowUpRight, FiCode","FiArrowUpRight")
start=s.index('        <div className="hero-identity">')
end=s.index('\n      </div>\n      <div className="hero-bottom">',start)
avatar=s[start:end]
avatar=avatar[:avatar.index('          <span className="avatar-note">')]+'        </div>'
avatar=avatar.replace('sizes="(max-width: 640px) 300px, (max-width: 1000px) 40vw, 460px"','sizes="(max-width: 640px) 96px, 112px"')
s=s[:start]+s[end:]
s=s.replace('      <div className="hero-grid">','      <div className="hero-grid">\n'+avatar)
s=s.replace('<br />I build things\n            <br />\n            for the web','<br />I build things for the web')
p.write_text(s,encoding="utf-8")
p=Path("src/app/globals.css")
s=p.read_text(encoding="utf-8-sig")
s=s.replace('  grid-template-columns: 1.2fr 1fr;','  grid-template-columns: minmax(0, 1fr);\n  justify-items: center;\n  text-align: center;',1)
s=s.replace('  gap: 55px;\n  min-height: 500px;','  gap: 24px;\n  min-height: 0;',1)
s=s.replace('.hero-label {','.hero-copy { max-width: 820px; }\n.hero .actions { justify-content: center; }\n.hero-label {\n  justify-content: center;',1)
s=s.replace('  max-width: 445px;','  max-width: 520px;\n  margin-inline: auto;',1)
s=s.replace('  width: 100%;\n  max-width: 460px;','  width: 112px;',1)
a=s.index('.avatar-note {')
b=s.index('.hero-bottom {',a)
s=s[:a]+s[b:]
s=s.replace('    min-height: 420px;','    min-height: 0;')
a=s.index('  .avatar-note {')
b=s.index('  .project-card-bottom {',a)
s=s[:a]+s[b:]
s=s.replace('    max-width: 290px;','    width: 96px;')
s=s.replace('    flex-direction: column;\n    gap: 15px;\n    font-size: 10px;','    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 15px;\n    font-size: 10px;')
p.write_text(s,encoding="utf-8")
