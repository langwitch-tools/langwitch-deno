import { engineFromStrings } from "./csvs.ts";
export const data = `und-Aghb xag-Aghb aho-Ahom und-Ahom ar-Arab awa-Arab bhd-Arab chg-Arab ckb-Arab cpg-Arab dng-Arab doi-Arab hac-Arab inc-opa-Arab kfr-Arab kk-Arab kmr-Arab kok-Arab ks-Arab ky-Arab lki-Arab nog-Arab pa-Arab rif-Arab sdh-Arab shi-Arab tg-Arab tt-Arab tzm-Arab ug-Arab und-Arab xco-Arab xng-Arab xnr-Arab arc-Armi und-Armi xco-Armi axm-Armn hy-Armn kmr-Armn qwm-Armn rmi-Armn udi-Armn und-Armn xcl-Armn ae-Avst pal-Avst und-Avst sa-Bali und-Bali as-Beng bn-Beng inc-mas-Beng inc-mbn-Beng inc-oas-Beng inc-ork-Beng pi-Beng rhg-Beng rkt-Beng sa-Beng syl-Beng und-Beng sa-Bhks und-Bhks inc-ash-Brah inc-mgd-Brah inc-pra-Brah inc-psc-Brah kho-Brah oty-Brah pi-Brah pka-Brah pmh-Brah psu-Brah sa-Brah und-Brah xtq-Brah ar-Brai el-Brai hy-Brai ko-Brai ru-Brai th-Brai und-Brai cr-Cans crj-Cans crl-Cans iu-Cans nsk-Cans und-Cans chr-Cher und-Cher und-Chrs xco-Chrs cop-Copt und-Copt grc-Cprt und-Cprt ab-Cyrl abq-Cyrl ady-Cyrl alt-Cyrl atv-Cyrl av-Cyrl ba-Cyrl bdk-Cyrl be-Cyrl bg-Cyrl bua-Cyrl ce-Cyrl chm-Cyrl cv-Cyrl dar-Cyrl ddo-Cyrl dng-Cyrl eve-Cyrl evn-Cyrl gin-Cyrl huz-Cyrl inh-Cyrl jdt-Cyrl kap-Cyrl kbd-Cyrl kca-Cyrl khv-Cyrl kjh-Cyrl kjj-Cyrl kk-Cyrl kmr-Cyrl koi-Cyrl kpv-Cyrl krc-Cyrl kum-Cyrl ky-Cyrl lbe-Cyrl lez-Cyrl mdf-Cyrl mk-Cyrl mn-Cyrl mns-Cyrl mrj-Cyrl myv-Cyrl niv-Cyrl nog-Cyrl omk-Cyrl os-Cyrl pnt-Cyrl ru-Cyrl rue-Cyrl sah-Cyrl sgh-Cyrl sjd-Cyrl sva-Cyrl tab-Cyrl tg-Cyrl tt-Cyrl tyv-Cyrl udi-Cyrl udm-Cyrl ug-Cyrl uk-Cyrl und-Cyrl wbl-Cyrl xal-Cyrl yai-Cyrl ykg-Cyrl yux-Cyrl cu-Cyrs orv-Cyrs und-Cyrs zle-ono-Cyrs awa-Deva bfy-Deva bfz-Deva bgc-Deva bhd-Deva bho-Deva bns-Deva bpx-Deva bra-Deva brx-Deva cdh-Deva cdj-Deva doi-Deva dty-Deva gbk-Deva gbm-Deva hi-Deva inc-ogu-Deva inc-ohi-Deva inc-pra-Deva inc-tak-Deva inc-vra-Deva kfs-Deva kfx-Deva kok-Deva ks-Deva mai-Deva mjl-Deva mr-Deva mtr-Deva mwr-Deva ne-Deva new-Deva omr-Deva pgd-Deva pgg-Deva pi-Deva pka-Deva pmh-Deva psu-Deva sa-Deva saz-Deva und-Deva unr-Deva xnr-Deva ybi-Deva doi-Dogr und-Dogr am-Ethi byn-Ethi dlk-Ethi gez-Ethi har-Ethi sem-cha-Ethi ti-Ethi tig-Ethi und-Ethi ka-Geok und-Geok ab-Geor bbl-Geor ka-Geor lzz-Geor oge-Geor os-Geor sva-Geor udi-Geor und-Geor xmf-Geor cu-Glag und-Glag zle-ono-Glag got-Goth und-Goth sa-Gran und-Gran cpg-Grek el-Grek grc-Grek ine-pae-Grek oos-Grek pnt-Grek txh-Grek und-Grek xbc-Grek xmk-Grek xpg-Grek ae-Gujr gu-Gujr kfr-Gujr sa-Gujr und-Gujr vgr-Gujr inc-opa-Guru pa-Guru sa-Guru und-Guru dng-Hani und-Hani arc-Hatr und-Hatr ar-Hebr jdt-Hebr ka-Hebr und-Hebr yi-Hebr ett-Ital itc-ola-Ital nrp-Ital osc-Ital spx-Ital und-Ital xcc-Ital xfa-Ital xle-Ital xlp-Ital xrr-Ital xum-Ital xve-Ital jv-Java kaw-Java sa-Java und-Java kyu-Kali und-Kali und-Kham inc-ash-Khar kho-Khar pgd-Khar pra-niy-Khar sa-Khar und-Khar xtq-Khar km-Khmr pi-Khmr sa-Khmr und-Khmr dra-mkn-Knda dra-okn-Knda inc-pra-Knda kn-Knda kok-Knda sa-Knda tcy-Knda und-Knda ko-Kore und-Kore awa-Kthi bho-Kthi hi-Kthi mai-Kthi und-Kthi pi-Lana sa-Lana und-Lana lo-Laoo pi-Laoo sa-Laoo und-Laoo und-Latn lep-Lepc und-Lepc lif-Limb und-Limb gmy-Linb und-Linb und-Lyci xlc-Lyci und-Lydi xld-Lydi mwr-Mahj und-Mahj arc-Mand und-Mand pal-Mani sog-Mani und-Mani xbc-Mani xpr-Mani und-Merc xmr-Merc und-Mero xmr-Mero kok-Mlym ml-Mlym sa-Mlym und-Mlym mr-Modi omr-Modi sa-Modi und-Modi bua-Mong cmg-Mong mn-Mong mnc-Mong und-Mong xng-Mong xwo-Mong ksw-Mymr my-Mymr pi-Mymr rhg-Mymr sa-Mymr shn-Mymr und-Mymr sem-dad-Narb sem-dum-Narb sem-has-Narb sem-his-Narb sem-saf-Narb sem-tay-Narb sem-tha-Narb und-Narb arc-Nbat und-Nbat bn-Newa hi-Newa mai-Newa ne-Newa new-Newa sa-Newa und-Newa pgl-Ogam und-Ogam sat-Olck und-Olck otk-Orkh und-Orkh or-Orya sa-Orya spv-Orya und-Orya arc-Palm und-Palm koi-Perm und-Perm und-Phag xng-Phag pal-Phli und-Phli pal-Phlv und-Phlv xco-Phlv arc-Phnx obm-Phnx phn-Phnx sem-amm-Phnx und-Phnx xdm-Phnx xpu-Phnx und-Prti xpr-Prti rhg-Rohg und-Rohg ang-Runr gmq-pro-Runr got-Runr non-Runr und-Runr arc-Samr sam-Samr und-Samr inm-Sarb sem-srb-Sarb und-Sarb xha-Sarb xhd-Sarb xqt-Sarb xsa-Sarb sa-Saur saz-Saur und-Saur ks-Shrd sa-Shrd und-Shrd sa-Sidd und-Sidd und-Sind pi-Sinh sa-Sinh si-Sinh und-Sinh sog-Sogd und-Sogd xco-Sogd sog-Sogo und-Sogo mn-Soyo und-Soyo su-Sund und-Sund syl-Sylo und-Sylo cdh-Takr doi-Takr gbk-Takr kfs-Takr mjl-Takr pgg-Takr und-Takr xnr-Takr tdd-Tale und-Tale khb-Talu und-Talu sa-Taml saz-Taml ta-Taml und-Taml und-Tavt sa-Telu te-Telu und-Telu rif-Tfng shi-Tfng tzm-Tfng und-Tfng zgh-Tfng dv-Thaa und-Thaa pi-Thai sa-Thai th-Thai und-Thai bo-Tibt dz-Tibt lbj-Tibt sa-Tibt sip-Tibt und-Tibt mai-Tirh sa-Tirh und-Tirh uga-Ugar und-Ugar und-Vaii vai-Vaii peo-Xpeo und-Xpeo ii-Yiii und-Yiii mn-Zanb und-Zanb`;
export const engine = engineFromStrings(data.split(" "));