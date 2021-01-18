const encryptedMessage = "Zvtlivk'vujl'{vsk'tl'{ol'~vysk'pz'nvuuh'yvss'tl◄P'hpu.{'{ol'zohywlz{'{vvs'pu'{ol'zolk◄Zol'~hz'svvrpun'rpuk'vm'k|ti'~p{o'oly'mpunly'huk'oly'{o|ti◄Pu'{ol'zohwl'vm'hu')S)'vu'oly'mvylolhk◄^lss'{ol'lhyz'z{hy{'jvtpun'huk'{ol'kvu.{'z{vw'jvtpun◄Mlk'{v'{ol'y|slz'huk'P'op{'{ol'nyv|uk'y|uupun◄Kpku.{'thrl'zluzl'uv{'{v'sp}l'mvy'm|u◄`v|y'iyhpu'nl{z'zthy{'i|{'v|y'olhk'nl{z'k|ti◄Zv't|jo'{v'kv3'zv't|jo'{v'zll◄Zv'~oh{.z'~yvun'~p{o'{hrpun'{ol'ihjr'z{yll{zF◄`v|.ss'ul}ly'ruv~'pm'v|'kvu.{'nv◄`v|.ss'ul}ly'zopul'pm'v|'kvu.{'nsv~◄Ol'uv~3'v|.yl'hu'hss4z{hy3'nl{'v|y'nhtl'vu3'nv'wsh◄Ol'uv~3'v|.yl'h'yvjr'z{hy3'nl{'{ol'zov~'vu3'nl{'whpk◄Huk'hss'{oh{'nsp{{lyz'pz'nvsk◄Vus'zovv{pun'z{hyz'iylhr'{ol'tvsk◄P{.z'h'jvvs'wshjl'huk'{ol'zh'p{'nl{z'jvskly◄`v|.yl'i|ukslk'|w'uv~3'~hp{'.{ps'v|'nl{'vskly◄I|{'{ol'tl{lvy'tlu'iln'{v'kpmmly◄Q|knpun'i'{ol'ovsl'pu'{ol'zh{lssp{l'wpj{|yl◄[ol'pjl'~l'zrh{l'pz'nl{{pun'wyl{{'{opu◄[ol'~h{ly.z'nl{{pun'~hyt'zv'v|'tpno{'hz'~lss'z~pt◄T'~vysk.z'vu'mpyl3'ov~'hiv|{'v|yzF◄[oh{.z'{ol'~h'P'sprl'p{'huk'P.ss'ul}ly'nl{'ivylk◄Ol'uv~3'v|.yl'hu'hss4z{hy3'nl{'v|y'nhtl'vu3'nv'wsh◄Ol'uv~3'v|.yl'h'yvjr'z{hy3'nl{'{ol'zov~'vu3'nl{'whpk◄Hss'{oh{'nsp{{lyz'pz'nvsk◄Vus'zovv{pun'z{hyz'iylhr'{ol'tvsk◄Ol'uv~3'v|.yl'hu'hss4z{hy3'nl{'v|y'nhtl'vu3'nv'wsh◄Ol'uv~3'v|.yl'h'yvjr'z{hy3'nl{'{ol'zov~3'vu'nl{'whpk◄Huk'hss'{oh{'nsp{{lyz'pz'nvsk◄Vus'zovv{pun'z{hyz◄Zvtlivk'vujl'hzrlk'jv|sk'P'zwhyl'zvtl'johunl'mvy'nhzF◄P'ullk'{v'nl{'tzlsm'h~h'myvt'{opz'wshjl◄P'zhpk3')`|w)'~oh{'h'jvujlw{◄P'jv|sk'|zl'h'sp{{sl'm|ls'tzlsm◄Huk'~l'jv|sk'hss'|zl'h'sp{{sl'johunl◄^lss3'{ol'lhyz'z{hy{'jvtpun'huk'{ol'kvu.{'z{vw'jvtpun◄Mlk'{v'{ol'y|slz'huk'P'op{'{ol'nyv|uk'y|uupun◄Kpku.{'thrl'zluzl'uv{'{v'sp}l'mvy'm|u◄`v|y'iyhpu'nl{z'zthy{'i|{'v|y'olhk'nl{z'k|ti◄Zv't|jo'{v'kv3'zv't|jo'{v'zll◄Zv'~oh{.z'~yvun'~p{o'{hrpun'{ol'ihjr'z{yll{zF◄`v|.ss'ul}ly'ruv~'pm'v|'kvu.{'nv'/nv(0◄`v|.ss'ul}ly'zopul'pm'v|'kvu.{'nsv~◄Ol'uv~3'v|.yl'hu'hss4z{hy3'nl{'v|y'nhtl'vu3'nv'wsh◄Ol'uv~3'v|.yl'h'yvjr'z{hy3'nl{'{ol'zov~'vu3'nl{'whpk◄Huk'hss'{oh{'nsp{{lyz'pz'nvsk◄Vus'zovv{pun'z{hyz'iylhr'{ol'tvsk◄Huk'hss'{oh{'nsp{{lyz'pz'nvsk◄Vus'zovv{pun'z{hyz'iylhr'{ol'tvsk"

const importantFrequencies = [
    0.015,	
    0.028,	
    0.043,	
    0.13,	
    0.022,
    0.02,	
    0.061,	
    0.07,	
    0.0015,	
    0.0077,	
    0.04,	
    0.024,	
    0.067,	
    0.075,	
    0.019,	
    0.00095,	
    0.06,	
    0.063,	
    0.091,	
    0.028,	
    0.0098,
    0.024,	
    0.0015,	
    0.02,	
    0.00074	
]
const targetFrequencies = new Array(64).fill(0).concat(importantFrequencies).concat(new Array(38).fill(0))

decrypt(encryptedMessage)

function decrypt(msg)
{
    msg = msg.toUpperCase()

    let bestShift = 0
    let shortestDistance = Infinity

    for (let i = 0; i < 128; i++) {
        const tryEncrypt = ceasarEncrypt(msg, i)

        let newFrequencies = new Array(128).fill(0);
    
        let chars = tryEncrypt.split('')

        chars = chars.map(char => char.codePointAt(0))
    
        let total = 0
    
        for (let i = 0; i < chars.length; i++) {
            newFrequencies[overFlow(chars[i]) + 64]++
            total++
        }

        for (let i = 0; i < newFrequencies.length; i++) {
            newFrequencies[i] = newFrequencies[i] / total
        }

        let distance = frequencyDistance(targetFrequencies, newFrequencies)

        if (distance < shortestDistance){
            shortestDistance = distance
            bestShift = i - 64
        }
    }
    console.log(bestShift + 2)
    console.log(ceasarEncrypt(msg, bestShift + 2))
}

function ceasarEncrypt(msg, sft)
{
    return msg.split('')
    .map(char => char.codePointAt(0))
    .map(num => num + sft)
    .map(num => String.fromCharCode(num))
    .join('')
}

function overFlow(charCode){
    if (charCode < 0){
        return 128 + charCode
    }
    return charCode % 128
}

function frequencyDistance(arr1, arr2){
    let distance = 0
    for (let i = 0; i < arr1.length; i++) {
        distance += Math.abs(arr1[i] - arr2[i])
    }
    return distance
}