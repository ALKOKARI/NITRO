window.main_js = function() {
    function t(e) {
        var t = $('[data-l10n="' + e + '"]').html();
        if (void 0 === t || "" == t) return e;
        if (void 0 !== arguments && arguments.length > 1) {
            var a = t.split("$$");
            t = "";
            for (var i = 0; i < a.length; i++) a[i] && !isNaN(a[i]) && void 0 !== arguments[Number(a[i])] ? t += arguments[Number(a[i])] : (i > 0 && (!a[i] || isNaN(a[i - 1]) || void 0 === arguments[Number(a[i - 1])]) && (t += "$$"), t += a[i])
        }
        return t
    }
    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments)
    }, $(document).find('i[class*="fa"]').each((function() {
        let e = $(this).attr("class");
        e = e.split(" ").map((e => (e = e.replace("fa", "gi")).replace("gice", "face"))), $(this).attr("class", e.join(" "))
    })), $(".is-firefox").length && $(".is-firefox").css("display");
    var a = '<div class="clear"></div>',
        i = "##",
        n = {
            '&lt;(")': "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABC1BMVEUAAAAlKjUkKjQRExkKCw8jJzMLDBAKDA8CAgNXQEENDhIcICoRFBoDBAYFBwhETGQ/R10GBwnoiTLlhzHWcSICAgQRExgkKjQhJTEOEBUAAAAAAAAAAAERExk+RVxAR15ASF8oLToQEhYCAwUxMjX1mDixYyDigi6ympPM0Nrcdybigi7phCw9RFs+RVv5+frw8fT09ffg4efp6u73+Pk2PFDQ0tnk5uwqLz4aHCPt7fDHydHb3eQSFBrV1+CQlKDY2uK3ucC/wcs6PkmenqXTdyarrrceIS1FSFExNkhRVGJgYWVfY3MzNkHqiTDcn3bTlmwxMjd5e4AoHhfg19aFiJByTze2aCqrck7A24KcAAAAL3RSTlMADQQe/vxXSuAw7L6Z88qkdLshzZTpd2XqFZkpPYWz/OWq8tPjcdo7yqKz79Xo6JD70PIAAAG5SURBVHjaZdLTohtBAIDhzCI2jy21HawtRTp+/yfpxPpvv91xah1IF454/qiQBqmDjou80qUpfPF435iiqojzFLXI7GGm5AeuLYq2G/ilzB6eqC6GWq9HIHbVk10D5b430GEyJPrA65fBDrLZd6+nSx8frt7z3rPsHvYNSxuH4USzjP4enramukwojomsT1unO3hWMiND/pxMPmUjMktn2wbOOTWwHExzrEDlzsHWjBe8mXiWsUAvUfkLdmWgIqqKbWCZ0GTDsRVVrIAlVi/jeGARDSKEINRkaRDHl9WF5a4Uk7cJRMI8pMk2bypXuZkxFdE0hy61f/OougpnihWGYu5PzJm+DqktQlAfclz8N0exqnC1vC9tUICSn69xCp2VuTbLmRmizZ/SsJUpm9dMChRuMmx2qmtbc3p8ls3cFECKaXcYUFMjGaLVj3Kk1gDT6SwfRJv7wgQK8/8gwV9ce/vGbhOJKqJRk5LbnTtL523HkImmzY8vn942qneR5RgYG44V3e1Z/f7hO9Almh58P9zXt+2xMRqFP79Pz89Pvz/haNR43P6x2Xh5fWvm6GE2315fGs3Fr/8BSVtcP+HbYZkAAAAASUVORK5CYII=",
            ":putnam:": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAhFBMVEVHcEwuUpswVaApS5AqTJAsT5YrT5YlRogmR4ovVaA+Z7gpTJEmR4onSIopTJEuUZg/aLlGb8FCarwqTZMwVaA5YbEsT5dSe81BartPeco2Xq0zWaZHcMIzWqhOd8hLdMY9ZrhJcsVBar1Ufc9Od8k6Y7Q0XKs3X68yWKVGb8JEbcBReszJRRq9AAAAIHRSTlMANeqbH1P3BxL+cj9lecMqSNKNg9Hjtvim6sebvfLx6S8tq2wAAAEKSURBVHjajc4FwqYgEIDhMQe7u7vuf7+FL5F/67F9FYD/QTzf91BVEcWCfhgUWVbkYWDmqpDqdnorLhN4Jk2ckG9Sd2uDxsdwvngB4Rqp56eLblRrctEc5ruAW24wCA7/G8cfkRu3PwRnyMVTlOMnJqPgTCSgEKiqH0UlrVhpNFpJ/0NJwFoSVqNNbIuCUG2ygwBEWZe7koDnRh4wJJI3Lm27S4CogFIEjBav20dsS2w8O212eFBTvlrsjSLvLDKSvH40GgAiqHb6ih4XY0KfFY0AvqKzP+i6YRhsHZgarvaKlrwzsm3Zjk2A0gzdgSfFYM1Q4IO4DsKT5LLxdAu+VPzeOq6uKwh3vwBP1DVnDxxxogAAAABJRU5ErkJggg==",
            ":poop:": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABEVBMVEUAAABaOiFDKxdGKhZPMhtRNB5OMBpCKRZNLxlfPSQ+JxVIKxdkQCZDKhZhPyZSNR93TzBPMRpFKhZQMhw7JRM/JxRwSi1PMRpiPyZhPSV1TTB8UjN/VDRmQyhdPCJqRClXNR5BKBN3TjBUNh9hPiRpRSpaOSF8UTJFLBluSC2JWjeTYTxOMhxkQijW1+OOXzxLLxmAVDSEVjWeaUKqcUaaZT+jbENySy3x9Pg7Iw95cXS8vsfq7POCfISMaVKQd2jLxsX3+/5lanONf3ptV0piVlOzeE2mq7CmnZxHMydwZGm8s6+ypqGglJBTWWHj5u+alp7d4OtSOy5fRDjc3O52ZmLNy9OdoqmjnJwbIy4fJzLM4RJxAAAAIXRSTlMACeYtE0yY+V3luDr273v4a4UcxtNwntjBy7nyvtLS+a19sKb4AAAB4UlEQVR42nWRA7rsMBhAO7b93LBJ7V7bGmv/C3mZXut8KE7yU3pP4kc3LX1Dov6TVr9Tv7hp//76at1xPR/8+Vp2bZWHqPFVzEy2B6Gm5LKlxCdZLTNMICQIlfv5DzpVAKavxnD6N/s+b56EZuAJAl91wIfEpQoJHVM1uUMBw6jXfKOyrZxsEaQjRKBIDJOp15gF4NhYk2MszVLkdvq1GOqeu6ZNMUFMRGUhar2E7SDuHtwc3u4HQeDt3x7eHJh08Bw3q/N94yg6OjTPz/cPxYuxz9m/p14bKLyLLo53ogPfPYh2jhfRHaXl0qPM1NBy9361HZ3Yzkm0t77fvWQU5WOXzle07Qdx0zgF4NTYOb542MaAxDLTr8ny1dAYGXsQALgnXoZjrMedZgpMh4qsnG2fKVDXyeblSoNWcSMHIaWhTix5a0tWLMtStsSLQCtUE1J5sw1OQwwVRfzbKEuDBGFcrkqIcdcLXJ+P9/a2r6+vt/euMKC2TQEuSDUdCOt5wWRnagimOxPVd33TAZhILagzylU/cGbzXcF8xkUcVThUkzJJTawKM2CD05PLy5NT23RswLBOtKIkZYpJxdI0CAkWMKYjQiDUrFzcTKLUyRbbyUpOVgS5XKWSTCbbxU5T+g89/lfg6IsUjgAAAABJRU5ErkJggg==",
            "&gt;:o": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABPlBMVEVHcEzIJQDQLwD3XADePwDxVADLJgDhQgDxVQD5YAD8ZgD6YgD2WgD2XAD8ZAD3XQDyVADSMADPLADHJADRLwDKJwDJJgD5YAD3XgDfPgDlRQDqTADzVwDxVQDVMwDGJADLKQD/cAD/dgH+agD8ZQD/hArfPwD/kxz/ewP/qDX/jRT+hw//ninpSgD1lS7PPwDZQQDN2O2zNgD/mSPtbgz/gAb/oy7WNQDn7fnfTwHV3e6yvtrlWwnwUgD6YAApL1A6M0HxdAr8ojRkPECJXFmgMQHHwcTUhy/OciUyO2Lx9fz2WwDOxsXtgiK9TwbQUgTg5/SntNHdz8/eaCp6REzTfFPEiHLFTRlhHiK3eWSbVRmgm6bwfxyFTyO0VxO3tL2ocTC5dzW3aB8+IiKlorrIaSr6/P/ft6Wlo7obGjIiJd2tAAAAIXRSTlMAKv5qDjYCFinR/f1ZnujM41lqNtHozrKy0J7M7OyynrJ76npZAAAB8ElEQVR4XmXT5XLbQBSA0ZUsaWXHrmOowyBmNDNTmJlTfP8X6N06TTzN90eaObpXs5oR+ojDPMvymEOfw/FE8guUTMTxf8REojFJECFBikUjzLzxSzFB1IsKVNRFIbbEfxgblURdsUwNMi2lKEpR9n0OrAiUz9t2Pg9M9G2WWZZnZpcge6by8uy9kQVBn5kBzVQXFiLEMCxVTFOzSz3XMNxeydZMU4HFGDAOg92updnGvue63r5ha1a3C6NxhLiELOgNz682Cg3fdX24VH2voQtygkM4CagXDochPOC6AOHwsKADJjHiFwEV66bTeX246/XuHl47v28sBXCRR+y6TE553562nwzoCW7uyUnldRaxGy0JRl/a084YzlIad6btFxiUWhssrG3JRCfPYy1PGj9PiMktWIvXdomKhcn3tyYFkdjuGkbcapPoweD2cTTa2xuNHm8HB8SaqxxCKQe02j8OKjs/oJ1KcNyvgjkp8vlWQMN+vfYPa/V+CLaCEZRWnebw6ltwVNmBKkfBr6th01HTiMRsqk54Nj95FjrqJgMEUVnVG9SD2slP6KQW1AeemqXQW5ls+fL64vy0AZ2eX1xflrMZ9B61Tfvqez69TaG5mHSOpst/o+lcmgGYD6e2cl+h3FYKo89xmMpkqPnf4Q+iuW2XBKq3JwAAAABJRU5ErkJggg==",
            "&gt;:(": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA/1BMVEUAAAD/oA3/jwP/wiH/mwz/dgD/lAb/hQD/txb/shX/hwD/uxr/uhn/vh7/uhr/tBX/ngf/iwH/hwD/gwD/mQD/xij/vh7/wSD/vR7/uRn/rRD/iwH/gwD/gQD/0jb/xyf/1Dz/2EP/5GD/52n/3Ez/7Hn/wSD+6HL/ngb/yyz/3lL/uBj/rxL/lwP/zjH/4Vj/7oL+pQz/jQHsrCndfgH+qw4pLUz31GfkiwnKjiHMr0ZPFAv/kwJpOgrtu070wD33zlXXeAGih0IvOWNERlB+UhDomRmVUwaPezkdHDKLej2vnlPiyFjvuiS2ihqbXBCVVhzgpCuwYQGxYgEsJTGYLWCeAAAAHnRSTlMAKRXQDgI20Bae/jZZ487szllq6ALsarKyauOysp7602q7AAAB1klEQVR42mWRA5olMRhFk2ezjaBsu21rZva/lvlTLZ2HwvnujdAnKz08HOLeCvpNb9RvjldXx83+qPdDtdaa1COEMUI82lxrfXV4nXqMKzWceXQdf7ph0yRcsXwJ8C2FE7M5/Mg1TcZByTWgOTObb9nWxpvTdVXV9Te70arlJoVO4dQaYaGZbtZrmJhMEUFVDQBVFVGFmROxopHmwWREMKgRUZiUp40Qavc/WvXDIDjUP3r7bdSYgIzjo2NZPTzJ85NDVT4+imOQkwbCY0pYnCRJcVkkeS4u8BAzQscYdabUY+yovLj6c1LkeXHy9+qgPGLMo9MOSM0kjF9n2c3psa4fn/7Lbq45J6YGEm9p1CT8NjvL7mTYgju4ueXEo9oWRo2ZLWx1fnZ+LwH3cFMRk2r2rAFLcYT1qtNKsQAFbjzhHFgKmodgtbfTZPATleDCOULQC1boh8eLg4OLxwehwEErsHDDFHR5sFdzUIJKQ3eBBK1t1wjT9Om5fInjl/L5KU1Dw91uoRrc3TeMMHScFD6OE4aGsd/F6JV2pxu5rvGB60bdDvoA7wyi/X23Zn8/Guxg9Em7tegOBlHNYNBdtNB3GvPd7hLo7s4b6DftBu50cKONPvgPOK5ZkD4VK9YAAAAASUVORK5CYII=",
            "&lt;3": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAtFBMVEUAAAC2ChLsIiWxCxPdGh7KERfnHiL9PDr7NzbXGB72Li+4DhW9DxauCxPOFRv2LS70Ky34MTLCERfMFRvKFBq8Dxa9Dxb6Njb4MTL3Ky3pIiXaGh/dHCC6Dxa5DhatCxOfCBHwJynvJij2LzD2LzDxKSvUGB6xDBT/QT//RUL/Pjz/Ojn/Nzb/SEX/T0r+MTH3Kiv/NDT5LC3jHCH8Ly//S0fqISTtIiX1JyryJSjUFxzvIybGuTxuAAAAKHRSTlMABUUWIQku9ew+9mSTNfi0otpTxOTc8+Lphdur87+2V55rYs/j7ceGvksa8QAAAQ1JREFUeNqFzQUO40AMhWHPhBnLXaYwc+5/r01c5k9k6Zf84DOOp5QlgAhLKc+dE6GGKAgrk4cJb64EQTToqf0Q42TiWRSAWv58x+JPQHRqyP/FsnPDupZwz/DqgzjYbIL6yDPJPLL24yNfEC73b3b+KvsX3uWSJYzeUxglOQyeCP/wU2S3UfhEtGWmSHZF9ESxIzBRmjR/kDY2zJi/WfogcxhA9r6o7mR7Gw44tcyKG1mpEjhinSa70cxPj4jktt2V1tXgiqK3/VmrK3CFcOrQjkftgINXmC9l06Jm+MrALaK5ZYPKxXHwdrZEy2/wiKjD3PR/5CHh7FRx8BltMQw4+JSyxMHnuO/fbwb/AwMhR10qYBbiAAAAAElFTkSuQmCC",
            "(^^^)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABR1BMVEVHcExigI56maVLZHA2Tlp0kp9ykJ12lKGfusVIXmhzlaOHp7RDX203TllUcX54kp20z9hCVl9+n61pipmbt8Nkf4pPa3ict8ONqrdXeYqbtsGUrrpwjJhCW2ePsL2Ko69sipZbeYdUb3w9VWCuyNJti5mEoayKpbKCoKx3kZ6HprJQY2tSbXmUr7uQq7emw859nquKqLSCnaqVsb0gMj1JZXJcfY2Koq6QqLFvkJ1adH63ztZRZW1zkp94nKp3kJqSrLmqwct4nKxjipulwct3mqdggI59hIyitsCVrbaDnag9VWBnhJKFn6uUsLx6maaGp7WpwszF19/Q4+rO4OebtsHT5ezI2+Kwx9DL3eRcdH+90tq5z9jB1NykwMrY6vCNrLjW6O6Ys760y9Ta7PKFo7CzwMacoKeqsrm2x8+4y9RES0+Io64fhwcsAAAAUXRSTlMAErQpEP0DCv7hIX5NGG36p1VpmcD4MN46QGuc+jom8Gd7XW6TYdbDnDSoyeCzU3/43+bsR5HI9vyFyZe4zFDh0vK920XknM7u5fCh7Pz+/v6C6DR1AAABnUlEQVR42nXRZXfCMBQG4GKlaHGGDNiAubu7S1mSuuFM///nNWzdwtn6fujJuc+5N01C/Q1dCp2d5/6p0xRVCq0+Nba8RNVfusgv12Kx2H4ty7X6volfGVtO3TKmHYbrF3M2LS2uC+z7DgBWXbDCtZ5WEv6hBecEoEvGgBcR4iWtazJDTbowzgk6ajd7vbaIv72mqGiyKbQaSdw7DSCPpMHLy0Bq4zSbSO50uL7vKhyhxhZPu2/Pz69Q4RESRcwilEGnkd7cwP+aL1zfAFnu6oakIIS9zUPh+zg07ZpdyocKJxwDdKgMWdQ+Ri6CKjAtdjora0PmzYdxwvwpnUl6g4mUqVnbI52dJDCYBW58Old9Ckg8bzSiBM6WjzNfq8whUBTjkcTxQNV+nFwZSsZ2mMDIht9eelahpO0QnWTCdxDK7P3oU9P2kCnttTwZIcy163bPhI6C1vA6J29P0CONnuhe2rdy6a5U1oT1OjZSKW/8IF30Fdm1mYRtRCyeV1U1SjnEE1AXMk7onVc3aSeMBBY8DoRvMU45Jl79GfoJvtNaFVod0+0AAAAASUVORK5CYII=",
            "3:)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABYlBMVEVHcEy1ddmPXa0pLTRQHXRPG3U4Ik5NGXNLF3A9HlhYJXtNVV56PaE1OUJQHHRMGXGycdahYMWvb9OxcdUsMTV0O5haI4BiKognKi3FhOmlZcmoaMyLY6RJSldIFmwtMDdLGW9pMow0NjtSIHZRHnRNMGhSHXc0OUAtMDZaJH8zOkE8REltM5R8QaF+RKN8QqBqMo8xNj0oKi42P0LTkPnQj/anaMqdYMCbXr17RZzOjPPGhOtkMYaMTrGqa8+YWryhZMOVW7d2P5mQV7GSVLifYsLKie8/Rk7Af+W5eN2BTKBlO4AtFT6HTqhUMWyJT6xfmD42QUJuOZFEU1VoM4pmTHtLKmWkZciBRKdfLIFbZXGhYcZDajZcN3NRWmY0I0ktNDkkKDFES1dEMlcySDgvLEFSKHM8IlevcNNXRWaTYbGKXKVWfj0rPTchDjBmcH12SJIbGCVZakZhT2pHdTtWjDsC6MslAAAANHRSTlMA/Rov0DYFKhIY/P7+6LJqzi/o/97s0M2Ma1mf+uxaQ5/79OzjtFqq1p7P4Vqey+LiYFWMuZiH9wAAAkBJREFUeNpl0AOjpEAAwPFZVs+2bd1V02Zrbbw1nqXvf7M4/3L/OCC4cAUGvJOIFwxcLQQBcTBzGeyWpeWJKWRieanbg5fHBwTwjZpb++vexQmPbbEsa1m2Z2LRu74/PDzqQ7ExbG6NrhiGEeoxWHZldbVYbKBIHJmVYiVxZ5Ak+R0hScO6G355qZhHBAALicZw0cywKPWF7EyqWGmY3wAAvhkzlTLvf0UyZD8kUqnUsQ/F4G4tkcjcojhAWlSmljB3gygSc0NZjhfYEDkQYimeyxbmCRRPRvIjI/mSbfU/1zAsO5dX0MkTFE9hLkfpIqQ8FotYHgqKOpXLwVMA8DOdV1SBgppWEqanhZKoiZSgKrx+hgPsXM/ftDP3uZLG92il3H2mfZPXzzEQmKVjN0+P73cPkBY1TaPhw8f719NNjJ4NoChqnUQ8fn3ddEWKEt3m42M8/tTRRBSxCxUmq9eo1t+c6Wnnrf6J9qtJqF5gAJ+PQL7TbrVq9Sh9e0tH67VWq93hYWQeB+BQkWGMyzajjC4gOhNtZrkYlJVDAMDeZkSmoYz+jcr1Zl2UIS1HNvd6w6fEZKjT0i+0DuWYMkcAZJxjYqpcjqp0jxoty2qM4cZBFz6WZiKq+xwuvzrOazn87KoRJj2Ggx7MzylOxK2Ge6puxFE4PwYGAv5CknEYN5rNRl20kyz4A+AXbGyISypMj5LkhsYw8Ad83D9U4NLJdJorDPnHcfA3Ym3Dv7O9vePfWCPA/4I4FghgeBD88gPZtpZeWbhDpQAAAABJRU5ErkJggg==",
            "O:)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABj1BMVEVHcEz5hQn/qxb7oxj0tS372YT/gwH/lAz9nxr6fwT1hxT/hgT/mBz/hgP/gAD/viX/jQr/sRr/sxvvqyf/vST/ggH+wTb8zFX7sCz+viP2uUz+1GX/iAX/jxP/uB//fwD/pBT/th76rSrykRf+wyrrhRD6sSDvkRPsqDzyrB/wmiD0pxv93Yf+2nn7zmf902n9zln4xmL93IH912j/kA//kQ//oBP/6G/onSv/xSr/kwv9pB3+2Uz/zzf/10f/5Wf/31n/iwX/8YT/3VP/0j7/7Xv/4l//yTD/mg3Wdgnchhb8zjv/nD/811j6z0D/uz38xUeJgVT+yTb/lC7302L/kDjzxlbdkiP/ryLghAz/tzDutDykXyU0MTLTw2v/q0SThVBraFc8PUEYHzz/7oD/fUz0vzT/k0f/ikX/6XZzTBXOih9pQxM/EQ+KTRxbExX/pC+TYx12Jxvq3HvEuGvBpkLgw07fuTyjjkhwZj8bIkE1N0MYID7YtlIdHzLcy2y5dSljPhJzGxhhFRY/CBDot7HrAAAANnRSTlMAbyc4/fTPFg8sBrL++zf9nuPr/dHonvtfr8lV0M9qWczMOp779Pu979Tpe9CL4t8nzLStWlq3JE48AAACQ0lEQVR4Xm2RZXMbQQxAz/bVZ4TEqTEcN8xpj8HMzIxhZqbCD6/u7NJM36fdfSNpJSEimnXnyubyhwHLmyvOdQ3SR+XcWlvdcMyTA+YdG6trW06V5CxWh02xtGBGdyVQ88KSwuawWkQ7jS6q5XZX1s+zrI9led6fddnl6kV0Woyc+TQ3EgLlcwcBt4/l/aGRuU8zUl6NbBYcKEEgCEEADXZW1v+Syi65RJA4AIhgQrJ2lSTHXRzP10qRaD4A5KORUo3lOde46DAouBuNRCLR4jZQlI67UBYDaTNyaKVC1or5g22vd/sgX6yRlQrKGW0gLRSHmtMJgQiAAxsghETajHKUBbJOUZyf9QX/lkEf6+eoKQyRD1Fc8ubWLRBvmSuv9yrzRgju25skRw3JEcUwxd01Gg/tTPf12uu9fu1m2g+Nxh1HDStEGYrdPz33eo/dZiDQ7D72es9P97EQSEhrpLLJl3ank2kSQDPT6bRfklnKCGmxyXK1mkqlrQl3UMKdsKZTqWq1PAmNmpjz+N5evJWG0QMsn26J93PGBH1+1uX2d3b2W6lsLJZMxmLZVEu853RfQGJjulyhECcvDo+/AseHF2S8UMjpxjAEkNE6hikfnfwYcHJUZhgdLeuvTEvjOMOcnn2XODtlGByntSpEQj1Kh3GcrF9+Ay7rJI6H6VE1MsCg9NDhMFN6r9ffS0w4THuUBuQ3aq3eQ4vhDATRHr0W4v6gkin1ngF6pUyF/As2YVJ+BJSmCQz5D5jaYFBjmj/iJxL8oG7v3wBJAAAAAElFTkSuQmCC",
            "8-)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABelBMVEVHcEz/uSD/hgT/lQr/hQP/gAD/nRD/xSr/nRH/xSv/uiD/gAD/hgP/hgP/lg3/viT/wCX/iQX/uB//uh//egD/vSP/wij/wCb/wij/gAD/gQH/ggH/gQH+lQv/uB/9nA/+tR36ohM1OD5sWDhpTigrOVXonhebejn/wCX/yjE0PVD0rxz9oxT5qhfn6uwwPFpVXW7/mg5JV3KjqLE/R1a4u8L/4Fr/6nP/iwX+0j7/2Ef/nhPt7vDM0NX/zzc+SWDwsyH1viquhyXj5OZTGRKCiJVNSjnX2NuqsLmanqn09faWdiniph9BT2z/kgjIhSDrnBzVlh6iWyP2xzTz43vbxV3vz0+monH/8ITLs0rgtzV0fZB6c069w8pgIhL/42L/52ssM0FhZ26gaBq0ayVuPxDx2mf52FKzkyyChm/221/u2WiWlm7VoCCNcylfWTjSxWpLVl93d1bmwUGSiluQmKNkZ13RpTBgXEr/7X3/3FC8fRXaiBJ/UhMWyvBOAAAAKXRSTlMAKrL+0SoS/RjoNzdq+wOy0FlZzgJq0J7Mnszs489qnp7M/Uxm6uvp/otTkL0AAAIxSURBVHheZdNlT2NBFIDhqc1lK5QK7sV63evu7m64u7P233fabYDA82mSN+fDSc6AD5NQodUq4CT4bsI8O/cDmZs1T3xJcHoGwwNuJIBjM9Pwc1MYsYDb4/mFeDzuAGZUfDTtFO5GxeHY3XU4UHfjU9r3uVFDZQ9BfVTHs9A4aig5h/b+VyMcxRUs4GnU6ydO50/E6Typ1xueALYy2sGCPz5xgnDQrA1jrXkgCNzTI24ZbmS2d16EuCh28+e1Vqt2nu+KYlx46djNAFjXwj1B9jHJqJhvtlrNvBhNMj5Z6IXXrABaXqV0JnkgxaPd+6ur+240LnHJTFp6tUCwsfMW9GfSRJBIplgklSTy++mMP/i2swG2WAJFmWW5aIp4eCBSUY5lZRQJdgvYslki5WPktJ+JS3d3Upzxp2XGlyKyWRvY3M4lOD+DyFLv8rInyQzi5xK57U0A18mIjRP7/edgon1x0U4En/t9kbNFyHUIrKt0KJLYJ4j923bj9LTRvh2+E5EQvWoFwOSlyevITfasU3Uj1c5Z9iZyTdKUaXgCyxRNkrlQOFzFkWo4HAqRqC2PDkKvoujS8d9yyI5hmB1BiaZUejAElSovdRiLHR8Wy7lcufi7RFFelRKCEY26wFPlyiAWGyCxwR8vX1BrwJhO7VLxVKl4VKlUjoolXuVS68A7jdLgKqh4L8LzBZdBqQGfQL3a4BozqPXw61Gb5heWFheXFuZNE+C7SajR6TSfv8M/MrOJk0idk5QAAAAASUVORK5CYII=",
            "^_^": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABUFBMVEVHcEz/rxz/hgP/hQT/fwL/gwT/nBP/mxL/xSz/viT/vSr/riH/hAf/viT/uiH/kRn/uiD/fwH/uB//xSv/ig7/oRf/gAD/hg7/jBb/wCb/fwD/jBT/tB7/ggH/gQH/mx3/oh//zDX/53H/kQz+1Uv/h1H/2mr/ly3/kD7/nCX/kkf/mjf/ryJoY1f/1UUiIzP/3VL/2k1bFhL/lgz/iwb/oBcdIT3+7H3+s1j/zGD/tzT/lh//kFXm0HdPUE/RvFv/oyn/xEH3tS//pzLOjTn/1F93RByYYiOnbyX/s0L/0z3/o1P/8IT/6nh+akT/5mr/mhWMgEv/31naznj/qBbv1Xfnqlf0tl/DokgyNUGUgUT311W0omeXj1wqLTrVd0fpozjqkUGdVC/try//oz45Eg5FDA9oHxjcqjyKWyT/wF7/4mCKOx//nQ7mv2bmv2WXB5hbAAAAIXRSTlMAKv0HKtAYEv3P/umysmr7NzdZ6J42amvPnllanuzjzOP75XlxAAAB+UlEQVR4Xm3SZY/bQBCAYduNMZzmGM3sMDPzMTNj4f9zZ90ovV77frL8aGZla7EP0XgohNPYf6IiS+xXiF2KUJ+IDrAMzw8hnmfYwF/juJ/hh07CzRnyjB//YyEWUXzvHdqLI2ZDszkwCWjbDVgCnc7Sfua3CcJkIgi/lfHTLgYY3kEGlMsBI3V4JoCMgqVwXq0m5NyEWg3OhcUUYITjncT5biy2mxtDOfR0nnB4LgK4Cluls1g2G7tEeImeziTYuwqfzwKeXFUv7Ozp/ni8f5q1L6pXJ4AsjeFertHYsn8qFbuKsGpXlB/2VqPBeXFszlssDo6O3wrKYQUdWjlUCm/HR4Ni0TuHcDAajfKgwgQSwPLwYoAQ32w9GOUyaEeB37CtdMDKZeOhtYlj9EbdNGT5up0vdN6hTiHfvpZlw6xvwD+K6qYmy3ePry9SIh5PSC+vj3eyrJl6FL5zJahqmnHbfUp2e/1+r5t86t4amqYGVwCpxZKqmq2b3nPS7bl30zJVtbRIYdBCsKTrdavZ7n+D+u2mVdf1UnABQ9E+cSeTObAsrnl/3+Qs6yCT2RF906viIcUU4mlAKZH0YNPCZFpMfZ+VEtNkGJvl8RFpUUy5iWKa8KG5WfQ8SRBpN4Ig5z/fbGo5Sq6vra2T0WUK+7cvtCcc9nwc+gW0oHkoXrM4yQAAAABJRU5ErkJggg==",
            "-_-": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAyVBMVEUAAAD/xyz/wif/viT/sRr/iAT/nhD/nRH/mxD/sRv/gAD/uiD/uB/4xDH/uiH/sRr/pRP/igX/hgP/hgT/gAD/hgP/ggH/xCr/wCX/vCP/tB3/sRv/pRP/gAD/2Ej/3FD/74L/6G7/7Hj/1ED/yzL/0Dn/4Fj/41//rRf/lAr/th3/5mX+vCLQmzT/pRLAs2n/nw//iwb/xSosMUv/mg2bjlRQFRFRExHixVBnXjrTu1bt3ny0jy+ifiuXdCmSbyjrtCl1RhdSHRF4IEbGAAAAHnRSTlMA/v7PKtAUGBCeKjdZ9mrjNllqsjf76OOysevrzJ4BmTTUAAABkElEQVR42m2SBVrlMBRGk9Tdi4eBJnV/htv+FzW3gnPqPd9/o+gLsmgYooz+QDE14ciyjgTNVH4o1RYw4zxJOGdYsNWvTjzGLKH0EqA04fhY/HSGwDiYNANS8JwJxkdOgBio6gqoQNOECWtWPcHv7hqOq9nik6Vdm/DFXc8sWU7seQxL0cn9Aya7FJ5GZBKWLEFQwBJNGDFBaiNPLm92u123JDt4vYG6owZzJmBO6e0G6CbZTW+3lHIsyEh0ME/oXQfcT/K+A+6mmXBE5J6Of3doPHWRe0YYn8cJwwTWcXJGzlwoW2PGf8wQOFxDWfm8JO82q6rs3ZHyXIah5DUZGbeah8en5+enx4fGYmwkdQ5DQV6flzV5eX3b7w/Afv/2+kLqMu89kIrUgq2bL9TgWklBgF+0+aTJOGI8jmRSeVv4aEINir7Nwa/koPoiUNGMLhXbvgVyoAX6bSHpaCWUhmK73fYz8FIMUog+0INoKD4YomDJrai+FA0rkeSrPze1dyHFgHThKegPZD0MdRl98h/z3EzQet/AXQAAAABJRU5ErkJggg==",
            "o.O": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABTVBMVEVHcEz/sBr/wSX/sRr/gwT/nBH/iwj/nBH/wCb/fwT/gQz/hgP/xSv/vyT/fwH/gyD/iQf/uB//uyH/rhj/sxv/gAD/vSP/ghT/gAD/uB//ggH/gQH/jRX/nQ//rBf/th7/xiz/zTX/63f/1kT/523KyLr/nBf92U7x8/TS0s/f4eX/iC7/8IPztCfQv4vV1tX/uCL+7H38pR//0j7/iwb/gT/+3VrwtkHyu0L/3FLj5+r/lAvN0dXav2vFxsno6+7fjxsuM1H/kSfoniH/qSv6rhz/lTvYyIX9pjz9uy/y4Hrrxlnmvk7X2t/prylZXG3/d0P9ohrksmp6fYuChZBsb3/4+Pg7Plj2nBX/jBGrbhZmNxGVWBpUJQ+CQh/mpC5OHw/YdgP41WPhiAzn2ILr13HWy47n2YfyzEnax3LKuYHMu4X/4mDYdgWKRiAK5sCgAAAAIHRSTlMANv0q0BgCEs8qsvvosjf9WVmezOtqamueauzjz57j4yAobPwAAAIYSURBVHheZZNVc+MwEIAdQ+wkFyyzZOYwM3OZmfnu/z/e+pJrO+33oNmdb1ar0UrEJ26Wcrko1k38hAlHuF8AFwkz3xQ7zyGMkwDGiJtnvzrKj3BSUJR8XlGEJEZ+6tO5OEflM+9AJu9ozvVRxyGrWatdZUQgc1WrNS3ETWtZf/vuN3CT44HcjRPftf2Tvkuk1dzM5rLZWz4e52+zEG42LXLJcQyHkgL0E0U+bppxXhShr5BEHAMyTGJBGZZfHhzn2IeX8lARMBmGe4kg/PwqRTXJnkhb0qLS6zNGETfBziD8Nj48PFS1R0c+aiok4zeMZliC2kAjTa0c7OmqNDDNgaTqewcVVRuhDYpwzaKyXt06qu+r0SfTfIqq+0f1rapeRrMukGRZL0zkPc/fg6zXtwp6mQRJrZMjrQrbRqvSQBQHUiEK21a1EblOwYFifXtcAErdd6Bb0iEe2/0YHMi91o7l7EqpJHWVPKB0pVKpYudi7TUYe0hOtHq7u7tDGKYgwDKEpNdKyCHn+lYbRjrd6fURwgBC/V4nnTYaqwwBLATT29vpTitmbQJWrNVx8uDCZGTeoGE05MTp2cX19cXZaUJuGEbQO30qHvqkKMvH55d/gMvzY1kuntAeYkqAThWL8k7iHztysZiiA8QHHq8P9H9SPi/UfcLO0b7UFB89x35/1KFFemV5eYVeDDHET9ysJxDwfP0OfwE3iHNYYO4TSwAAAABJRU5ErkJggg==",
            "O.o": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAByFBMVEVHcEz/tBz/wSb/wSj/jgnxfwv/hgP/nxH/tBz/nxIfLEMkMUr/xy3/hgT/gAD/uiH/uB//vCL/hgT/gAD/ggH/hQP/wCb/xSz/xCr/gAD/sxz/wCX/gQH/ggH/gQH/iAX/vSP/jQX/lQr/vCL/tR3/nQ//pRP/rBf/th4cJjoeKDwjMEf8oBClcCOMXydQQDb/ogA4Sm6dfDg3Sm//0z7/qxb/lQr/zTT/xSv/pRL/2Un+rhn/1kT/6nX/208qNFH/ohH/yjD/nw//jAb/527/31f/7oH/kgn/0Dj/7Xv3sR7zxj01PVCkqLH29vZMWHDlriMzOD2beSjl5+nBxcr/mQzvxFD453/jlh1YWEY4QVeNkp/b3eFATmf7z0Fpa1voqCD/5mj/tx5pQRlFTFv/nA7/wCV6SRf+4V/BjiLYcwDy0Vnwrh7i1Xbrqi3jqD7yujCDbS9VXGI0P2RkbXpsdIeXnKfZdwXvqydgJRfVcwGJXxreixbImiWYlGf33W6tlUHi5ehYY3rYvE/MsUSIgljr7e6qiSjOn0bZeAbT1tu1r3Puu0doJxjgzGZvZUAfJEKfiT++fiSShFDYszTcfQd+f4mus7vhJ7JRAAAANHRSTlMANtD8Aiv9FioQVvz7sjdqWcxZatDRnuzjnuuyzOzj0LFozc+enszj4xM+8vfwsXALrOX50ZUv6AAAAkhJREFUeF5l00WX2zAUgFHFieO4DQ1Ch6HIYKYgMzMMMzMzlrl/t7Izbabtt9HinrfQOxKopcF0KpUO04D/w8zNSGtLSyvSbMb+IdyE6GkvAfPSesSE3zRdu54mBE6CcQJB69t1NVMhNkKQXK5JmMslcYQNUf2Zg8ZJrsmhIadzKJ3dzc4v2pDrWbzn2pyiKDqz0xtXG9+z6h5cQZPaK1TN5/OJ6YXLy4X5QUZtkg3rh4NVc7vdmberkcjy2Qlh68cgmtW0UA68g6Uz7sx+aS0UKkSWT2m1Ge5lgPEGdq+2t6enr2bcb0uFRDgcTh5XAsyABmB1jLe8ODUyMvJl4SBTWT06X/+RDP8sHS7WYUD3gPEK3GdL/tNX0T03uh4OBYOjiWIkn3uFAtUdhia4Q8uKZd+nYMGyMlosRizB0kuI4zavkK4sVz6I4lxuLfFmLRI6T+Y/Xiy9Brr74wxUaWYSbujgLBg6Oiom3qzG9gbjKwC7NywrwSm7PcnlC8lk6DgWj87GLUBzl5eVllmSZk5zsWAwBs1PPrUAUG+FWuVyORD4drG0FJ8a9PNPnt0GAOtj+WGZ93Ym4G13pqLR6Kyft/Y9hwh6KZaE7J/Yeg/bmpj1+3nSSvXekhE3UHaWJPnNeaVNniRZO2V4oSBAuz0pu5VlSSWWtdpTnm4UVBEYmxxUamxszA6DR4pyNBnBbwSoQevweCglj8ehNaCghgBvaNRqHUpabWMDDmR8XHvU9W0dXZ2dXR1t9RhQevjor++AGo3oze/wC8xNp/6ILP2ZAAAAAElFTkSuQmCC",
            ":|]": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABRFBMVEVHcEx4bHaGMz3ihwCxubimrKxwkpZqi5BIZWxHZWx7hYR6nqLqxobKHzzPVQBwk5dhh4u6EEmeCTnMHlq2aYqEcn+Kqq2oiY9hgodefoSSYHppi49HZGvzxgDJXTTpvwCYNle6EEjqTYTlQXnnOnqsEkW5wsR9mJqfbkSNjo3ebwDFlYCymE3MTgDTcEHNtGPBOgDut2HRUgDppmLuYJvuYJqSuLqVvb6Xv8Clzc6awsOdxcau2NiozM2iysuRsrSq1NSrsrSgx8ixuLmKrK62xca/yszP19i91tbV39+x3NyApag8Skq7wMGXoKKLk5aes7RyeXykq66/6+o1PkFWamrF39+p0NCmT3UnMDGz3t5GWFiZpqkoMjJXa2tyj5CrvsCAm52Ah4uFn6F5k5aoVnvJHlq1epzeTIO9i67jNHC45OMTWBhRAAAANnRSTlMAJw/gKYFz+klJTnf0J7BrKrJf7vWP1KNit7v3QcmLzeqIe1KH7E7R8ovR5u6+u+5E85H51dXDZu6rAAABt0lEQVR4XoXNVXMbMRiG0c8bx23Xdc0Q5jKDYJnJzGHm/v/7yms766aZ6RnN6NU8F4JIavUV8/0rPGX1x9zIJ+6Jxn3+Nre2trLyPhWFrc3xg3/34SXz5ePb8uvxL5tbkL/fgEw6mXxz1rId5/Tw8uSilEymM7Bxn4fsTi5TotIjtJTJ7WQhVoQ07XZ//6XbpWkoxiA+DwkloLI38KjCUG8wGNJAScB8PIyCYthm3fUNQRDDIVNhErkiNrxOo3HoeJh4Oht118BFLozbBST7ervWNH1CfLPZa+u+jAvbo1j+eYdlt9Punesuxq5+ftTuuAq++1WOA1+4vcGiozeaDdNGyDbZ6Dgivrkt8MCvX18RseXUTV1XMVbHwyBX1+s8QC6/SxSkntotCynkYezmc8BkWSQYqQgLRtUKB2ExCyOpRUKFEYKtahWFk5LFFIQSwlAMCewI4T0UEjCNmmJYJw9UQ9FmI1Vre0cTeweIzkZJO+vVIqomRVEMJOtghigFYhT3Je2y3z8O9Y8vAmk/iljTNEmeGkrsiaexUkX/qFYmMbaw9OyRpYUYTHDLz6desMMsc/A/fwCd34HCQqWIjgAAAABJRU5ErkJggg==",
            "(y)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA7VBMVEUAAACxZBPHexvRhSXEeB7ViiP7xT/ZjyDPgh3clCf3vTbbkiXYjiTimiHdliueURCfUQ+lVg/akSXwsCrtqyrhmijwribvrSb3uSfysCTloCf8xDXkniLNfxvakSnIeRm5aRSaTRGpWhCnWBCiUxDooyPztS36vzD8xDX8wzH5uR6kVRCjVBCeUBD/4Ij/4o3/34P0sBnmoCf/2W//3n3/zkj/5Zj/45L/3oD/3Xr/0VPqpSX/2Gj+vx//yz/9wSr/1mH/23XvqyD9vBr+xTHgmSf/yTfIehr0siH/01zXjCL5thrCcxi9bhWzYhFxh23YAAAALnRSTlMABAoTJhv9Q4Yy/l7Y2OyOubShmdW13emHx3my8Vdp7sdU+DOi+vnkxZtl5tt0tzAq6QAAAW1JREFUeNp9kgOi5EAQQMe27ZWinth27n+cbXzrxXnNqiq9olItfUp5td58qstbI5pUPrNTxdw1v5Bc6xNXm1me+okstzqW6Xc/lvudokS9+oeu3W8A49vh4wn7HWCb/Q87VuYdQN0bi3al/F52v2u0SIPGj5/bX6vfzfrLJvVZTAuCKFKMJMkgbiwm7We5aVACRqQhlO2pcxLlaq3WXAAkINhRmqkO2tjNl8tlg4L/iWAk2TIdn2y427EsRWMoAsNId1mJkuOeRJuXZVu+S8wzd94ZNPEG17ymAWQRd4Rs8xHXxVPOPF6JsYZ/baDFvOFFHFlPva97Aa9YGgBAs6xY4QOTTY6tMu7ZY13d9AweYgRBYBhGkPrQISonjk3T1NUhLgI+U/UxOcPQ5zhOddgnHK5Xe5DnS55lWZj4sAEEShXtg1AZjiB/ihx6NITKJZMXOSlDrsO/lyLPwjDM8tP1XXnVzsPbGHL79zjhf+0iSwKEAoLHAAAAAElFTkSuQmCC",
            ":)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABBVBMVEUAAAD/nRD/nxL/wCX/sBr/mxD/xy3/hgP/uB//uyH/xSv/viT/sxz/jwj/igX/hgP/hgT/gAD/ggH/ggH/vSP/uB//th7/th7/rBf/pRP/lgv/iAX/hQP/2Ef/0Dn/1ED/3E7/3VP/yzL/42D/xSr/lAr/31n/7oD/8IT/pBL/6XP/6Gz/7Hr/vyb/tB7/rxn/jAb/5mf/nw//mg0wOF7/uiCwhCP2tCn/qxZrGBZAP0NLSkbOuVksLUPw4Hqckl/twzqjZSZuOxTKjS2bi0almlrszlJERl/nylGFgF7pzlvt23SMaSE6Dg9bMBPdsjFVFxRODxBZIRGEPyCycSp6ck97c08GMZEdAAAAHXRSTlMAFirPNhD9/Vme6LLrnllqsjfO6GpqzOPjzM/Q0VQ1+7UAAAHLSURBVHjabZKDei0xGEXHOEal4Ni2PVP73vd/lO40ldYI68uOfuULqmYYmqr8geq4egDorvPTm3u6laaUMUrTlr5nfnVa0EozQjgghFErqH06Q09TwlP5DMinOKFp3fhop6MZVKtVqVRa0ISldU06M2hJVykLpLWCst/9LDLzGagqKJcrmTySs/vCqTJ0Oi1XC6Bank5lsArp1NKMp7bj2a5QKBYLhd14tk1xlq45kK5I9Sb+bDIvgjnexp7IdZF6IOT5uNt9l93u+FzIA1XRDrMUsf+63QukIvei2/2PWJo91BQjlMWA+OVicSUHdLVYXHIMKBsyIGtpiuFimnIqWAYMlqZrkNpRLQsrV+F9heCytSNNUY/r0n6urXT1Y0w03OjB9q+X0ICT5XUfrtcIY56RkrD9m9v+3ZLS5V3/9qYvXCkCqZ6UGvXeYHX/8LgGjw/3q0Gv3iidqAqI5krDRn2weRq98rQZ1BvDUi4qtyyWa5eGQ+jn1eoZajgstXMxEwpop7lOu1RCOmjgpd3JnX4USvysmet0Ou12Gxdecs2z+JcCi9nN3AdNO6Z9K81owrabr9h2Imr+LOpIOJEEiXDk76LX4nHtq3kBlp1WxdtFtlQAAAAASUVORK5CYII=",
            ":D": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABJlBMVEVHcEz/gQD/oQr/vx//mwz/hQD/ngv/shP/wSH/uxv/uxr/uhn/hwD/hwD/jQD/gQD/qg//ngf/iwH/tBX/pgv/shT/cQD/gwD/uRn/gwD/iwH/wSH/xSX/xij/gQD/0Tb/pg7/31f/2kf/63b/zC7/yCj/xCP/1j//lAL/mgX/sBH/uxvsy03QjSOnqb1KSUY4Pljj6fX/6W9CQD8uNVz/5F//jQHeyF0rLEH/3U6xayOok0z/6GijYh2ZhUiyo6ToqR7TwWerl5RwKhJnT1tvQTzP1+vqoCH/8ISsoFzx4nvw4XxoExGHMhi+qKqjm2XquSl1FRGEOBnPnByZeH6FW2Dbt0XJqEmqss9dFxx/GhP4+/+znHv211fs7PBnDgz/7n16FxJXpg5jAAAAH3RSTlMAKv6yDtAWKdBqNllq/gI2ns5Z7DbjAujOsrKe4+yeptApLQAAAeZJREFUeF5lktVu5EAQRT2OacBDSWYn2G1mDzNjmDnL//8TW922MqvkvNjS0b2tKhWzISuIqZQoZJmvCOkD6fDo6FA6SAufFJeUDB0hy0JIN6Qk978TtwxkqWoPUFULGVvixqUkHak9RWkBitJTkS6lPnKSboFrDYf1+nDYAmvpUpzloJO6ugbUqYXm6N2kiazI/QEiayEzSWcoQ6midDrgTk/BdjqKQorJRGlTh+Cg0T0DB/as0h1AVDfTsJc8afUb1W7lnMjzSrPb8ElvPgutBpXNZuWCyItKs0mlURYYcRekqoyr1Zuo9qZaHSsqyF2R2dk26ZSzmRZJbTajk5rbO1QisLACDWbRNFgDOEQk1HrG7Xjw8uz7Pym+//wyGN8aHtQKBc98WIbhZP4jZj4Jw+WD6RUEppR3venqdV2r1X5R4Gf9upp6br7EMEXW9UbLcF37HlNbh8uR57JFsr4CdqeLt9XT43xyfT2ZPz6t3hZTF0MrkHGwGyx+Ey4v6WcRuNjJRCeyb7M4uL/7G3N3H2DW3o9PJcHbDj7pX71Trvon2LH5BBOT49tEB/3RqB8Q1eZzzAeJPblt2w6LMevYdlveg9wGLsPLcpsiy3yG+3zUxWP+G8AfFwXmKyUhkcslhNJG/AOYGG8Vkcm/kAAAAABJRU5ErkJggg==",
            ":(": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA21BMVEUAAAD/nRD/nxL/wif/wCX/iAT/sBr/iAT/uB//uyH/uiH/viT/rhj/sRr/hgT/gAD/hgP/ggH/xCr/xSz/tB3/sRv/nQ//gAD/74L/3E//xiv/yzH/7Xv/zzf/0z3/6nT/5Wf/10T/42D/nQ7/6G7/2Un/31b/4Fv/tx7/pBL/lgv/qhb/iwb/rxj/vCL/kwmllk8+P1EtM1L/vyXCrVElJ0A3PmT0yDx2bU3lvj6ugCiMWhzToCtlMhHpqCVhWT+chz2QhU+1mj7t0Fb1z0k7DA5BERFuNBvMhRg4yViqAAAAGHRSTlMAFCr+z9A2YlmearLM47I3++jj7Ovrnp6HrtAhAAABq0lEQVR42nXOBZLrMBgD4DAWl2O/MKfMREt0/xM92e0Saeif+UayhU8RJU2TROGXiIapnJ2fnymmAf9KlkKo6yEuJYr1hSWbuF6YOkgaei6xpQ/TFOqFTpbnUZTnmRN6VNHee7DUyaIgSJIkiHInhZ66ok1geRQkPnJSYoscLdnFJrN/CFMsu7LFi2w0y7nd3HDNMzbMqgYvApkxBfKqATTJcdWHcfWPu8TEau0vrImCVAemzvAw9I/o43RSYF0StAuCD01Ho9n0WOUnPkQuNEG7lKkb3o7nszvfx1/9O5y3oUvlSw2zfVTvx/PxMEiQYIjzHsU+ZsVaIRO6WI6WD3mE5A84F5TIBT4kXPX6E+jqMXV40scVbNLvXQmCoJe9oo8ydVfrzWa9cilq/aJX6kBRhRYTmWx3T8/PT7stkScFTMUqqlXZAe93L+vtdv2y24M6ZYUiqzaqGPy62ff7/cl+8wqKqwaKLJI6iOOy7JxSlnE8UCXhlKbaHVTxe6pBV20K75Eare5gUPEMBt1Wg/XeI+pqq3tKS9XZe1/5Wm0j6vU7fXWp2ZQ+y3/w80kzMuR03QAAAABJRU5ErkJggg==",
            ":P": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABF1BMVEUAAAD/sRr/pxX/nRH/mxD/xCr8ggX/qBT/wSb/uB//uyH/xSv/uiH/viT/uSD/sxz/hgX/hgT/gQG9Mj7/wij/th7/rBf/pRP/nQ//lgv/jAb/iAX/hQP/gAD/gAHSSBWiJC6yKzexKzahIy3/zzf/1kT/lQv/pBP/31j/yjD/2Un/5mj/6G7/xiv/3FD+0j3fw1I+QVdlEhnJOzPwxjxZKhOHfUz/8ITZS1n/5GIwN17/4l//rhijJCz/wCXw3XHjsCi7hCI/Fw5BQEFSDhVRUEr/7Hr/uB7YQE6OHiXBLTpyaUPo13Kmk0uwoVrLnSepcxcwCAzZlBxtKxrdlSaeViXykBz/7oDnZ3XiWmhlPBMiJD//63Uj/5yMAAAAJHRSTlMAKjcYEPv9FNBZnuhqss7rWbIr9Mzj48yez2rQ0WrQolnQ0FlKvQpqAAABxUlEQVR4Xm3R5XLiUACG4Si2QKFQt5UjURdc6+6ycv/XsV+SsmV2+k5gDvPM94McYamiKEliUfgkuVxpf0HtSln+j5RqSdWJi4iulqrKsok1lbjUcJBBXaLWxA+TSrpLHUcbIM1xqKuXpH87mAEyTcsyTbABfd8qtcx6pvUHWWYv05qSYVUlFDvYCYJiS4laTU2u50PYK4Lm07oMLC+GsE4HupiWgRU7Rww7CNMc7QreWT1DL0mucrxKEi/DelEQ14CGc+n/vszwJMHJMYBroiCt2MQ1vEO/fzh5RZP05BkusVck4FgnNDru948n6X+ZpKeIEn0MFNfHNl7ete/fmBYyb3z/Gi/QHq+LQnHjFEqo52naoNcbaJrnUQI73cDVbg4zzS8lv5bMhpu4kgaHTme30yhyURRNb2dTGG8A5S3o3f18Hse/UBzP5/d3sC1ZQNuMDx/io6MgCN6/4ochZ9v5lTUZ57PH4Hw0Ok8/weOMc9ZUQGh1hzH+9Dy6CC/wjJ6fOGM7q4AsaZcx9hKedc9Q+IIfu9LCsG0WCoWw+xN1Qxyb2H2k7O0D3xBwf08BLCc3DlqYdlsHDVn4pK/fWq3vP5bgL6rybGUg3ywdAAAAAElFTkSuQmCC",
            "=D": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABTVBMVEVHcEz/thX/gQD/lAb/uxr/nwr/gQD/shP/wSH/hQD/hgD/uhn/hwD/vBz/thX/ngf/iwH/tBX/ogj/uRn/vh7/vR7/uRn/gwD/iwH/xSX/xij/txj/ngb/rRD/gQD/ggD/gwD/wSH/wCD/0DT/yCj/1Dv/iwD/2kj/3U7/xCP/yy3/lAL/6W7/52bz1VM0PF//rhHQjSP/vBysqLP/5F7/mgX/2EP/31P/63bj6fX/4Vj/1kDpoiCtmE//74H/8IWmZR//pA7bxFhDQkU2Njz2530nLlVVUki2qWP/tRXmxkv521vOvGaslo1nT1vSsEekrclvQTyGNRj/7nv/8IdPSDjs3XkdIUMwMlBbW1S1biTquSmZfj7PnByZeH5yJxNvLhLprR7vzE3u8/yFW2CsoJRdFxzP2vHQ1OW7pKZnDw17GBL7/f+0nHfs7PDlw8hoAAAAI3RSTlMADg82NhQqKdDQGFlqnhjOWez+zmqyarKy4+zjnuOe4+yysp5Z+QoAAAIDSURBVHhebZFVc9tQFIRly7IkQ+zYYW7vFbPMzMxhZir+/8ceOanjdvI9aeab3aOViDko2uOhKeITFvxBZn1jY50J+hf+U64lBsuIA5CMmSXXvKO/YsQlBREQkhzCX+gP52FkLimmsnEgmxKTnMx4ZjlwgpiNa5qqqlo8Kwpg37OuZcwJqSyoNKBqWjYlcHj57e6KhKCzWlXTB0BarVahGUkr0w1RGYKFWr19UAQO2rV6IeUUO4v8EsqJ+tHpSatRLJWKjdbpyZEu5pDkBxl0Wrv1ZrN2XAKOa81mvev0BuGbRTFIvWUYZ43S4WGpcWYYLR0kjlIEvYlRDm4aRhtaobdtGHAzh/AmTZCLEoKVvX4//fZC6X6/B0uRtEg6UoaoGNf+TtHiTlB2JL1t44vLwmjUvdf1Xk/X77ujUeHyAtvbNEGFOtLVcByLPQ1+TRk8xWLj4ZXUCcGv3TLtu8n4JZPJ/J4CDy/jyZ1tbsHOcKRjl4ex18zDzykPmdfYsGx3ImGQvlDFzN8+Tx6vB9+AwfXj5Pk2b1ZCPgIIJCqmdfN9jhvLrCQChIN7TYmY1v6PGfuWGVHW3MQUL6skKvnyu94v5ysJhfUS75As72jrvFw+txzFsyQxw7vK8wp4IKEoPL8KuQ/cAZafwQbcxL/4wjvs7t7eLrsT9hGfQHlJ0kvNiT8aMHxNf4Q1UAAAAABJRU5ErkJggg==",
            ":o": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA4VBMVEUAAAD/nRD/nxL/nRH/oRP/sRv/viT/hQP/uiD/wij/xSv/uiH/viT/sRr/pRP/sxz/nQ//hgP/gAD/hgP/ggH/th7/igb/ggL/gAD/gQH/yC7/zzf/1D//10b/2kz/8IP/3VL/wyj+31j/7Xz/uyH/lAr/41//shv/oxL/5mj/6W3/6nT/nQ//iwUwOF7/qxZEEhBDQUPqzVXv33iqbCBTERRyHBhISVLOuVkrLUOckl/XrzdlFxfynxt7Hxmbi0almlp6ck+FgF6uii2jfykwBgzDfRuZUB/EfileFBVeFBYJEq7FAAAAGnRSTlMAEioYWZ7Q0TfO6Gqy4zbrzmo3++jMsbKezD7SqJsAAAGlSURBVHjabdIFshwhAATQgXV3g3Fl3V2+S3L/A6Vhif8um6pX3WMYf4TQfJ4S44uk0plCESlk0ql/iJQKjHMT4ZwVSn/VaZlx07JVLJOzMv1t+SwDuX6M+C6YZfO/etJAw+FoNByCpeouKWsbjZGR1jJRWPK4tgDRyr2StBRGcb/DAeY40MMB98VwCphG0fYflsdHGPRxeXzwbVTTwIxcXS33x+Va4nqPq5XczeBxOgzN1XI222uczZYrNFmHGLTCOO75NJs932efZ7MnV2KFGtWax03snk7rO65PJ6ya3KtVJaqqes0gUC+Kh+UMiNmQKfXBCN5SGmchZkk98aRa4PPLy9n31adnXlIneJV56GEZ/Lp4e1u8grDphfOM/AgiCUNZPi9UzrIWholIA1N1kSjebFU2ihJRVweiEYm55M23C/J9I2kuooYhQ7rRRMznyftO5T2Zz8Uk6uqjQnPRZCLE9eOGfFyFmEyiHDV0mrlpBL9+bjafV0g0zTU1yW6vBcY69kCtHnq/Qxq51lSnlWuQ/w51f9BGBv1/D7Wu02aT/ln6ARv+Ta66wWCeAAAAAElFTkSuQmCC",
            ";)": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABCFBMVEUAAAD/oA3/nwr/sRP/ngz/wiH/mwz/hgD/hwD/uhn/vBz/xib/uxv/uhr/tBX/iwH/hwD/hwD/gQD/wSD/vR7/txj/rRD/pgv/ngb/lwP/lwP/gQD/ggD/ggD/gwD/3U7/1Dv/xyf/2ET/6Gv/0TX/yyz/8IX/ngb/41//31T/63T/1j//4Vj/zjH/2kr/7Xv/lwP/wyL/74D/pQr/jQH/5WQcHzb/sRT3rh5GRkX/vh7/uBf/rA7zwSn/kwKlml0zOl1wMw2LQRnv3nbPwGnOt1agaBpeJAnu0lgzM0flsiTMkCOdjUx3az+2nkPqy0zbzHNUDwmGflCxhhw8CgZ+UBTYmBS7gSQqfSSrAAAAH3RSTlMAKRQ2GNAO0f5ZnuhqzuxZarI2srLj48ye0P2ezOPspYls3gAAAc1JREFUeNpt01OCxEAARdFYLYwZt23bFva/k3mVkfr+nqBI/YihWZZmqAtxssK7EK/I3B8S3LyetDRkJXXeLfw0+kpPakZKRSlDS+pX9LexvK0ZajQRQYmoamg2z36951giUjRRMZJw9ONd4frdTDNGMt/1WnDQnbXwzQgojYjiy1bWTYzz2FoqmiiasXQOpWNmMRFNabaHA8rZZBwvEgshKHk1nszKQEW38MfJot1/x/5gOMFfLV3BmnkIRpfT0i5HrD0tlaqrFNDDUPSNbsVT62pnWu0DByWnFfCGplgvWRxgp0q+u6lW24N2dYll8rLArI1XF51O25nKYIPxTIaWnQXStzWd6HBYdFYIE1FTcbxYu6Up5q6edZSsbbHorG3csvVs/Q5be9+oQZNW3IBHsSt4DVZr3GOevny5/s5aHGlWcz9q1urlvA/IPUDrtdps1kSz+Wh8OFZgDxyF/I/5Rrl+Go+7aLzdds+VciP/6H/fskAmnG9U5qMeaTQnFM4EBBCixVYYXK4gIvlwuCV+HZSgWMhkwl9lMgUxSH1FB6RCq5VxarUKUoC895XgFyWp4CRJol/4e6h9T88vr68vz08+jroQQweDv67DG7rAXeYj/DN4AAAAAElFTkSuQmCC",
            ":'(": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABU1BMVEVHcEz+gAD/xCr/mxD+hwT/nhD/sRr/wSb7ggL/viT/uiH/uiD/nRH/uB/8hQT/uSD+hQP/uyH/vST/igX/pRP+fwD/ggH/hQP/nQ//oRH/lgv/xSz/pRP/tB3/sRv/rBf/gAD/zzf/1kT/3VL/xy3/6nT/5Wb/yzH/wyj/2Ur/4V3/42D/52v/6XD/rhj/vSL/ohHozFWVvrDxlhP/mAz/31j/7Hr/0z7/207/jwf/th7Ao0O3qFvthQbGexKs2Ninz8lUUkUmKz9/RBPTkxrvwzk+OjTluTNfWD6bikn721a35eu82tX/8IT/7X7/74H/pxSTfTYaJELz4nbfzm3BsF343F8bHjNjFRdTcIKtt32mvZ9fOhGZw8FACBFdY1l5oLrG5+2CNB0dIDPyqhwfITO6u3itm1H0xDGlu6SgoXCqyKNgiqXl129xdlycsZO8hyO1PrbbAAAAIXRSTlMAKvsQ/hQqz8+yajcYWbLOap7jWTY36NGe+8/szOvr456SO9zQAAAB/ElEQVR4Xm3SVZubUBAGYCCBqEvXBXePu/u6u9S9/187kOw23SffDRfvmYHhDLIQnAiFCBxZknAk4UtubCR9iUj4DXmCPownCxCSx3xBz6IRAYwsUGIRIlIFEgsQ/yzk4wtUkc5Jsizl6CJV4H2h1zowkc7JnALh5Bwtgs5rPQHGNUVlIariKhPwuBjESKoIdSqbh7Aq1BYpEgu6M8ScphKnsPn9g4P9PKtwktM4FgaMuIUSp4Lt7YGqnOSWRgATwguCgb6gkIB/FmOWIxPDESIJKNJuWwfdtrQImCSQ9JYwm1JhT5wPOmFns/DCVhpJbwt876hijs+rw9N8/nRYPR+blaMeL2ynEWJHZwb99/1hq31xpqpnF+2HX62P/QGj7xAIvlkWmEqrfXzcbpmybD5cPT7+uKowQnkTrnZV0wWmVxmNqiZNj3/e3E2fmpap69oqzJla08rApHub5nerOZ02rU9lbS0FGF43tDKwwDD8l8G11Ww07qzrD8a6uxDxrKE5rAvd29uR1ZhMmlbVzsZnVxbNGoeHjnfu7zvVxtOk8btrR+ergq6UsoYBBzqXl53u55uv3/7U/CgyTwYUYtSfn+t2t16v1/wZ5DVo1FsqwQHbzpbsWq0WRf9bzfiK1+stQeDhj3veLnVq1/8O4t9NhZElwdFMBsUX4C/m2G0/HAYfRAAAAABJRU5ErkJggg==",
            ";(": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABjFBMVEVHcEz/xiv/uSD/xSv/gAD/wSYiwfz/nhH+nBH6hQP/uiD/uiH/uR//sRr/pBL/uSD/pRP/hQP/fwD/iAMWp+X/wij/wCb8fQD/nQ/+gAD/pRP/lAr/ggH/gQH/gQH/lgv/vCP/sRsetvD/tB0NoeMsxvz/ggL/igb/vyX/wCYPre0duvT/tR3/th65fCYstuPzkw+siET/wSf/4V7/2kv/yi//52r+6HH/6nP/rhj/63b/7n7/pBP+tB/1uTD711Tekh31wDn/0Dj/zTP/uyH/7Xr/10b+5GSllk/RbQL/nxD/3VLbfw3/kgnprTjyz1j/7oH2y0r0yDz0qiTihw3fu0RZm5z/0z5ivvH/lgvrlRLYqSr/iwUtM1IlJ0A3PmRAQlD/31j/8IQQsPV2bU1oQxS9rl6QhU/HrESchz3moDFRIRBnIRi1mj6hXCBjJRK6hBzpoSw1y/86vfY7lrwdoN+PoW1SquFBCBCISSFhWT85OlTRgRSNZhuNZhpymYDCtlW3n0fJfRV7xPFa5GElAAAAMnRSTlMA/iroKs/+Ehj8N2pZ4ynONtE2ag3Qnlmensxa7Mzjz7HrOet187KxsrJRkZ6ez8b7s/Y108gAAAIYSURBVHhebZJVc9tQEEYl17ZkSExhhqaMV8xgZuYwM1OZ/nhXjlunnZyn1Zz57iwIuwdhc7ttBPYApHfI8QhwDHnJ/xThGcTDZh0ww/ig55+47RkersdoOp2m6Vg9jD+39ZzbwYBKr1HAWho043D/zYGzVJwF4pYG280SM5AzchrL8aLIc6yWMyA7c9e2BzcNPZnMcWIUELlcMqkbJu6xHOlj1Ewys5/no1KhIEX5/D58qoyPBOlFaiVzVqQ4USqsrxckkaOKZ5mKirwgX6FWRdUolo+CAxvlWUpTKy30GtrxobJBQ6s9CQ3TRhn5CKy/D+antcTHBCdZUuKg1GjYRF8/5p+35O7qp+XtaAGQtqHcteS8H/PPIsaM7S2tLO/wMIvI70C5FzMZNOuHZyMQPVpaWUqwLMexbALKIwhG4FliTEF4uLS5upmnqHicovJQlsI4UsZgRyNCBFW/l6pFWD1Ax4rVEoOjiDACc46nBKV2WWWsc94d1FIRITUOkpyWf9zcXCOcaX/d2vrS7ihFkKdJDAi9qzV+XbYjpwe3wMGppQS5Gbo72furRuPqWj85/AAcnuiCLKeaT7u/yuONi4uN2s9jvawoZf34M6hswI79kU6ns9aSUx0stRgIYl1eOM/Pnd9c2WaHbHbR9QRyXQZeLiy8feNa7OIKhGD8np2bGyCHRyenJiamJkeHSewBCHswaL8f+g3mXZQ5mkeSnAAAAABJRU5ErkJggg==",
            "B|": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABsFBMVEUAAAD+lw7/iAT/wSbrgAj+shr/uiD+xy38iAX/gQH7jAfet0j+hgP/hQP/hgT/xSs2Rmf/txn/wCXNjBhgdaUpOFf/vSMmVcTMoUk9OzpJYphUb6z2nBBPRz3/viH/wCaLZyj/vSP7kwsvOE//gQHxnRL/hAP/gQH/ggH/hQP/hwQ7IjP/lAlXExT/mxAxKkE2O1xJDhH9oRRxHBlFFyJ9bZg8PDpAUHv0zUFTUz/n2n7qrB6ylTL/3FL2217iy1+tZCR7MTeMbSU7SHH/yjD+527+2Uv/5mg7ChN2OUiZdCJjFhf/1kT/zDQoL0L/iwX2pxdfIShvJiVxRFt1VXTpoBdrKS9RWYXzuSZsf55tNENWKTX7rxq4pUvfw1lNGBe5todEWYrIkhw/KjxeOlKdWCKQdCjZry2Yn5H+wyjc0X//0j3uqRpoHh87QEFlaVjHhx7/4V2hml1uPxCDg17/vSL04nVETll1X4agaBrwxDU3GyzEfh1+jJrFvG1Wao/1oBPpliFeIRHx4n/u0196LC9gd6P/7HfbnRx/JCCAUxN1N0TbkSRxT21THSnaiBLWqIWlAAAAK3RSTlMAFirPNjYq/VkQnv1q0LLo/hCy4/GnWQxyOJPJ++uxnutqz+zjzPvM7NH7bJYaOgAAAi9JREFUeF5t0lVv5DAUgFEnGaadMjM3nGFmZqYyMzPzIvzldaJRd1T1vF1/uvKDDRogErFYgoBPIO0D2BcIG2j/2JuGMGliW5CQYkNNjU3SDFM8GHQ4gsE4zM2S/02M+WFyHAocMPsx8fsebHwKhQKBUIjPsNZ3m/rrLfAVCtRrv3BvR6dSOed6cQpNqM4X15xS2dkBQHdP6xtUud1Y2Hq2Wp+3FjZuK/xJa083MC2aGNpUKpl8i/cV6H7R5yuVSgwDA9D68LD+wmBYCV8zJoi5Dq8YDBf6MO7TgjZGz9by+d9/WBbXnpxocXY+l8+vsKyeaQNdI3qymstVSZLEz+/uznEyk8vlMiSpH+kCoj5892ckUozFYvi+1bqPx4qRSJWf+kRAPEgXPZ5XnU6XSR6dnR0lM68eT1an26UHxQBtMS6/fod2aYsrEHBZ6CI/6XBjCwqQsWhyuZjN1ui9Weeh0zm7R9ey2cxyMjqGAKAoeI1JyGI3869itlv4yegtKAAAst7CUtS7Zl+/Mm/H49vmq3X7mje6VOiVwYgMP6R3bLZyeVPqTyT80s1y2WbbST8MIwBSEVy6cPxjqbwpOD2dmUmnOUIFeHINwXGX8+zx5cE36ODmYYbjCI0cCFA1QXG/VrMk+QSRT385ilCjoE40lYL58cDtXnW7bx4pIjUlAu9QzXSKICiK4ygKpmkNChrIVerxVN24WiX/+KllionRycnRCYXs80+PikRoY/kH+Seiu7wDEXwAAAAASUVORK5CYII=",
            ":/": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA7VBMVEUAAAD/nRD/nxL/mxD/kwr/wSb/tBz/hQP/hgP/uiD/uB//xSv/uiH/uSD/nQ//igX/hgP/hgT/ggH/wCb/wij/wCX/vCP/tR3/rBf/nQ//gAD/gQH/74P/xyz/207/wij/lQr/yjH/1ED/41//10X/4Fj/th7/zjb/nQ7/0Tr/7Xz/pBL/2Un/6G7/5mf/6nX/qhX/3VMwN1v/jAb/vCL/rxlCQUW3p1nx33Wxgyvqyk09EA7z1liKfUlHSFaVciiWYSRXIhFxPBjvrybMmDP25HUmJzuWjVaTi1+woVzXrDA5Cg7RoTfIpTnnoBuiSKu/AAAAHHRSTlMAFioQNtDp0f03Wehqzs5ZarLonsyysZ7jnp7MRbGrcgAAAbpJREFUeNpt0oOS7EAAheFYI6yR1rDHtrTCve//OHu61/hLqfqSNI0vmVYYWqbxR2Z0dJxAx0fRT7eTbsylFEJKHrtJ+6tZJ3FFFBsENYqiEp9Ynxa6XBZJt1RApS4pSu6GH9+5XDRArVaz2WyBG4K7b9/ap7HU1myjV5Xxqa0xSStFoq2GtJJihSb1GlL6p9qur7XqH6dMYKQ/XIzHNzDozXi80J9GwDOF3eXo9g4EvBvdLjWeqb/GwNlo1RtNFE7U0wzLifFfy8P6gb3e6hVXPY2V2LMMx6PYHLLs9e5fx7zv9ZakISrUcxRyKRqLh/Gk3cZc25Pxw6IhJFdonQ9ipdi7VhO1sIPK4sG5ZZjpMo15Rei9hagdUEbLaSz0YjhQKkVx9m+6Xq+nj7wCGwwvsM5MfVhW/LjZzp+e5mi3p4PysJ4Bmmml5el2u9tMD8/Ph+l0rwx/RVlW7wz/7zYHfB7HlKrPOnWWNVR2jlXrnX35LUinXmU5G4Qsn1Wr9Xq9o8NDtcp8C6Bz/D6Dv8dY33e+XLBcAH4NFOSsb1cz6wdBXxcEftb+eakzl1d5dHWZ+fvSW45jfZUXW/VUn+mRydoAAAAASUVORK5CYII=",
            ":*": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAEGElEQVR42q2WA9DkQBCFz7Ztm3u2bdu2bdu2bdu2bdvOu/oqNfkvZ23VC2am+0tjsvH2uz8N8e9Dk4OH0opICbQhugdxzRhz3v7XT1NChtPaqOW0Nc5kbYl9WDsT3NCuRA8R14wxxxrW/j1ocshgWh+9vrbFOapdCS0dSiUdTisdzyidyCLENWPMsYa12GD7ZzBStTX2cgeE8zO5pHMFbV0shpx75lgDHBts8fF7sPXR0oon3Z+MCLxAAK6WlW5UcYkx5gwYG2zxga9fR2ZgPPHXoNv1vHSvqbn+BoytgeLzxzXbGHOZicwFu1nNC3K/lUsGzBoX1ESKz+/VlGKTf+pAar6JzMAetnfLQN2R4sOpKb6/aX3a+3upvL6/vHYsKKPHF5rbgMfdXDJQ5h+dqKJPF8pj50otvmF4AdlDG+PbHXkqp1iM0fltJVSmZB7FTZiFsw0F8qynI8YGdi2rXNnSCrFuwVi7e/GFT3zD8HqDrIo82aTzS+CwbrmUOVtpIaCrZtR0wYC3blZMYSN6vtGA9jnw5aQVBixv4tW0OsrBr4GkBqMknvJG3wXWq1vKycDoQVWQk5UrG7OL5sE3DFj2VlgW6a4DPJRHyDpRWtSO6IBxPnegLSCXGJs6vhGpdbqVWpJWgE6EMNgimhXSI27I887MQp92lRDSvuoiKmp0cE0T6W4n9HXToB/uR2pogLDcwC2ppbV5bC0tI62vIKDIOldPutaYjgQK5Jt9SBmscblktckuDcoi/NGlbqBJ6YpkEpqXXZpW3MiAXVDE9ccTlZGzFYApS0Ypfx6hT82SSaMT2ecu/u++rR00jd00U8IdtBZFkeakEEZIQ0oiAyXFxjkROVDGnyz1iLo/qZTQBeTaUbq01utEiRfZ26Kvv8nW9GgC+HG0R+pdyMiBkmac00zUinTSNDzE7SFxBBTgp+QpDOQb4JNYcS17L/b0U05jokqTEwEk/w6QaEkzQBqKSGgKoMBZD5AeAIhToF/rdbwEOho20iOvV9vgUEeAknMDRQCJnPrSBLQ53QcY0K22IUU5BLBfWJ2KEPkTUABG3DO+KkjozvBsaDff9a1BwS0DNSJqA8Tply8IIgb4ampEAeV8OHNo4fx2lBhC5yNEFZEBG+wrsD/331M3P8uBalQ4AUbUFuEQfQklYoBExpxmhBb3G8KFcLQ4cMjjE/0GK+uCOdBOPhKoh+9jDhRNCIYjIwPmIQABcNZwxvZCmYACtj2hv2NrY/tL6qZ8De3iOy1QDfQrjQyIcOQSY1Zvv8g1zzV2VndfH1/W9XmMffczljtS0otDwAb+E7HGwLDFxx9/JtJIRIsTF/wrMcca1mKD7T99CLNPeTmom/eDvKJcYow51vzGh/Cff+qT7s7ePIjrP/3U/wxv3ooMewuFGgAAAABJRU5ErkJggg==",
            ":v": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuUlEQVR42oWTTUsCURSGI/oF/gIXrougICqCqMywrOxLHNI+qCYr1HWbCqKIaBHtWkYQQbsWtZAWlprpWDh9CC3aRLWLwplRY07vCGna1S48MMM9573nPffcCtZK+pt65XD3mRId+UzFOAKqEhl8k4LG3aS/0VBRamFTj8R4WuQpc+9lkrp2qFKgbQOxlcXJBiVi/dCC/iN9O0dSsP04J4KPKvnS/FQcGD120cQkR/s7zkKB+BRJF62EPOuPAM8qe2uFo9pGE/VZe/IW0BNYUGHVmytfCnU+sEp9DszT6qKNLo6mKXPnJjlsISlkekey/rd3HTayCb6DGTL322hzyV5YsjhLuAGCzVNW56vlq75s4M4aRzUNRhoatuRLvhnTkr9wKqfFswVCpmzwu+CmvW0HJXwu/HtIiQzg1K4XOdyjK3f3OgwOPC5oIgXNgrUTRgpTRMAM/L1zNA4WooowUv+fAI8qtOASw+PB3nhCEWzGUgJVQMyKxOzlphBCzsfkeXMdS8QAXgG63oGZH9VGNldBOj5DSnSIkucthBgNnvmYgB9QGTJgGVSW64kFHIIXoAIZiGC9+Dl/AyWLEfwY3fFdAAAAAElFTkSuQmCC",
            ":3": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAxlBMVEUAAAD1wzr1wzr1wzr1wzr1wzr5z1v3yEn2x0T1xD31xD32yEf3yUv2x0T2x0X1wzr4zVX1wzr713H1wzr71m9wa1RvalMvOEabjF34zVX713D60mPJsGb203D71m7ry234zFL50mP2yEdNUEzry26gkF6Ad1f10nDmx22Fe1j50F361Gn61nH2xUH4zlmwnGG8pmTVumtiYVhYWE/YvGphYVnBqmUyO0mDeViCeVw5QU9cW09ZWU/Cq2WThlu1omhgX1SUh1t1Z2lpAAAAEnRSTlMANg6l35r9rbD6nrPX5Pv67sldQHX/AAAAtUlEQVR4XlXPRY4DQRBE0ayuZjBENaOZmYbp/pey0rYszdv92AUxYXVMs2MJutO8AgyFp93aD/EQ+rzYNZ5qm0gs8PN74tofdlgIckOcX155eHv/QOhSAMRJykOaxEBALWC0rXiotiOgRQ7+cUjvA5MpZjNMJ0BfJ2MADFcYj7EaAgODhMoQ/V2On1/fETIliKTqNfOoLKN501OSr3TVerPM8+Vmrbr3M1I9SG4mDL3d1g3BcQUqUROm+lAtgwAAAABJRU5ErkJggg=="
        },
        s = new Object,
        r = new Object,
        o = new Object,
        l = new Array,
        c = $(document).find("#HTML3"),
        d = $(document).find("#HTML13"),
        h = $(document).find("#HTML23"),
        m = (!!window.opera || navigator.userAgent.indexOf(" OPR/"), navigator.userAgent.indexOf("Edge"), window.chrome, "undefined" != typeof document && document.documentMode, window.InstallTrigger, /^((?!chrome|android).)*safari/i.test(navigator.userAgent));

    function p(e) {
        return void 0 !== e
    }

    function g(e) {
        return void 0 === e || "false" != e && 0 != e && "hide" != e && "none" != e && "no" != e && "0" != e && 0 != e && (!!isNaN(e) || Number(e))
    }

    function u(e) {
        return void 0 !== e && !isNaN(e)
    }

    function f(e) {
        if (void 0 === e) return !0;
        if ("array" == typeof e) return !e.length;
        if ("object" == typeof e) {
            for (var t in e) return !1;
            return !0
        }
        return !e
    }

    function A(e) {
        return "array" == typeof e || "object" == typeof e
    }

    function v(e) {
        return "string" == typeof e
    }

    function b(e) {
        return e.split("?")[0].split("#")[0]
    }

    function w(e) {
        return (e = b(e).split("/"))[e.length - 1]
    }

    function y(e, t) {
        p(t) || (t = 300), f(e) || 0 == $(e).length || $("html, body").stop().animate({
            scrollTop: $(e).offset().top
        }, t)
    }

    function x(e, t) {
        if (t == e) return t;
        if (t < e) {
            var a = e;
            e = t, t = a
        }
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function T() {
        return (new Date).getTime()
    }

    function C(e, t, a) {
        for (var i = !1, n = 0; n < t.length; n++) - 1 != e.indexOf(t[n]) && (e = e.split(t[n])[1], i = !0);
        if (!i) return "";
        for (n = 0; n < a.length; n++) e = e.split(a[n])[0];
        return e
    }

    function R(e) {
        return null != e.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/)
    }

    function D() {
        return "cookie" in document
    }

    function S(e, t, a) {
        if (!D()) return !1;
        var i = new Date;
        i.setDate(i.getDate() + a);
        var n = escape(t) + (null == a ? "" : "; expires=" + i.toUTCString()) + "; path=/";
        return document.cookie = e + "=" + n, k(e) === t
    }

    function E() {
        return !!S("test", "ok")
    }

    function k(e) {
        if (!D()) return "";
        var t, a, i, n = document.cookie.split(";");
        for (t = 0; t < n.length; t++)
            if (a = n[t].substr(0, n[t].indexOf("=")), i = n[t].substr(n[t].indexOf("=") + 1), (a = a.replace(/^\s+|\s+$/g, "")) == e) return unescape(i);
        return ""
    }

    function B() {
        return "undefined" != typeof localStorage
    }

    function O(e, t) {
        return B() ? (a = e, i = t, !!B() && (localStorage.setItem(a, i), !0)) : !!E() && S(e, t);
        var a, i
    }

    function M(e) {
        return B() ? function(e) {
            if (B()) {
                var t = localStorage.getItem(e);
                if (t) return t
            }
            return ""
        }(e) : E() ? k(e) : ""
    }

    function U(e) {
        return -1 == e.indexOf("youtube") && -1 == e.indexOf("youtu.be") ? "" : C(e, ["/embed/", "youtu.be/", "/videos/", "/v/", "?v=", "&v="], ["#", "/", "?", "&", "."])
    }

    function z(e) {
        return -1 == e.indexOf("youtube") && -1 == e.indexOf("youtu.be") ? "" : C(e, ["list="], ["#", "/", "?", "&", "."])
    }

    function N(e) {
        return -1 == e.indexOf("vimeo") ? "" : C(e, ["vimeo.com/", "/video/"], ["#", "/", "?", "&", "."])
    }

    function j(e, t, a) {
        for (ce = 0; ce < 100; ce++) {
            var i = !1;
            if ($(e).each((function() {
                    var e = $(this).parent();
                    if (e.length && !e.is(t)) {
                        i = !0;
                        var n = e.clone();
                        n.insertAfter(e), wrapper_html = e.html(), index = wrapper_html.indexOf(a), e.html(wrapper_html.substring(0, index)), n.html(wrapper_html.substring(index + a.length)), $(a).insertAfter(e)
                    }
                })), !i) return
        }
    }

    function H(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "gis";
        if (void 0 === e || !e || e.length < 3) return "";
        if (-1 != (e = e.trim().toLowerCase()).indexOf("<") && e.indexOf(">")) {
            let t = document.createElement("div");
            t.innerHTML = e, e = t.firstChild.classNames
        }
        const a = ["fas", "fa-classic", "fa-solid", "far", "fa-regular", "fal", "fa-light", "fat", "fa-thin", "fab", "fa-brands", "fad", "fa-classic", "fa-duotone", "fass", "fa-sharp"];
        let i = !1;
        for (let t of a)
            if (-1 !== e.indexOf(t)) {
                i = !0;
                break
            } return '<i class="' + (e = i ? e.replaceAll("fa-", "gi-") : t + " gi-" + (e = (e = (e = (e = e.replaceAll("fa ", "")).replaceAll("gi ", "")).replaceAll("fa-", "")).replaceAll("gi-", ""))) + '"></i>'
    }

    function I(e) {
        for (var t = 0, a = 0; a < 100; a++) {
            var n = e.indexOf(i, t);
            if (-1 == n) break;
            var s = e.indexOf(i, n + 2);
            if (-1 == s) break;
            var r = H(e.substring(n + 2, s));
            e = e.substring(0, n) + r + e.substring(s + 2), t = n + r.length
        }
        return e
    }

    function P(e) {
        return (e = encodeURIComponent(e)).replaceAll("!", "%21").replaceAll("(", "%28").replaceAll(")", "%29").replaceAll("'", "%27").replaceAll("~", "%7E")
    }

    function L(e) {
        return b(e).split("/search/label/")[1]
    }

    function F(e) {
        return "/search/label/" + e
    }

    function V(e) {
        for (var t = 0; t < r.label.length; t++)
            if (e == r.label[t].slug) return r.label[t].count;
        return 0
    }

    function Q() {
        return 0 != $("body.item").length
    }

    function X() {
        return r.canonicalUrl == r.canonicalHomepageUrl && !Q()
    }

    function q() {
        return 0 != $("body.archive").length || p(s["updated-min"])
    }

    function K() {
        return o.current.has("/search?") && p(s.q)
    }

    function _() {
        return o.current.has("/search/label/")
    }

    function G() {
        return 0 != $("body.index").length || q()
    }

    function W() {
        return 0 != $("body.static_page").length
    }

    function Y() {
        return W() || Q()
    }

    function J() {
        return r.isMobile
    }

    function Z() {
        return 0 != $("body.error_page").length
    }

    function ee() {
        return $('html[dir="rtl"]').length
    }

    function te() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replaceAll('"', "&quot;").replaceAll("'", "&#39;")
    }

    function V(e) {
        e.has("/search/label/") && (e = L(e));
        for (var t = 0; t < r.label.length; t++)
            if (r.label[t].slug == e) return r.label[t].count;
        return !1
    }
    if (String.prototype.toCapitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1)
        }, String.prototype.replaceAll = function(e, t) {
            return this.split(e).join(t)
        }, String.prototype.has = function(e) {
            return -1 != this.indexOf(e)
        }, String.prototype.hasNo = function(e) {
            return -1 == this.indexOf(e)
        }, 0 == $(".post-ads").length || 0 == c.length || c.is(":empty")) $(".post-body").addClass("wide-right"), $(".post-ads").remove(), c.remove();
    else if (-1 == c.text().indexOf("script") && -1 == c.text().indexOf("iframe") || -1 == c.text().indexOf("<")) c.appendTo($(".post-ads")), c.css("visibility", "visible");
    else {
        var ae = 0,
            ie = 0,
            ne = 0,
            se = 0;
        c.css("visibility", "hidden");
        var re = setInterval((function() {
            if (ae = c.height()) {
                if (ae != ie) return ie = ae, void(ne = 0);
                ++ne >= 5 && (clearInterval(re), c.appendTo($(".post-ads")), c.css("visibility", "visible"))
            } else ++se >= 5 && ($(".post-body").addClass("wide-right"), $(".post-ads").remove(), c.remove(), clearInterval(re))
        }), DELAY_AD_LOAD)
    }
    var oe = window.location.search;
    if (!f(oe))
        for (var le = (oe = oe.substring(1)).split("&"), ce = 0; ce < le.length; ce++) {
            var de = le[ce].split("=");
            de.length > 1 && (s[de[0]] = de[1])
        }
    if (o.current = window.location.href, o.hash = window.location.hash, o.feed = "/feeds", o.referrer = document.referrer, o.protocol = window.location.protocol, r.totalPosts = -1, r.totalComments = -1, r.isMobile = -1 != window.location.href.indexOf("m=1"), r.languageDirection = $("#global-blogger-data .languageDirection").html(), r.pageType = $("#global-blogger-data .pageType").html(), r.pageTitle = $("#global-blogger-data .pageTitle").html(), r.pageName = $("#global-blogger-data .pageName").html(), r.metaDescription = $("#global-blogger-data .metaDescription").html(), r.postImageUrl = $("#global-blogger-data .postImageUrl").html(), r.postImageThumbnailUrl = $("#global-blogger-data .postImageThumbnailUrl").html(), r.title = $("#global-blogger-data .title").html(), r.url = $("#global-blogger-data .url").html(), r.homepageUrl = $("#global-blogger-data .homepageUrl").html(), r.canonicalHomepageUrl = $("#global-blogger-data .canonicalHomepageUrl").html(), r.canonicalUrl = $("#global-blogger-data .canonicalUrl").html(), o.canonical = r.canonicalUrl, r.homepageUrl = new URL(r.homepageUrl), r.homepageUrl = r.homepageUrl.origin + r.homepageUrl.pathname, r.enabledCommentProfileImages = Boolean($("#global-blogger-data .enabledCommentProfileImages").html()), r.blogId = $("#global-blogger-data .blogId").html(), r.postId = $(".post-id").attr("data-id"), r.bloggerCommentNumber = $(".blogger-comments-title").attr("data-comment_number"), isNaN(r.bloggerCommentNumber) ? r.bloggerCommentNumber = 0 : r.bloggerCommentNumber = Number(r.bloggerCommentNumber), r.encoding = $("#global-blogger-data .encoding").html(), r.label = new Array, r.homepageUrl.lastIndexOf("/") == r.homepageUrl.length - 1 && (r.homepageUrl = r.homepageUrl.substring(0, r.homepageUrl.length - 1)), s.m && $(document).on("mousedown", "a", (function() {
            let e = $(this).attr("href");
            if (!e) return !0;
            let t = location.host;
            if (-1 == e.indexOf("//")) return !0;
            if (-1 == e.indexOf(t)) return !0;
            const a = new URL(e);
            a.searchParams.set("m", s.m), a.href != e && $(this).attr("href", a.href)
        })), $("#magone-labels").each((function() {
            var e = $(this).text();
            e = e.split(",");
            for (var t = 0; t < e.length - 1; t += 2) {
                var a = new Object;
                a.name = e[t], a.count = Number(e[t + 1]), a.slug = P(a.name), a.url = r.homepageUrl + "/search/label/" + a.slug, a.url = a.url.replace("http:", o.protocol).replace("https:", o.protocol), r.label.push(a)
            }
        })), r.labelNumber = r.label.length, !f(r.label))
        for (ce = 0; ce < r.label.length - 1; ce++)
            for (var he = ce + 1; he < r.label.length; he++)
                if (r.label[ce].count < r.label[he].count) {
                    var me = r.label[ce];
                    r.label[ce] = r.label[he], r.label[he] = me
                }
    function pe(e) {
        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        "object" != typeof e && (e = $(".item-thumbnail img")), e.each((function() {
            let e = $(this).parent();
            if (e.is(".item-thumbnail") && !e.is("optimized") && null != (a = $(this).attr("src"))) {
                -1 != a.indexOf("youtube.com") && -1 != a.indexOf("/default.") && (a = a.replace("/default.", "/hqdefault."));
                var a = ge(a, 2 * Math.ceil(Math.max(e.width(), e.height())), !1, t);
                $(this).attr("src", a), e.addClass("optimized")
            }
        }))
    }

    function ge(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (-1 == e.indexOf(".blogspot.com") && -1 == e.indexOf(".googleusercontent.com")) return e;
        var n = 0,
            s = 0,
            r = 0,
            o = 0,
            l = 0,
            c = e = e.replace("http://", "https://"),
            d = !m && REPLACE_IMAGE_TO_WEBP;
        if (u(t)) n = s = Math.ceil(Number(t));
        else if (v(t))
            if (-1 !== t.indexOf("x")) {
                var h = t.split("x");
                n = h[0], s = h[1], u(n) && u(s) && (n = Math.ceil(Number(n)), s = Math.ceil(Number(s)))
            } else if (-1 != t.indexOf("w") && u(t.replace("w", ""))) n = Math.ceil(Number(t.replace("w", "")));
        else {
            if (-1 == t.indexOf("h") || !u(t.replace("h", ""))) return c;
            s = Math.ceil(Number(t.replace("h", "")))
        } else if (!d) return c;
        if (n == s && 0 == n && !d) return e;
        var p = "/"; - 1 != e.indexOf("=") && -1 != e.indexOf(".googleusercontent.com") && (p = "="), e = e.split(p);
        for (var g = 0; g < e.length; g++)
            if (!(e[g].length > 17) && (e[g].has("-c") || e[g].has("s") || e[g].has("h") || e[g].has("w"))) {
                var f = e[g].split("-");
                if ("" != (f = (f = f[0]).replace("c", "").replace("s", "").replace("h", "").replace("w", "")) && !isNaN(f)) {
                    e[g].has("s") ? l = Number(f) : e[g].has("h") ? o = Number(f) : e[g].has("w") && (r = Number(f));
                    break
                }
            } if (g < e.length) {
            if (d && (n == s && 0 == s || null == t));
            else if (n == s) {
                if (n < l && !i) return c;
                e[g] = "s" + n
            } else if (0 == s) {
                if (n < r && !i) return c;
                e[g] = "w" + n
            } else if (0 == n) {
                if (s < o && !i) return c;
                e[g] = "h" + s
            } else {
                if ((s < o || n < r) && !i) return c;
                e[g] = "w" + n + "-h" + s
            }
            a && (e[g] += "-c"), d && (e[g] += "-rw")
        }
        if (e = e.join(p), d) {
            var A = ["png", "gif", "jpge", "jpg", "bmp"];
            for (g = 0; g < A.length; g++) e = (e = e.replace("." + A[g], ".webp")).replace("." + A[g].toUpperCase(), ".webp")
        }
        return e
    }

    function ue(e) {
        var t = "",
            a = "<img ",
            i = 'src="',
            n = '"';
        if (index0 = e.indexOf(a), -1 != index0 && (index1 = e.indexOf(i, index0), -1 == index1 && (i = "src='", n = "'", index1 = e.indexOf(i, index0)), -1 != index1 && (index2 = e.indexOf(n, index1 + i.length), -1 != index2 && (t = e.substring(index1 + i.length, index2)))), t || (a = 'data-thumbnail-src="', i = '"', index0 = e.indexOf(a), -1 != index0 && (index1 = e.indexOf(i, index0 + a.length), -1 != index0 && (t = e.substring(index0 + a.length, index1)))), !t) {
            i = "youtube.com/embed/", n = "youtube.com/watch?v=";
            var s = a = "youtube-nocookie.com/embed/",
                r = e.indexOf(s);
            if (-1 == r && (s = i, -1 == (r = e.indexOf(s)) && (s = n, -1 == (r = e.indexOf(s)) && (s = "youtu.be/", r = e.indexOf(s)))), -1 != r) {
                var o = e.indexOf('"', r); - 1 != o && (-1 != (t = e.substring(r + s.length, o)).indexOf("?") && (t = t.substring(0, t.indexOf("?"))), -1 != t.indexOf("&") && (t = t.substring(0, t.indexOf("&"))), t = "https://img.youtube.com/vi/" + t + "/hqdefault.jpg")
            }
        }
        return t.has(".blogspot.com/") && (t = t.replace("http://", "//")), t
    }

    function fe(e) {
        return void 0 !== e && "undefined" != typeof SNEEIT_LICENSE && ("feed" in e ? e : "responseText" in e && -1 != (me = e.responseText).indexOf('({"version":') && (start = me.indexOf('({"version":'), -1 != me.indexOf("}});") && (end = me.indexOf("}});"), function(e) {
            try {
                JSON.parse(e)
            } catch (e) {
                return !1
            }
            return JSON.parse(e)
        }(me = me.substring(start + 1, end + 2)))))
    }

    function Ae(e, t, a, i) {
        if (void 0 === e || "undefined" == typeof SNEEIT_LICENSE) return !1;
        void 0 === t && (t = 500), void 0 === a && (a = "undefined" != typeof DEFAULT_POST_THUMBNAIL ? DEFAULT_POST_THUMBNAIL : "https://lorempixel.com/640/300/"), this.id = e.feed.id.$t;
        var n = "blog-",
            s = this.id.indexOf(n);
        if (this.id = this.id.substring(s + n.length), this.id = this.id.replace(".comments", ""), this.cate = new Array, "category" in e.feed)
            for (ce = 0; ce < e.feed.category.length; ce++) this.cate[ce] = e.feed.category[ce].term;
        this.title = "", "title" in e.feed && (this.title = e.feed.title.$t), this.title_attr = te(this.title), this.subtitle = "", "subtitle" in e.feed && (this.subtitle = e.feed.subtitle.$t), this.admin = new Object, this.admin.name = "Anonymous", this.admin.uri = "", this.admin.avatar = "https://img1.blogblog.com/img/anon36.png", "name" in e.feed.author[0] && (this.admin.name = e.feed.author[0].name.$t), "uri" in e.feed.author[0] && (this.admin.uri = e.feed.author[0].uri.$t), "gd$image" in e.feed.author[0] && "https://img1.blogblog.com/img/blank.gif" != e.feed.author[0].gd$image.src && (this.admin.avatar = e.feed.author[0].gd$image.src), this.total_entry = Number(e.feed.openSearch$totalResults.$t), this.start_index = Number(e.feed.openSearch$startIndex.$t), this.item_per_page = Number(e.feed.openSearch$itemsPerPage.$t), this.entry_number = 0, "entry" in e.feed && (this.entry_number = e.feed.entry.length), this.entry = new Array;
        for (ce = 0; ce < this.entry_number; ce++) {
            this.entry[ce] = new Object;
            var r = new Object,
                o = e.feed.entry[ce];
            if (r.id = o.id.$t, n = "post-", s = r.id.indexOf(n), r.id = r.id.substring(s + n.length), r.published = "", "published" in o && (r.published = o.published.$t), r.cate = new Array, "category" in o)
                for (he = 0; he < o.category.length; he++) r.cate[he] = o.category[he].term;
            if (r.title = "", "title" in o && (r.title = o.title.$t), r.title_attr = te(r.title), r.content = "", "content" in o && (r.content = o.content.$t), r.summary = "", "summary" in o && (r.summary = o.summary.$t), r.content ? r.summary = r.content : "summary" in o && (r.summary = o.summary.$t), "" == r.content && (r.content = r.summary), r.summary && (r.summary = r.summary.replace(/<noscript\b[^>]*>(.*?)<\/noscript>/g, ""), r.summary = r.summary.replace(/<script\b[^>]*>(.*?)<\/script>/g, ""), r.summary = r.summary.replace(/<\S[^>]*>/g, "")), r.summary.length > t && (r.summary = r.summary.substring(0, t) + "..."), r.link = "", r.parentId = "", r.reply_label = "comments", "link" in o)
                for (he = 0; he < o.link.length; he++) "alternate" == o.link[he].rel && (r.link = o.link[he].href), "replies" == o.link[he].rel && (r.reply_label = o.link[he].title), "related" == o.link[he].rel && (r.parentId = o.link[he].href, r.parentId = r.parentId.split("/comments/default/")[1]);
            if (r.author = new Object, r.author.name = "Anonymous", r.author.uri = "", r.author.avatar = "https://img1.blogblog.com/img/anon36.png", a0 = o.author[0], "name" in a0 && (r.author.name = a0.name.$t), "uri" in a0 && (r.author.uri = a0.uri.$t), "gd$image" in a0 && "https://img1.blogblog.com/img/blank.gif" != a0.gd$image.src && (r.author.avatar = a0.gd$image.src), r.thumbnail = ue(r.content), r.has_thumbnail = !0, "" == r.thumbnail && "media$thumbnail" in o && (r.thumbnail = o.media$thumbnail.url), "" == r.thumbnail && (r.thumbnail = a, r.has_thumbnail = !1), r.format = "standard", -1 != r.content.indexOf("youtube.com/embed") || -1 != r.content.indexOf("youtube-nocookie.com/embed/") || -1 != r.content.indexOf("player.vimeo.com") || -1 != r.content.indexOf("dailymotion.com/embed") ? r.format = "video" : r.content.split("<img ").length > 3 ? r.format = "image" : -1 != r.content.indexOf("soundcloud.com/player") && (r.format = "audio"), r.reply_number = 0, "thr$total" in o && (r.reply_number = Number(o.thr$total.$t)), r.reply_label = r.reply_label.replace(r.reply_number + " ", ""), r.reply_to = "", r.reply_json = "", r.reply_title = "", "thr$in-reply-to" in o && (r.reply_to = o["thr$in-reply-to"].href, r.reply_json = o["thr$in-reply-to"].source, r.reply_json = r.reply_json.replace("/default/", "/summary/"), r.reply_json = r.reply_json + "?alt=json-in-script"), r.pid = "", r.itemClass = "", r.displayTime = "", "gd$extendedProperty" in o)
                for (he = 0; he < o.gd$extendedProperty.length; he++) "blogger.itemClass" == o.gd$extendedProperty[he].name && (r.pid = o.gd$extendedProperty[he].value, r.itemClass = r.pid), "blogger.displayTime" == o.gd$extendedProperty[he].name && (r.displayTime = o.gd$extendedProperty[he].value);
            r.pid = r.pid.replace("pid-", ""), this.entry[ce] = r
        }
    }
    r.postLabel = new Array, $(".post-label-data").each((function() {
        let e = $(this).attr("data-href").replace("http:", o.protocol).replace("https:", o.protocol);
        e && (e = new URL(e), e = e.origin + e.pathname, r.postLabel.push(e))
    })), (p(s.zx) || function() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }()) && (o.feed = "https://www.blogger.com/feeds/" + r.blogId), o.host = window.location.hostname, o.name = o.host.replace("www.", "").replace("http://", "").replace("https://", ""), o.path = window.location.pathname, pe(), $(window).resize((function() {})), X() || "none" == SHOW_AFTER_POST_SECTION ? $("#content-section-after-post").remove() : $("#content-section-after-post").appendTo($(".after-post-content-" + SHOW_AFTER_POST_SECTION)), $(".cloud-label-widget-content .label-size").addClass("bg"), $(".cloud-label-widget-content .label-size .label-count").each((function() {
        $(this).html($(this).html().replace("(", "").replace(")", ""))
    })), $(".widget").css("opacity", "1"), $(".widget > h2").each((function() {
        var e = $(this).html().replaceAll("\n", ""),
            t = $(this).parent();
        if (t.type = t.attr("class").replace("widget ", "").replace(" ", "").toLowerCase(), e = function(e, t) {
                var a = t.split("$")[0];
                if (f(a)) return t;
                var i = a;
                if (i.has("/fa") || i.has("/gi")) {
                    let e = i.indexOf("/fa"),
                        t = i.indexOf("/gi"),
                        a = Math.max(e, t),
                        n = i.indexOf("/", a + 2);
                    n > a && (i = i.substring(0, a) + H(i.substring(a + 1, n)) + i.substring(n + 1))
                }
                var n = !1;
                return i.indexOf("_") == i.length - 1 && (n = !0, e.addClass("under-title"), i = i.substring(0, i.length - 1)), 0 == i.indexOf("[") && i.indexOf("]") == i.length - 1 && (n = !0, e.addClass("box-title"), i = i.substring(1, i.length - 1)), 0 == i.indexOf("|") && (n = !0, e.addClass("head-title"), i = i.substring(1)), n && i && (i = "<span>" + i + "</span>"), t.replaceAll(a, i)
            }(t, e), $(this).html(e), e.has("$") && e.has("=") || t.is(".PopularPosts")) {
            e = e.split("$"), t.section_id = t.parent().attr("id"), t.id = t.attr("id"), t.title = e[0], t.param = new Object;
            for (var a = 1; a < e.length; a++)
                if (e[a].has("=")) {
                    var i = e[a].split("=");
                    if (i.length < 2 || !i[0].length || !i[1].length) continue;
                    t.param[i[0]] = i[1]
                } if (f(t.param.type) && ("popularposts" == t.type ? t.param.type = "one" : t.param.type = "misc"), f(t.param) || f(t.param.type)) $(this).html(t.title).show();
            else {
                if (!f(t.param.show)) {
                    var n = !1;
                    (t.param.show.has(".") || t.param.show.has("/")) && (n = o.current.has(t.param.show) || o.current.has(encodeURI(t.param.show)) || decodeURIComponent(o.current).has(t.param.show));
                    for (var s = t.param.show.split("-"), c = 0; c < s.length; c++) switch (s[c]) {
                        case "home":
                            n = n || X();
                            break;
                        case "label":
                            n = n || _();
                            break;
                        case "search":
                            n = n || K();
                            break;
                        case "archive":
                            n = n || q();
                            break;
                        case "index":
                            n = n || G();
                            break;
                        case "page":
                        case "static":
                        case "static_page":
                            n = n || W();
                            break;
                        case "post":
                        case "article":
                        case "item":
                        case "single":
                            n = n || Q();
                            break;
                        case "singular":
                            n = n || Y();
                            break;
                        case "404":
                        case "error":
                        case "error_page":
                            n = n || Z();
                            break;
                        case "mobile":
                        case "phone":
                            n = n || J()
                    }
                    if (!n) return void t.remove()
                }
                if (!f(t.param.hide)) {
                    var d = !1;
                    (t.param.hide.has(".") || t.param.hide.has("/")) && (d = o.current.has(t.param.hide) || o.current.has(encodeURI(t.param.hide)) || decodeURIComponent(o.current).has(t.param.hide));
                    for (var h = t.param.hide.split("-"), m = 0; m < h.length; m++) switch (h[m]) {
                        case "home":
                            d = d || X();
                            break;
                        case "label":
                            d = d || _();
                            break;
                        case "search":
                            d = d || K();
                            break;
                        case "archive":
                            d = d || q();
                            break;
                        case "index":
                            d = d || G();
                            break;
                        case "page":
                        case "static":
                        case "static_page":
                            d = d || W();
                            break;
                        case "post":
                        case "article":
                        case "item":
                        case "single":
                            d = d || Q();
                            break;
                        case "singular":
                            d = d || Y();
                            break;
                        case "404":
                        case "error":
                        case "error_page":
                            d = d || Z();
                            break;
                        case "mobile":
                        case "phone":
                            d = d || J()
                    }
                    if (d) return void t.remove()
                }
                if (t.param.type = t.param.type.toLowerCase(), "image" == t.type && (t.content = new Object, t.find(".widget-content").each((function() {
                        $(this).find("img").each((function() {
                            t.content.src = $(this).attr("src")
                        })), $(this).find(".caption").each((function() {
                            t.content.caption = $(this).html()
                        })), $(this).find("a").each((function() {
                            t.content.href = $(this).attr("href")
                        }))
                    }))), "linklist" != t.type && "pagelist" != t.type || (t.content = new Array, t.find("ul li a").each((function() {
                        var e = $(this);
                        e.name = $(this).html(), e.url = $(this).attr("href"), t.content[t.content.length] = e
                    }))), "label" == t.type && (t.selectAll = !1, t.find(".widget-item-control").remove(), t.content = new Array, t.find("[dir]").each((function() {
                        for (var e = $(this).text(), a = 0; a < r.label.length && e != r.label[a].name; a++);
                        if (a < r.label.length) {
                            var i = new Object;
                            i.name = r.label[a].name, i.slug = r.label[a].slug, t.content.push(i)
                        }
                    })), t.content.length != r.label.length && 0 != t.content.length || (t.selectAll = !0)), "popularposts" == t.type) {
                    t.json = new Object, t.json.entry = new Array;
                    var g = 1;
                    t.find("li").each((function() {
                        var e = $(this);
                        e.link = $(this).find("a").attr("href"), e.title = "", e.cate = [g], g++, e.thumbnail = DEFAULT_POST_THUMBNAIL, e.content = e.summary = "", e.id = "popularposts", e.has_thumbnail = !1, $(this).find(".item-title").each((function() {
                            e.title = $(this).find("a").html()
                        })), f(e.title) && (e.title = $(this).find("a").html()), $(this).find("img").each((function() {
                            e.thumbnail = $(this).attr("src"), e.has_thumbnail = !0
                        })), $(this).find(".item-snippet").each((function() {
                            var t = $(this).html();
                            e.content = e.summary = t.substring(0, t.length - 3)
                        })), t.json.entry[t.json.entry.length] = e
                    }))
                }
                var A = {
                    cols: "columns",
                    clm: "columns",
                    cls: "columns",
                    c: "count",
                    cnt: "count",
                    h: "height",
                    btn: "buttons",
                    b: "buttons",
                    do: "dots",
                    t: "title",
                    m: "meta",
                    mt: "meta",
                    a: "author",
                    au: "author",
                    cm: "comment",
                    com: "comment",
                    comments: "comment",
                    d: "date",
                    sp: "speed",
                    rdm: "readmore",
                    rm: "readmore",
                    sn: "snippet",
                    s: "snippet",
                    snip: "snippet",
                    description: "desc",
                    ds: "desc",
                    dsc: "desc",
                    cat: "cate",
                    ct: "cate",
                    label: "cate",
                    labels: "cate",
                    lab: "cate",
                    la: "cate",
                    l: "cate",
                    category: "cate",
                    categories: "cate",
                    va: "viewall",
                    idx: "index",
                    id: "index",
                    pagination: "pages",
                    navigation: "pages",
                    page: "pages",
                    pag: "pages",
                    pgn: "pages",
                    nav: "pages",
                    nv: "pages",
                    p: "pages",
                    pg: "pages",
                    ico: "icon",
                    i: "icon",
                    ic: "icon",
                    cl: "color",
                    col: "color",
                    clr: "color",
                    co: "color",
                    tb: "tbg",
                    thumb_bg: "tbg",
                    src: "source",
                    sr: "source",
                    spc: "space",
                    spa: "space",
                    spacing: "spac",
                    hst: "host",
                    ho: "host",
                    tp: "topic",
                    to: "topic",
                    top: "topic",
                    tpc: "topic"
                };
                for (var v in A) p(t.param[v]) && (t.param[A[v]] = t.param[v]);
                p(t.param.count) && u(t.param.count) && (t.param.count = Number(t.param.count)), t.param.subtype = "", t.param.type.has("tab") && (t.param.type = t.param.type.replaceAll("tab", "").replaceAll("-", ""), "" == t.param.type && (t.param.type = "misc"), t.param.subtype = "tab"), l.push(t), $(this).html(t.title).show(), t.hide().addClass(t.param.type).addClass(t.type), t.param.subtype && t.addClass(t.param.subtype)
            }
        } else $(this).show()
    }));
    var ve = new Array;
    for (ce = 0; ce < l.length; ce++) {
        if (!p((Te = (xe = l[ce]).param).space) || "0" != Te.space && "no" != Te.space && "none" != Te.space || xe.addClass("no-spacing"), "tab" == Te.subtype) {
            var be = new Array,
                we = xe.section_id;
            for (he = ce; he < l.length && "tab" == l[he].param.subtype && xe.section_id == we; he++) l[he].param.subtype = "", be.push(l[he]);
            ve.push(be)
        }
        if ("social_icons" != Te.type || "linklist" != xe.type)
            if ("social_counter" != Te.type || "linklist" != xe.type)
                if ("image_list" != Te.type || "image" != xe.type) "misc" != xe.param.type && "html" != xe.type ? "popularposts" != xe.type ? "label" != xe.type || "misc" == xe.param.type || (xe.attr("data-i", ce), xe.addClass("feed pending"), ct(xe)) : (xe.addClass("feed").show(), xe.find(".widget-content").addClass("feed-widget-content widget-content-" + xe.id).attr("id", "widget-content-" + xe.id), Tt(xe)) : (xe.is(".HTML") && xe.find("#mc_embed_signup").length && !xe.find("link").length && (xe.type = "followbyemail"), dt(xe));
                else {
                    we = xe.section_id;
                    var ye = new Array;
                    for (he = ce; he < l.length; he++) {
                        var xe, Te;
                        if ("image_list" != (Te = (xe = l[he]).param).type || "image" != xe.type || xe.section_id != we) break;
                        ye[ye.length] = xe
                    }
                    ce = he - 1
                }
        else {
            var Ce = "";
            for (he = 0; he < xe.content.length; he++) {
                var Re = xe.content[he],
                    De = Re.name,
                    Se = Re.url;
                let It = Re.url.replace("http://", "").replace("https://", "").replace("www.", "").split("/")[0].split(".");
                if (It = It[It.length - 2] || It[0], De.has("|")) {
                    var Ee = (De = De.split("|"))[0],
                        $e = De[1],
                        ke = t("Followers"),
                        Be = t("Follow");
                    if (void 0 !== De[2] && (ke = De[2]), void 0 !== De[3] && (Be = De[3]), icon = H(Ee, -1 !== Ee.indexOf("rss") ? "gir" : "gib"), -1 != Ee.indexOf("<") && Ee.indexOf(">")) {
                        let Pt = document.createElement("div");
                        Pt.innerHTML = Ee, Ee = Pt.firstChild.classNames
                    } - 1 != Ee.indexOf(" ") && (Ee = Ee.split(" ")[1]), -1 != Ee.indexOf("-") && (Ee = Ee.split("-")[1]);
                    var Oe = Ee = Ee.trim().toLowerCase();
                    Ce += '<a title="' + It.toCapitalize() + '" class="social-counter item-' + he + " " + Oe + " " + Oe + '-color" href="' + Se + '" target="_blank" rel="noopener noreferrer">                    <span class="icon">' + icon + '</span>                    <span class="count">' + $e + '</span>                    <span class="text">' + ke + '</span>                    <span class="button"><span class="' + Oe + '-bg bg rad2">' + Be + ' <span class="go"><i class="gis gi-angle-right"></i></span></span></span>                <span class="clear"></span></a>' + a
                }
            }
            xe.find(".widget-content").html(Ce), xe.show()
        } else {
            for (let Lt = 0; Lt < xe.content.length; Lt++) {
                let Ft = xe.content[Lt],
                    Vt = Ft.name,
                    Qt = Ft.url.replace("http://", "").replace("https://", "").replace("www.", "").split("/")[0].split(".");
                Qt = Qt[Qt.length - 2] || Qt[0], Vt.has("<") || Vt.has(">") || Ft.html('<i class="gib gi-' + Ft.name + '"></i>'), Ft.addClass(Qt).attr("title", Qt.toCapitalize()), g(xe.param.target) && Ft.attr("target", "_blank"), Ft.attr("rel", "noopener noreferrer")
            }
            rt(xe)
        }
    }
    for (ce = 0; ce < ve.length; ce++) ot(ve[ce]);

    function Me(e) {
        for (var t = new Array, a = new Array, i = " _____THIS_IS_TAG_HOLDER_____" + T() + "_____ ", s = " _____THIS_IS_MEDIA_HOLDER_____" + T() + "_____ ", r = 0, o = -1, l = -1, c = 0; c < 1e3 && -1 != (r = e.indexOf("<", r)) && (o = r, -1 != (r = e.indexOf(">", r))); c++) l = r, t.push(e.substring(o, l + 1)), e = e.substring(0, o) + i + e.substring(l + 1), r = o + i.length;
        if (COMMENT_MEDIA_ATTACH) {
            var d = function(e) {
                return e.match(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,20}(\/\S*)?/g)
            }(e);
            if (null != d)
                for (c = 0; c < d.length; c++) {
                    var h = d[c];
                    if (e = e.replace(h, s), h.has("youtube") || h.has("youtu.be")) {
                        var m = U(h),
                            p = z(h);
                        if (m) {
                            var g = '<iframe class="comment-media video youtube" width="640" height="360" src="https://www.youtube.com/embed/' + m + "?";
                            g += p ? "list=" + p : "rel=0", g += '" frameborder="0" allowfullscreen></iframe>', a.push(g);
                            continue
                        }
                    }
                    h.has("vimeo") && (m = N(h)) ? a.push('<iframe class="comment-media video vimeo" src="https://player.vimeo.com/video/' + m + '" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') : R(h) ? a.push('<img class="comment-media image" src="' + h + '" alt="comment-image"/>') : a.push('<a href="' + h + '" target="_blank" rel="nofollow">' + h + "</a>")
                }
        }
        for (COMMENT_EMOTICONS && $.each(n, (function(t, a) {
                e = e.replaceAll(t, '<img src="data:image/png;base64,' + a + '"/>')
            })), c = 0; c < t.length; c++) e = e.replace(i, t[c]);
        for (c = 0; c < a.length; c++) e = e.replace(s, a[c]);
        return e
    }

    function Ue() {
        var e = $(".blogger-comments-holder");
        e.html('<ul class="main-comments"></ul>');
        var i = 0 == $(".noNewComments").length;
        if ("undefined" == typeof SNEEIT_LICENSE) return !1;
        for (var n = 0; n < COMMENT_ITEMS.length; n++) {
            var s = COMMENT_ITEMS[n];
            (COMMENT_EMOTICONS || COMMENT_MEDIA_ATTACH) && (s.body = Me(s.body));
            var l = 0;
            f(s.parentId) || 0 != e.find("li.comment-" + s.parentId).length && (l = Number(e.find("li.comment-" + s.parentId).attr("data-level")) + 1);
            var c = '<li id="c' + s.id + '" class="comment comment-' + n + " comment-" + s.id + '" data-level="' + l + '">',
                d = "";
            (f(s.author.avatarUrl) || s.author.avatarUrl.has("img1.blogblog.com/img/blank.gif")) && (s.author.avatarUrl = DEFAULT_COMMENT_AVATAR), s.author.avatarUrl = ge(s.author.avatarUrl, 48), d = '<img alt="commenter-avatar" class="shad cir" src="' + s.author.avatarUrl + '"/>', f(s.author.profileUrl) ? c += '<span class="comment-avatar">' + d + "</span>" : c += '<a class="comment-avatar" href="' + s.author.profileUrl + '" target="_blank" rel="nofollow">' + d + "</a>", c += '<div class="comment-content"><div class="comment-header">', d = s.author.name, f(s.author.profileUrl) ? c += '<span class="comment-name">' + d + "</span>" : c += '<a class="comment-name" href="' + s.author.profileUrl + '" target="_blank" rel="nofollow">' + d + "</a>", c += ' <a class="comment-date" href="' + s.permalink + '" data-timestamp="' + s.timestamp + '">' + s.displayTime + '</a></div><div class="comment-body">' + s.body + '</div><div class="comment-footer">' + (l <= MAX_REPLY_DEPTH && i ? '<a href="javascript:void(0)" class="comment-reply-add" data-parentid="' + s.id + '"><span>' + t("Reply") + '</span> <i class="gis gi-mail-forward"></i></a>' : "") + '<span class="' + s.deleteclass + '"><a target="_self" href="https://www.blogger.com/delete-comment.g?blogID=' + r.blogId + "&postID=" + s.id + '"><span>' + t("Delete") + '</span> <i class="gis gi-trash-o"></i></a></span></div></div>' + a + '<div class="comment-form-holder comment-form-holder-' + s.id + '"></div></li>', l ? (0 == e.find("ul.sub-comments-of-" + s.parentId).length && (0 != e.find("li.comment-" + s.parentId).length ? e.find("li.comment-" + s.parentId).append('<ul class="sub-comments sub-comments-of-' + s.parentId + '"></ul>') : e.find("ul.main-comments").append(c)), e.find("ul.sub-comments-of-" + s.parentId).append(c)) : e.find("ul.main-comments").append(c)
        }
        $(document).on("click", ".comment-reply-add", (function() {
            var e = $(this).attr("data-parentid");
            $("#comment-editor").attr("src", $(".comment-editor-src").attr("data-src") + "&parentID=" + e), $(".comment-form-wrapper").appendTo($(".comment-form-holder-" + e)), $(document).find(".comment-reply-cancel").each((function() {
                $(this).addClass("comment-reply-add").removeClass("comment-reply-cancel").html("<span>" + t("Reply") + '</span> <i class="gis gi-mail-forward"></i>')
            })), $(this).addClass("comment-reply-cancel").removeClass("comment-reply-add").html("<span>" + t("Cancel reply") + '</span> <i class="gis gi-close"></i>')
        })), $(document).on("click", ".comment-reply-cancel", (function() {
            $("#comment-editor").attr("src", $(".comment-editor-src").attr("data-src")), $(".comment-form-wrapper").appendTo($(".comment-form-add-new")), $(this).addClass("comment-reply-add").removeClass("comment-reply-cancel").html("<span>" + t("Reply") + '</span> <i class="gis gi-mail-forward"></i>')
        })), e.find(".comment-date").each((function() {
            $(this).html($.format.prettyDate(new Date(Number($(this).attr("data-timestamp")))))
        })), o.current.has("showComment=") && o.current.has("#c") && setTimeout((function() {
            y(o.hash)
        }), 1e3)
    }
    $('<div class="mobile-menu mobile">' + $("#PageList1").html() + "</div>").insertAfter($("#PageList1")), $(".top-bar").length || $("#Header1 .header-social-icons").each((function() {
        $(".mobile-menu .menu").prepend('<li class="menu-item-type-custom menu-item mobile-social-icons"></li>'), $(this).clone().prependTo($(".mobile-social-icons")), $(this).addClass("none-mobile")
    })), $(".mobile-menu .menu-item").each((function() {
        var e = H($(this).attr("data-icon"));
        e && $(this).find("> a").each((function() {
            $(this).html(e + " " + $(this).html())
        })), $(this).is(".menu-item-has-children") && $(this).append('<span class="expand toggle"><i class="gis gi-angle-down"></i></span><span class="collapse toggle"><i class="gis gi-angle-up"></i></span>')
    })), $(".mobile-menu .menu-item-has-children > a").click((function(e) {
        var t = $(this).attr("href");
        if (void 0 !== t && t.length > 2) return !0;
        e.preventDefault();
        var a = $(this).parent();
        return a.is(".expanded") ? a.addClass("collapsed").removeClass("expanded").find("> .sub-menu").slideUp() : a.removeClass("collapsed").addClass("expanded").find("> .sub-menu").slideDown(), !1
    })), $(".mobile-menu .menu-item .expand").click((function() {
        $(this).parent().removeClass("collapsed").addClass("expanded").find("> .sub-menu").slideDown()
    })), $(".mobile-menu .menu-item .collapse").click((function() {
        $(this).parent().addClass("collapsed").removeClass("expanded").find("> .sub-menu").slideUp()
    })), $("#PageList1 > ul").attr("id", "menu-header-section"), $("#PageList1 li").each((function() {
        var e = H($(this).attr("data-icon"));
        e && $(this).find("> a").each((function() {
            $(this).html(e + " " + $(this).html())
        })), $(this).find("> ul").length ? ($(this).find("> ul").wrap('<div class="menu-item-inner"></div>'), $(this).find("> a").each((function() {
            $(this).html($(this).html() + ' <span class="arrow"></span>')
        }))) : $(this).append('<div class="menu-item-inner"></div>')
    })), $("#PageList1 div.menu-item-inner").append(a), $("#PageList1 > ul > li").each((function() {
        var e = $(this).attr("data-enable_mega");
        if (p(e) && "true" == e)
            if ($(this).addClass("menu-item-mega"), $(this).is(".menu-item-type-label")) {
                var t = $(this).find("> a").attr("href");
                $(this).attr("data-slug", L(t)), $(this).addClass("menu-item-mega-label"), $(this).find("> .menu-item-inner").prepend('<div class="menu-mega-content"><div class="loader">Loading...</div></div>')
            } else $(this).addClass("menu-item-mega-link")
    })), $("#PageList1 li a").each((function() {
        var e = $(this).attr("href");
        p(e) && o.current == e && ($(this).addClass("current"), $(this).parent().addClass("menu-item-current"))
    })), $("#PageList1").addClass("menu pagelist main-menu no-title").show().append(a);
    var ze = new Array,
        Ne = 0;
    if ($("." + PRIMARY_COMMENT_SYSTEM + "-comment-counter").show(), "disqus" == PRIMARY_COMMENT_SYSTEM) {
        var je = document.createElement("script");
        je.async = !0, je.type = "text/javascript", je.src = "https://" + disqus_shortname + ".disqus.com/count.js", (document.getElementsByTagName("HEAD")[0] || document.getElementsByTagName("BODY")[0]).appendChild(je)
    }
    var He = PRIMARY_COMMENT_SYSTEM;
    if (o.hash.has("#comment-") ? He = "disqus" : p(s.fb_comment_id) && (He = "facebook"), $(".blogger-comments-holder").length)
        if (f(COMMENT_ITEMS)) $(".blogger-comments-holder .comments").show(), $(".blogger-alt-comments .avatar-image-container img").each((function() {
            $(this).addClass("shad cir");
            var e = $(this).attr("src");
            f(e) || e.has("blank.gif") && $(this).attr("src", DEFAULT_COMMENT_AVATAR)
        })), $(".blogger-alt-comments .comment-reply").each((function() {
            $(this).append(' <i class="gis gi-mail-forward color"></i>');
            var e = $(this).parents(".comment").find(".comment .comment-actions"),
                t = $(this);
            e.length && e.each((function() {
                if (!$(this).find(".comment-reply").length) {
                    t.clone().prependTo($(this));
                    var e = $(this).parents(".comment");
                    e.length && (e = (e = e.attr("id")).replace("c", "")), u(e) && $(this).find(".comment-reply").attr("data-comment-id", e)
                }
            }))
        })), $(".blogger-alt-comments ol#top-ra > li.comment").each((function() {
            var e = $(this).find("> .comment-replybox-single"),
                t = $(this).find("> .comment-replies");
            e.insertBefore(t)
        })), $("#comment-holder .comment-replybox-thread").each((function() {
            $(".comment-form-message").prependTo($(this))
        })), $(".avatar-image-container img").each((function() {
            -1 != $(this).attr("src").indexOf("zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ") && $(this).attr("src", DEFAULT_COMMENT_AVATAR)
        })), $("#top-continue > a").addClass("comment-cancel-link").html("<span>" + t("Cancel reply") + '</span> <i class="gis gi-close color"></i>'), $(".blogger-alt-comments .comment-actions .comment-reply").addClass("comment-reply-link").click((function() {
            var e = $("#top-continue");
            if (e.length) {
                $(".blogger-alt-comments .comment-reply-link").show(), $(this).hide(), e.prependTo($(this).parent()), e.show(), $(".comment-form-message").prependTo($(this).parents(".comment").first().find("> .comment-replybox-single"));
                var t = $(this);
                setTimeout((function() {
                    var e = t.parents(".comment").find(" > .comment-replybox-single > iframe");
                    if (!e.length)
                        if ((e = $("#comment-editor")).length) {
                            var a = e.attr("src");
                            if (f(a)) location.reload();
                            else {
                                var i = t.attr("data-comment-id");
                                if (comment_editor_src_start = a.indexOf("parentID="), comment_editor_src_end = a.indexOf("#"), -1 == comment_editor_src_start) {
                                    if (comment_editor_src_start = a.indexOf("?"), -1 == comment_editor_src_start) return void location.reload();
                                    a = a.substring(0, comment_editor_src_start + 1) + "parentID=" + i + "&" + a.substring(comment_editor_src_start + 1)
                                } else {
                                    if (-1 == comment_editor_src_end) return void location.reload();
                                    a = a.substring(0, comment_editor_src_start + 9) + i + a.substring(comment_editor_src_end)
                                }
                                e.attr("src", a), e.appendTo($("#c" + i).find("> .comment-replybox-single"))
                            }
                        } else location.reload()
                }), 1e3)
            }
        })), $(document).find(".comment-cancel-link").click((function() {
            $(document).find("#top-continue").hide(), $(".blogger-alt-comments .comment-reply-link").show(), $(".comment-form-message").prependTo($(".comment-replybox-thread"))
        })), $(".blogger-alt-comments .comment-content").each((function() {
            var e = Me($(this).html());
            $(this).html(e)
        }));
        else if (r.bloggerCommentNumber <= 200) Ue();
    else {
        for (ce = 0; ce < r.bloggerCommentNumber - 200; ce += 200) {
            var Ie = 200;
            ce + Ie > r.bloggerCommentNumber - 200 && (Ie = r.bloggerCommentNumber - ce - 200), ze.push(o.feed + "/" + r.postId + "/comments/default?alt=json-in-script&max-results=" + Ie + "&start-index=" + (ce + 1))
        }! function t() {
            $.get(ze[Ne], (function(a) {
                if (void 0 === (a = fe(a)) || "undefined" == typeof SNEEIT_LICENSE) return !1;
                if (a)
                    if (0 != (a = new Ae(a)).entry.length) {
                        for (var i = a.entry.length - 1; i >= 0; i -= 1) {
                            var n = new Object;
                            e = a.entry[i], n.id = e.id, e.parentId && (n.parentId = e.parentId), n.body = e.content;
                            var s = new Date(e.published);
                            n.timestamp = s.getTime().toString(), n.permalink = e.link, n.author = new Object, n.author.name = e.author.name, n.author.avatarUrl = e.author.avatar, n.author.profileUrl = e.author.uri, n.displayTime = e.displayTime, n.deleteclass = "item-control blog-admin " + e.itemClass, COMMENT_ITEMS.push(n)
                        }++Ne >= ze.length ? Ue() : t()
                    } else Ue();
                else Ue()
            }), "jsonp").fail((function() {
                $(".blogger-comments-default-pagination").show(), Ue()
            }))
        }()
    }
    if ($("#comments").each((function() {
            0 != $(".comments").length ? (0 == $("." + PRIMARY_COMMENT_SYSTEM + "-comments").length ? $(".comments").first().addClass("active") : $("." + PRIMARY_COMMENT_SYSTEM + "-comments").addClass("active"), $(".comments.active .comments-title").addClass("active").appendTo($("#comments-title-tabs")), $(".comments .comments-title").appendTo($("#comments-title-tabs")), $("#comments-title-tabs .comments-title").addClass("comments-title-tab"), He != PRIMARY_COMMENT_SYSTEM && ($("#comments-title-tabs a.active").removeClass("active"), $(".comments.active").removeClass("active"), $("#comments-title-tabs a." + He + "-comments-title").addClass("active"), $("." + He + "-comments").addClass("active")), $("#comments-title-tabs a").click((function() {
                $(this).is(".active") || ($("#comments-title-tabs a.active, .comments.active").removeClass("active"), $(this).addClass("active"), $($(this).attr("data-target")).addClass("active"))
            }))) : $(this).remove()
        })), $(".post-body-inner img").length && ("always-before" == FEATURE_IMAGES || "always-after" == FEATURE_IMAGES || "selected-before" == FEATURE_IMAGES || "selected-after" == FEATURE_IMAGES)) {
        var Pe = null,
            Le = null,
            Fe = null;
        $(".post-body-inner img").each((function() {
            if (!Pe || !Le) {
                var e = $(this).attr("src"),
                    t = $(this).attr("title");
                f(Pe) && !f(e) && (Pe = $(this)), f(Le) && !f(t) && t.toLowerCase().has("[feature]") && !f(e) && (Le = $(this))
            }
        })), Le && (Pe = Le), !Le || "selected-before" != FEATURE_IMAGES && "selected-after" != FEATURE_IMAGES ? !Pe || "always-before" != FEATURE_IMAGES && "always-after" != FEATURE_IMAGES || (Fe = Pe) : (Fe = Le, src = Le), Fe && Fe.each((function() {
            if (!a) {
                var e = $(this).attr("src");
                FEATURE_IMAGES_RESIZE && (e = ge(e, $("#content").width()));
                var t = $("h1.post-title").text(),
                    a = '<img src="' + e + '"/>';
                $(this).parents("table.tr-caption-container").each((function() {
                    $(this).find(".tr-caption").each((function() {
                        a += '<div class="post-feature-image-caption">' + $(this).html() + "</div>"
                    }))
                })), a = '<div class="post-feature-image-wrapper">' + a + "</div>", $(this).hide(), $(this).parents("a").hide(), $(this).parents("table.tr-caption-container").hide(), $(this).parents('div.separator[style!=""]').hide(), -1 != FEATURE_IMAGES.indexOf("-before") ? $(".post .post-header").prepend(a) : $(".post .post-header").append(a), $(".post-feature-image-wrapper img").attr("title", t).attr("alt", t).addClass("loading").on("load error", (function() {
                    $(this).removeClass("loading")
                }))
            }
        }))
    }
    if ($(".post-body img").each((function() {
            var e = $(this).parent();
            e.length && (image_parent_style = e.attr("style"), image_parent_style && e.is("a") && -1 != e.attr("style").indexOf("margin-left") && -1 != e.attr("style").indexOf("margin-right") && e.css("margin-left") == e.css("margin-right") && "none" == e.css("float") && e.css("margin-left", "").css("margin-right", ""))
        })), $(".post-breadcrumb").html((function() {
            for (var e = "", a = 0, i = 0; i < r.label.length && a < MAX_BREADCRUMB_DEPTH; i++) - 1 != $.inArray(r.label[i].url, r.postLabel) && (a++, e && (e += '<span><i class="gis gi-angle-right"></i></span>'), e += '<a href="' + F(r.label[i].slug) + '">' + r.label[i].name + "</a>");
            return e && (e = '<a href="/">' + t("Home") + '</a><span><i class="gis gi-angle-right"></i></span>' + e), e
        })), $(".post-title").html((function() {
            var e = $(this).html();
            return $(".post-body h2").each((function() {
                if ($(this).find("strike").length) return e = '<span class="custom-post-title">' + $(this).html() + "</span>", $(this).remove(), e
            })), e
        })), $(".post-sub-title-wrapper").html((function() {
            var e = "";
            return $(".post-body h3").each((function() {
                if ($(this).find("strike").length) return e = '<h2 class="post-sub-title">' + $(this).html() + "</h2>", $(this).remove(), e
            })), e
        })), $(".post-break-links").length) {
        for (ce = r.label.length - 1; ce >= 0 && !(-1 != $.inArray(r.label[ce].url, r.postLabel) && r.label[ce].count >= NUM_BREAK_LINKS); ce--);
        ce < 0 && (ce = 0);
        var Ve = x(1, r.label[ce].count - NUM_BREAK_LINKS - 1);
        Ve < 1 && (Ve = 1), $.get(o.feed + "/posts/default/-/" + r.label[ce].slug + "?max-results=" + (NUM_BREAK_LINKS + 1) + "&start-index=" + Ve + "&alt=json-in-script", (function(e) {
            if ((e = fe(e)) && 0 != (e = new Ae(e)).entry.length) {
                var t = -1;
                e.entry.length <= NUM_BREAK_LINKS && (t = 0);
                for (var a = 0; a < e.entry.length; a++)
                    if (e.entry[a].id == r.postId) {
                        t = 0;
                        break
                    } - 1 == t && (t = x(0, 1));
                var i = "",
                    n = 0;
                for (a = t; a < e.entry.length && n < NUM_BREAK_LINKS; a++) {
                    var s = e.entry[a];
                    s.id != r.postId && (i += '<div class="post-break-link"><i class="gis gi-angle-right"></i> <a href="' + s.link + '">' + s.title + "</a></div>", n++)
                }
                $(".post-break-links").html(i)
            }
        }), "jsonp")
    }
    var Qe = "";
    if (TABLE_OF_CONTENT && "none" != TABLE_OF_CONTENT) {
        for (var Xe = 2; Xe < 6 && 0 == $(".post-body-inner h" + Xe).length; Xe++);
        if (Xe < 6) {
            var qe = "h" + Xe,
                Ke = "h" + (Xe + 1),
                _e = "h" + (Xe + 2),
                Ge = 0,
                We = 0;
            $(".post-body-inner " + qe + ", .post-body-inner " + Ke + ", .post-body-inner " + _e).each((function() {
                var e = $(this).attr("id");
                void 0 !== e && e || (e = function(e) {
                    e = (e = $.trim(e)).toLowerCase();
                    for (var t = 0; t < e.length; t++) {
                        var a = e.charCodeAt(t);
                        a >= 97 && a <= 122 || a >= 48 && a <= 57 && 0 != t || (e = e.replaceAll(e[t], "-"))
                    }
                    return e
                }($(this).text()), $(this).is(Ke) && (e = Ke + "-" + e), $(this).is(_e) && (e = _e + "-" + e), $(this).addClass("nake-id")), $(this).attr("id", e), $(this).is(qe) ? (Ge++, $(this).attr("data-" + qe, Ge)) : $(this).is(Ke) ? (We++, $(this).attr("data-" + Ke, We), $(this).addClass(Ke + "-" + Ge)) : $(this).addClass(_e + "-" + We)
            })), $(".post-body-inner " + qe).each((function() {
                Qe += '<li><a href="#' + $(this).attr("id") + '">' + $(this).text() + "</a>";
                var e = $(this).attr("data-" + qe);
                $("." + Ke + "-" + e).length && (Qe += "<ol>", $("." + Ke + "-" + e).each((function() {
                    Qe += '<li><a href="#' + $(this).attr("id") + '">' + $(this).text() + "</a>";
                    var e = $(this).attr("data-" + Ke);
                    $("." + _e + "-" + e).length && (Qe += "<ol>", $("." + _e + "-" + e).each((function() {
                        Qe += '<li><a href="#' + $(this).attr("id") + '">' + $(this).text() + "</a></li>"
                    })), Qe += "</ol>"), Qe += "</li>"
                })), Qe += "</ol>"), Qe += "</li>"
            })), Qe && (Qe = '<a class="toc-toggle active" href="javascript:void(0)"><i class="gis gi-angle-up"></i></a><ol>' + Qe + "</ol>", Qe = '<div id="toc" class="toc-' + TABLE_OF_CONTENT + '"><h2>' + t("Table of Content") + "</h2>" + Qe + "</div>"), $("#toc a").click((function() {
                var e = $(this).attr("href");
                y($(e), 0)
            })), $(document).on("click", ".toc-toggle", (function() {
                $(this).is(".active") ? ($(this).removeClass("active"), $(this).find("i.gi").removeClass("gi-angle-up").addClass("gi-angle-down"), $("#toc ol").stop().slideUp()) : ($(this).addClass("active"), $(this).find("i.gi").removeClass("gi-angle-down").addClass("gi-angle-up"), $("#toc ol").stop().slideDown())
            }))
        }
    }
    $(".post-body-inner").each((function() {
        var e = $(this).html(),
            t = !1;
        if (e.has("[contact]") && (e = e.replace("[contact]", '<div class="blogger-contact-form"></div>'), t = !0), e.has("[full_width]") && (e = e.replaceAll("[full_width]", '<style type="text/css">#content{float:none!important;width:100%!important}#main-sidebar{display:none!important}</style>'), t = !0), e.has("[sidebar_left]") && (e = e.replaceAll("[sidebar_left]", '<style type="text/css">#content{float:right!important}#main-sidebar{float:left!important}</style>'), t = !0), e.has("[sidebar_right]") && (e = e.replaceAll("[sidebar_right]", '<style type="text/css">#content{float:left!important}#main-sidebar{float:right!important}</style>'), t = !0), e.has("[no_toc]") && (e = e.replaceAll("[no_toc]", ""), t = !0, Qe = ""), Q() && (e.has("[post_ads]") && ("none" == SHOW_INNER_POST_ADS_AT ? e = e.replaceAll("[post_ads]", "") : (e = e.replaceAll("[post_ads]", '<div class="inner-post-ads"></div>'), t = !0)), e.has("[post_ads_2]") && ("none" == SHOW_INNER_POST_ADS_AT ? e = e.replaceAll("[post_ads_2]", "") : (e = e.replaceAll("[post_ads_2]", '<div class="inner-post-ads-2"></div>'), t = !0))), t && ($(this).html(e), $("#ContactForm1").appendTo($(".post-body-inner .blogger-contact-form"))), Q()) {
            if ("br_tag" == SHOW_INNER_POST_ADS_AT) {
                var a = 0;
                $(".post-body-inner br").each((function() {
                    4 == ++a && 0 == $(".inner-post-ads").length && $('<div class="inner-post-ads"></div>').insertAfter($(this)), 8 == a && 0 == $(".inner-post-ads-2").length && $('<div class="inner-post-ads-2"></div>').insertAfter($(this))
                }))
            } else if ("p_tag" == SHOW_INNER_POST_ADS_AT) {
                var i = 0;
                $(".post-body-inner p").each((function() {
                    4 == ++i && 0 == $(".inner-post-ads").length && $('<div class="inner-post-ads"></div>').insertAfter($(this)), 8 == i && 0 == $(".inner-post-ads-2").length && $('<div class="inner-post-ads-2"></div>').insertAfter($(this))
                }))
            } else if ("middle" == SHOW_INNER_POST_ADS_AT) {
                var n = $(".post-body-inner br").length + $(".post-body-inner p").length,
                    s = 0,
                    r = d.length + h.length;
                r && $(".post-body-inner br, .post-body-inner p").each((function() {
                    ++s == Math.floor(n / (r + 1)) && 0 == $(".inner-post-ads").length && $('<div class="inner-post-ads"></div>').insertAfter($(this)), s == r * Math.floor(n / (r + 1)) && 0 == $(".inner-post-ads-2").length && $('<div class="inner-post-ads-2"></div>').insertAfter($(this))
                }))
            }
        } else d.remove(), h.remove();
        0 == $(".inner-post-ads").length || 0 == d.length || d.is(":empty") || 0 == $.trim(d.html()).length ? ($(".inner-post-ads").remove(), d.remove()) : (Inner_Post_Ads_Height = 0, Inner_Post_Ads_Prev_Height = 0, Inner_Post_Ads_Stable = 0, d.css("visibility", "hidden"), Inner_Post_Ads_Monitor = setInterval((function() {
            if (Inner_Post_Ads_Height = d.height(), Inner_Post_Ads_Height) {
                if (Inner_Post_Ads_Height != Inner_Post_Ads_Prev_Height) return Inner_Post_Ads_Prev_Height = Inner_Post_Ads_Height, void(Inner_Post_Ads_Stable = 0);
                Inner_Post_Ads_Stable++, Inner_Post_Ads_Stable >= 5 && (clearInterval(Inner_Post_Ads_Monitor), d.appendTo($(".inner-post-ads")), d.css("visibility", "visible"))
            }
        }), DELAY_AD_LOAD)), 0 == $(".inner-post-ads-2").length || 0 == h.length || h.is(":empty") || 0 == $.trim(h.html()).length ? ($(".inner-post-ads-2").remove(), h.remove()) : (Inner_Post_Ads_2_Height = 0, Inner_Post_Ads_2_Prev_Height = 0, Inner_Post_Ads_2_Stable = 0, h.css("visibility", "hidden"), Inner_Post_Ads_2_Monitor = setInterval((function() {
            if (Inner_Post_Ads_2_Height = h.height(), Inner_Post_Ads_2_Height) {
                if (Inner_Post_Ads_2_Height != Inner_Post_Ads_2_Prev_Height) return Inner_Post_Ads_2_Prev_Height = Inner_Post_Ads_2_Height, void(Inner_Post_Ads_2_Stable = 0);
                Inner_Post_Ads_2_Stable++, Inner_Post_Ads_2_Stable >= 5 && (clearInterval(Inner_Post_Ads_2_Monitor), h.appendTo($(".inner-post-ads-2")), h.css("visibility", "visible"))
            }
        }), DELAY_AD_LOAD))
    }));
    var Ye = b(o.current) + "?id=" + r.postId,
        Je = !1;

    function Ze(e, t) {
        $(".post-page.active").removeClass("active"), $(".post-page-button-number.active").removeClass("active"), $(".post-page-button-" + t).addClass("active"), $(".post-page-" + t).addClass("active"), t == e ? ($(".post-page-button-prev").removeClass("active").attr("href", "#post-page-number-" + t), $(".post-page-button-next").addClass("active").attr("href", "#post-page-number-" + (t + 1))) : 0 == t ? ($(".post-page-button-prev").addClass("active").attr("href", "#post-page-number-1"), $(".post-page-button-next").removeClass("active").attr("href", "#post-page-number-2")) : ($(".post-page-button-prev").removeClass("active").attr("href", "#post-page-number-" + t), $(".post-page-button-next").removeClass("active").attr("href", "#post-page-number-" + (t + 1)))
    }

    function et(e) {
        var t, a, i = document,
            n = i.getElementById(e);
        i.body.createTextRange ? ((t = i.body.createTextRange()).moveToElementText(n), t.select()) : window.getSelection && (a = window.getSelection(), (t = i.createRange()).selectNodeContents(n), a.removeAllRanges(), a.addRange(t))
    }
    "unlocked" == M("unlocked-" + r.postId) || f(s.referrer) || f(s.id) || s.id != r.postId || f(o.referrer) || (-1 != o.referrer.indexOf("facebook") ? Je = s.referrer == "facebook-" + s.id && !f(s.fbclid) : -1 == o.referrer.indexOf("twitter") && -1 == o.referrer.indexOf("t.co") || (Je = s.referrer == "twitter-" + s.id)), $(".post-body-inner").each((function() {
        var e = $(this).html(),
            i = "magone-lock-start",
            n = "magone-lock-end",
            s = '<span class="' + i + '"></span>',
            o = '<span class="' + n + '"></span>',
            l = "[lock]",
            c = "[/lock]";
        if (e.has("[lock]") && e.has("[/lock]")) {
            if ("unlocked" == M("unlocked-" + r.postId)) return e = e.replaceAll(l, "").replaceAll(c, ""), void $(this).html(e);
            $(this).html($(this).html().replaceAll(l, s).replaceAll(c, o)), j(".post-body-inner ." + i, ".post-body-inner", s), j(".post-body-inner ." + n, ".post-body-inner", o), e = $(this).html();
            for (var d = 0, h = 0, m = 0; m < 100 && -1 != (d = e.indexOf(s, 0)) && -1 != (h = e.indexOf(o, 0)); m++) {
                var p = e.substring(0, d),
                    g = e.substring(h + 37),
                    u = e.substring(d + 39, h);
                Je || (u = '<div class="locked-content shad">                        <div class="inner">                            <div class="overlay overlay-1 bg"></div>                            <div class="overlay overlay-2"></div>                            <i class="color gis gi-lock"></i>                            <h2 class="color locked-content-title">' + t("THIS PREMIUM CONTENT IS LOCKED") + '</h2>                            <h3 class="locked-content-sub-title step-1">' + t("STEP 1: Share to a social network") + '</h3>                            <div class="locked-content-actions">                                <div class="fb-share-button facebook" data-href="' + Ye + "&referrer=facebook-" + r.postId + '" data-layout="button_count" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(Ye + "&referrer=facebook") + '"><i class="gib gi-facebook"></i> Facebook</a></div>                                <a href="https://twitter.com/intent/tweet?url=' + encodeURIComponent(Ye + "&referrer=twitter-" + r.postId) + "&text=" + encodeURIComponent(r.pageTitle) + '" class="twitter" target="_blank">                                    <i class="gib gi-twitter"></i> Tweet                                </a>                            </div>                            <h3 class="locked-content-sub-title step-2">' + t("STEP 2: Click the link on your social network") + "</h3>                            " + a + "                        </div>                    </div>"), e = p + u + g, h = d + 39
            }
            $(this).html(e)
        }
    })), Je && O("unlocked-" + r.postId, "unlocked"), $(".post-body-inner").each((function() {
        var e = $(this).html(),
            i = '<span class="magone-next-page"></span>';
        if (-1 != e.indexOf("[next]") && ($(this).html($(this).html().replaceAll("[next]", i)), $(".post-pagination").length)) {
            j(".post-body-inner .magone-next-page", ".post-body-inner", i), pages = $(this).html().split(i), e = "", nav_html = "";
            for (var n = 0; n < pages.length; n++) {
                var s = "post-page post-page-" + n,
                    r = "post-page-button post-page-button-number post-page-button-" + n;
                0 == n && (s += " active", r += " active"), e += '<div class="' + s + '" id="post-page-' + n + '">' + pages[n] + "</div>", nav_html += '<a href="#post-page-number-' + (n + 1) + '" class="' + r + '" data-id="' + n + '">' + (n + 1) + "</a>"
            }
            if (nav_html = a + '<div class="post-page-buttons"><h4 class="post-section-title">' + t("PAGES") + '</h4><a href="#post-page-number-1" class="post-page-button post-page-button-prev active"><i class="gis gi-angle-left"></i></a>' + nav_html + '<a href="#post-page-number-2" class="post-page-button post-page-button-next" data-max="' + (pages.length - 1) + '"><i class="gis gi-angle-right"></i></a><a href="#post-page-full" class="post-page-button post-page-button-view-all">' + t("View All") + "</a>" + a + "</div>" + a, $(this).html(e), "#post-page-full" == o.hash) return void $(".post-page").addClass("active");
            if ($(".post-pagination").html(nav_html), o.hash.has("#post-page-number-")) {
                var l = o.hash.replace("#post-page-number-", "");
                u(l) && (l = Number(l) - 1) >= 0 && Ze(pages.length - 1, l)
            }
            $(".post-page-button").click((function() {
                if (!$(this).is(".active")) {
                    if (RELOAD_POST_PAGINATION) {
                        var e = $(this).attr("href"),
                            t = o.current.split("#");
                        return window.location.href = t[0] + e, location.reload(), !0
                    }
                    var a = Number($(".post-page-button-next").attr("data-max")),
                        i = Number($(".post-page-button-number.active").attr("data-id"));
                    if ($(this).is(".post-page-button-number")) i = Number($(this).attr("data-id"));
                    else {
                        if ($(this).is(".post-page-button-view-all")) return $(".post-page").addClass("active"), $(".post-page-buttons").remove(), void y(".post-body", 300);
                        $(this).is(".post-page-button-next") ? ++i > a && (i = a) : $(this).is(".post-page-button-prev") && --i < 0 && (i = 0)
                    }
                    Ze(a, i), y(".post-body", 300)
                }
            }))
        }
    })), $(".post-body-inner a").each((function() {
        var e = $.trim($(this).text()),
            t = $(this).html();
        if (0 == e.indexOf("[") && e.lastIndexOf("]") == e.length - 1) {
            var a = (t = t.replace("[", "")).lastIndexOf("]");
            t = t.substring(0, a) + t.substring(a + 1), $(this).html(I(t)).addClass("button")
        }
    })), $(".post-body-inner .button").each((function() {
        var e = $(this).find('[style*="background-color"]');
        e.length && $(this).css("background-color", $(e[0]).css("background-color"));
        var t = $(this).parent('[style*="background-color"]');
        if (t.length)
            for (var a = 0; a < t.length; a++)
                if ($.trim($(t[a]).text()) == $.trim($(this).text())) {
                    $(this).css("background-color", $(t[0]).css("background-color")), $(t[a]).css("background-color", "");
                    break
                } var i = $(this).find('[style*="font-size"]');
        i.length && $(this).css("font-size", $(i[0]).css("font-size"));
        var n = $(this).parent('[style*="color:"]');
        if (n.length)
            for (a = 0; a < n.length; a++)
                if ($.trim($(n[a]).text()) == $.trim($(this).text())) {
                    $(this).css("color", $(n[0]).css("color"));
                    break
                } $(this).append('<span class="button-overlay"></span>')
    })), $(".post-body-inner .button").append('<span class="button-overlay"></span>'), $(".post-body-inner span, .post-body-inner font").each((function() {
        var e = $(this).attr("style"),
            t = $(this).attr("size");
        if ((!$(this).is("span") || void 0 !== e && e && -1 != e.indexOf("font-size") && -1 != e.indexOf("x-large")) && (!$(this).is("font") || void 0 !== t && "6" == t) && (0 != $(this).find("strike").length || $(this).parent().is("strike"))) {
            var a = $(this).text();
            a.length > 3 || $(this).addClass("dropcap color firstcharacter").css("font-size", "").html(a)
        }
    })), $(".post-body-inner strike").each((function() {
        if (0 != $(this).find("span").length) {
            var e = $(this).find("span"),
                t = e.attr("style");
            if (void 0 !== t && t && -1 != t.indexOf("font-size") && -1 != t.indexOf("x-large")) {
                var a = e.text();
                a.length > 3 || (e.addClass("dropcap color firstcharacter").css("font-size", "").html(a), $(this).addClass("dropcap-wrapper"))
            }
        }
    })), $(".post-body-inner blockquote").each((function() {
        var e = $(this).html(),
            t = $.trim($(this).text());
        if (0 == t.indexOf("[") && t.lastIndexOf("]") == t.length - 1) {
            var a = (e = e.replace("[", "")).lastIndexOf("]");
            e = e.substring(0, a) + e.substring(a + 1), $(this).replaceWith('<pre class="code-box">' + e + "</pre>")
        }
    }));
    var tt = 0;
    $(".post-body-inner .code-box").each((function() {
        $(this).attr("id", "pre-" + tt);
        var e = '<div class="clear"></div><div class="pre-header rel">';
        "execCommand" in document ? e += '<a href="javascript:void(0)" class="bg copy-all" data-id="' + tt + '">' + t("Copy All Code") + "</a> " : ("getSelection" in window || "createTextRange" in document.body) && (e += '<a href="javascript:void(0)" class="bg select-all" data-id="' + tt + '">' + t("Select All Code") + "</a> "), e += '<div class="clear"></div></div>', $(e).insertBefore($("#pre-" + tt)), tt++
    })), $(".pre-header .select-all").click((function() {
        et("pre-" + $(this).attr("data-id"))
    })), $(".pre-header .copy-all").click((function() {
        $(this).parent().find(".copy-all-message").stop().remove(), et("pre-" + $(this).attr("data-id"));
        var e = "",
            a = "";
        document.execCommand("Copy") ? (e += t("All codes were copied to your clipboard"), a = "success") : (e += t("Can not copy the codes / texts, please press [CTRL]+[C] (or CMD+C with Mac) to copy"), a = "error"), e = '<div class="copy-all-message abs ' + a + '">' + e + "</div>", $(e).insertAfter($(this));
        var i = $($(this).parent().find(".copy-all-message"));
        setTimeout((function() {
            i.is(".success") && i.fadeOut(2e3)
        }), 1e3)
    })), $(".post-body-inner blockquote").each((function() {
        $(this).html('<div class="blockquote-icon"><i class="gis gi-quote-left"></i></div><div class="blockquote-content">' + $(this).html() + "</div>")
    }));
    var at = 0;
    if ($(".post-body-inner ul").each((function() {
            var e = $(this).children("li");
            if (1 == e.length) {
                var t = e.text();
                if (0 == t.indexOf("[") && t.lastIndexOf("]") == t.length - 1) {
                    switch (t = (t = t.replace("[", "").replace("]", "")).toLowerCase()) {
                        case "tab":
                        case "tabs":
                        case "vtab":
                        case "vtabs":
                        case "accordion":
                        case "toggle":
                        case "toggles":
                        case "col":
                        case "cols":
                        case "column":
                        case "columns":
                        case "message":
                        case "msg":
                            break;
                        default:
                            return
                    }! function(e, t) {
                        var i = "",
                            n = new Object;
                        n.main = new Array, n.sub = new Array;
                        var s = e + "-" + at;
                        $(t).find(">ul>li").each((function() {
                            n.main.push($(this).html())
                        })), $(t).find(">ul>ul").each((function() {
                            const e = $(this).find(">li");
                            e.length > 1 ? n.sub.push("<ul>" + $(this).html() + "</ul>") : 1 == e.length ? n.sub.push(e.html()) : n.sub.push("")
                        }));
                        for (var r = 0; r < n.main.length; r++) n.main[r] = I(n.main[r]), void 0 === n.sub[r] ? n.sub[r] = "" : n.sub[r] = I(n.sub[r]);
                        switch (e) {
                            case "tabs":
                                e = "tab";
                                break;
                            case "vtabs":
                                e = "vtab";
                                break;
                            case "toggle":
                            case "toggles":
                                e = "accordion";
                                break;
                            case "cols":
                            case "column":
                            case "columns":
                                e = "col";
                                break;
                            case "msg":
                                e = "message"
                        }
                        switch (e) {
                            case "tab":
                            case "vtab":
                                for (r = 0; r < n.main.length; r++) i += '<li class="tab-title"><a href="#' + s + "-" + r + '">' + n.main[r] + "</a></li>";
                                for (i = '<ul class="tab-header">' + i + "</ul>", r = 0; r < n.main.length; r++) i += '<div id="' + s + "-" + r + '" class="tab-content"><div class="inner">' + n.sub[r] + "</div></div>";
                                break;
                            case "accordion":
                                for (r = 0; r < n.main.length; r++) i += '<h3><a href="javascript:void(0)" class="accordion-title accordion-title-' + r + '"><span class="accordion-title-text">' + n.main[r] + '</span><i class="gis gi-angle-down accordion-title-icon-inactive accordion-title-icon"></i><i class="gis gi-angle-up accordion-title-icon-active accordion-title-icon"></i></a></h3><div class="accordion-content"><div class="inner">' + n.sub[r] + "</div></div>";
                                break;
                            case "col":
                                for (r = 0; r < n.main.length; r++) i += '<div class="col col-' + r + '">' + n.main[r] + n.sub[r] + "</div>";
                                break;
                            case "message":
                                for (r = 0; r < n.main.length; r++) i += '<div class="message-title">' + n.main[r] + '</div><div class="message-content">' + n.sub[r] + "</div>"
                        }
                        i = a + '<div id="' + s + '" class="shortcode-listing shortcode-' + e + '">' + i + a + "</div>" + a, $(t).replaceWith(i), at++
                    }(t, this)
                }
            }
        })), $(".shortcode-tab").length || $(".shortcode-vtab").length || $(".shortcode-accordion").length) {
        $("head").append('<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" async="true"><\/script>');
        var it = setInterval((function() {
            void 0 !== $.ui && (clearInterval(it), it = null, $(".shortcode-tab").tabs(), $(".shortcode-vtab").tabs(), $(".shortcode-accordion").accordion({
                heightStyle: "content",
                collapsible: !0
            }))
        }), 1e3)
    }
    if ($(".shortcode-col .col.col-1").each((function() {
            var e = $(this).parent().find(".col"),
                t = e.length;
            if (0 != t) {
                var a = $(this).css("margin-left");
                ee() && (a = $(this).css("margin-right"));
                var i = (100 - 100 * (a = Number(a.replace("px", ""))) / $(".post-body-inner").width() * (t - 1)) / t;
                i = i.toFixed(2) - .01, e.css("width", i + "%")
            }
        })), $(".shortcode-message > div").each((function() {
            var e = $(this).find('[style*="background-color"]');
            e.length && $(this).css("background-color", $(e[0]).css("background-color"))
        })), Qe && $(".post-body-inner").prepend(Qe), $(document).find(".post-labels .post-label").each((function() {
            let e = $(this).find(".label-name").text(),
                t = $(this).attr("href").replace("?m=0", "").replace("?m=1", ""),
                a = P(e);
            for (let i of r.label)
                if (i.name == e || i.url == t || i.slug == a) return void $(this).find(".label-count-value").html(i.count);
            $(this).remove()
        })), $(".post-share-buttons-url").on("focus", (function() {
            var e;
            e = $(this), $(e).select(), $(e).mouseup((function() {
                return $(e).unbind("mouseup"), !1
            }))
        })), $(".post-share-buttons-holder .addthis_sharing_toolbox").each((function() {
            -1 != navigator.userAgent.indexOf("UCBrowser") && ($(this).remove(), $(".ie-sharing-buttons").show())
        })), NUM_RELATED_POST && u(NUM_RELATED_POST)) {
        function nt() {
            for (var e = -1, t = new Array, a = -1, i = -1, n = 0; n < r.postLabel.length; n++)
                for (var s = 0; s < r.label.length; s++) r.postLabel[n] == r.label[s].url && (-1 == e && (e = s), r.label[s].count > NUM_RELATED_POST && ((-1 == a || a > r.label[s].count) && (a = r.label[s].count, i = s), t.push(s)));
            if (t.length && (e = "lowest" == RELATED_POST_SOURCE ? i : t[e = x(0, t.length - 1)]), -1 != e) {
                var l = x(1, r.label[e].count - NUM_RELATED_POST - 1);
                return l < 1 && (l = 1), o.feed + "/posts/default/-/" + r.label[e].slug + "?max-results=" + (NUM_RELATED_POST + 1) + "&start-index=" + l + "&alt=json-in-script"
            }
            $(".post-related").remove()
        }

        function st(e) {
            if ((e = fe(e)) && 0 != (e = new Ae(e)).entry.length) {
                var i = -1;
                e.entry.length <= NUM_RELATED_POST && (i = 0);
                for (var n = 0; n < e.entry.length; n++)
                    if (e.entry[n].id == r.postId) {
                        i = 0;
                        break
                    } - 1 == i && (i = x(0, 1));
                var s = "",
                    o = 0;
                if (e.entry.length > 1) {
                    for (n = i; n < e.entry.length && o < NUM_RELATED_POST; n++) {
                        var l = e.entry[n];
                        if (l.id != r.postId) {
                            var c = "";
                            n != e.entry.length - 1 && o != NUM_RELATED_POST - 1 || o % 2 != 0 || (c = "post-related-item-wide"), s += "<div " + wt(o, "post-related-item post-related-item-" + o + " " + c, "shad") + ">" + vt(l) + ut(l) + "</div>", o++
                        }
                    }
                    s += a
                } else s += t("Not found any posts") + a;
                $(".post-related-content").html(s), pe($(".post-related-content .item-thumbnail img"))
            }
        }
        $(".post-related").length && r.postLabel.length && (Ce = '<div class="post-related-inner shad"><div class="shad post-related-header"><h4>' + t("RECOMMENDED FOR YOU") + '</h4><a class="post-related-random-button" href="javascript:void(0)"><i class="gis gi-random"></i></a>' + a + '</div><div class="post-related-content"><div class="loader">Loading...</div></div>' + a + "</div>", $(".post-related").html(Ce), $.get(nt(), (function(e) {
            st(e)
        }), "jsonp"), $(document).on("click", ".post-related-random-button", (function() {
            $(".post-related-content").html('<div class="loader">Loading...</div>'), $.get(nt(), (function(e) {
                st(e)
            }), "jsonp")
        })))
    }

    function rt(e) {
        if ("header-section" == e.section_id) return e.find(".widget-item-control").remove(), $(".header-social-icons").html(e.find(".widget-content").html()), void e.remove();
        e.show()
    }

    function ot(e) {
        var t = "";
        e.length && (t = ' style="width:' + (100 / e.length - .01) + '%"');
        for (var i = 0; i < e.length; i++) {
            0 == i ? e[0].show() : e[i].hide(), $("#" + e[i].id + " > h2").remove(), $("#" + e[i].id + " h2.widget-title").remove(), $("#" + e[i].id + " .feed-widget-header").remove();
            for (var n = "", s = 0; s < e.length; s++) {
                var r = ' class="tab-link';
                s == i && (r += " active"), r += '"';
                for (var o = ' onclick="', l = 0; l < e.length; l++) o += l != s ? "$('#" + e[l].id + "').hide();" : "$('#" + e[l].id + "').show();";
                o += '"', n += '<a href="#' + e[s].id + '-link"' + r + o + t + '>                    <span class="tab-link-inner">' + e[s].title + '                        <span class="tab-link-arrow"></span>                    </span>                </a>'
            }
            $("#" + e[i].id).prepend('<h2 class="tab-title" style="display: block;">' + n + a + "</h2>" + a)
        }
    }

    function lt(e, i) {
        if (n = e, $(window).scrollTop() + $(window).height() >= $(n).offset().top && !e.is(".loading") && e.is(".pending")) {
            var n;
            if (p(i) || (i = 0), e.content_index = i, void 0 === e.content[i] && !e.selectAll) return e.removeClass("pending loading"), void e.find("widget-content").html('<div class="empty">' + t("Not found any posts") + "</div>");
            e.addClass("loading"), e.find(".widget-content").html('<div class="loader">Loading...</div>'), u(e.param.count) || (e.param.count = 6);
            var s = Number(e.param.count),
                l = 1,
                c = "";
            e.selectAll || (c = "/-/" + e.content[i].slug);
            var d = "posts",
                h = "recent";
            p(e.param.source) ? ((d = e.param.source.toLowerCase()).has("random") && (h = "random"), d.has("oldest") && (h = "oldest"), d = d.has("comment") ? "comments" : "posts") : e.param.source = "recent-posts";
            var m = "comments" == d ? r.totalComments : r.totalPosts;
            "oldest" != h && "random" != h || (e.selectAll || (m = V(e.content[i].slug)), -1 == m ? (s = 0, e.nested_json = !0) : l = "oldest" == h ? m - s + 1 : x(1, m - s + 1)), !f(e.param.host) && e.param.host.has(".") ? (e.param.host.has("http://") || e.param.host.has("https://") || 0 == e.param.host.indexOf("//") || (e.param.host = "https://" + e.param.host), !f(e.param.topic) && "false" != e.param.topic && "hide" != e.param.topic && "none" != e.param.topic && "no" != e.param.topic && "true" != e.param.topic && "show" != e.param.topic && "enable" != e.param.topic && "yes" != e.param.topic && isNaN(e.param.topic) && (c = "/-/" + e.param.topic), e.json_url = e.param.host + "/feeds/" + d + "/default" + c + "?alt=json-in-script&max-results=" + s) : e.json_url = o.feed + "/" + d + "/default" + c + "?alt=json-in-script&max-results=" + s;
            var A = 1;
            o.hash.has("#" + e.id + "-p-") && "recent" == h && (u(A = o.hash.replace("#" + e.id + "-p-", "")) ? l = ((A = Number(A)) - 1) * Number(e.param.count) + 1 : A = 1), $.get(e.json_url + "&start-index=" + l, (function(i) {
                if (e.removeClass("loading"), p(e.param.source) && (e.param.source.has("oldest") || e.param.source.has("random")))
                    if (e.param.source.has("comment")) {
                        if (-1 == r.totalComments || void 0 !== e.nested_json && 1 == e.nested_json) {
                            if (!(i = fe(i))) return;
                            return i = new Ae(i), r.totalComments = i.total_entry, lt(e, e.content_index), void(e.nested_json = !1)
                        }
                    } else if (-1 == r.totalPosts || void 0 !== e.nested_json && 1 == e.nested_json) {
                    if (!(i = fe(i))) return;
                    return i = new Ae(i), r.totalPosts = i.total_entry, lt(e, e.content_index), void(e.nested_json = !1)
                }
                Tt(e, i), e.removeClass("pending"), p(e.param.source) && (e.param.source.has("oldest") || e.param.source.has("random")) || "popularposts" == e.type || !g(e.param.pages) || function(e, i, n) {
                    if (i = fe(i))
                        if (0 != (i = new Ae(i)).entry.length) {
                            void 0 === n && (n = 1);
                            var s = Math.ceil(i.total_entry / e.param.count);
                            if (s > 1) {
                                e.attr("data-max_page", s), e.attr("data-total", i.total_entry);
                                for (var r = "", o = 1; o <= s; o++) r += '<a href="#' + e.id + "-p-" + o + '" class="shad feed-widget-pagination-button feed-widget-pagination-button-' + o + '">' + o + "</a>", 1 != o && o != s - 1 || (r += '<span class="feed-widget-pagination-separator feed-widget-pagination-separator-' + o + '">...</span>');
                                r += '<span class="feed-widget-pagination-info"><span class="value">' + i.entry.length + "</span> / " + i.total_entry + " " + t("POSTS") + "</span>", e.find(".feed-widget-pagination").html(r + a), xt(e, n), e.find(".feed-widget-pagination-button").click((function() {
                                    if (!$(this).is(".active")) {
                                        var t = Number($(this).html());
                                        ! function(e, t) {
                                            e.find(".widget-content").html('<div class="loader">Loading...</div>'), $.get(e.json_url + "&start-index=" + ((t - 1) * Number(e.param.count) + 1), (function(t) {
                                                Tt(e, t)
                                            }), "jsonp")
                                        }(e, t), xt(e, t), y(e, 100)
                                    }
                                }))
                            }
                        } else e.addClass("no-post").find(".widget-content").html(t("Not found any post match with your request"))
                }(e, i, A)
            }), "jsonp")
        }
    }

    function ct(e) {
        var i = "",
            n = "",
            s = "",
            r = "",
            o = "",
            l = "";
        if (f(e.param.host) || (o = e.param.host, l = ' target="_blank"'), e.title && (n += '<h2 class="widget-title feed-widget-title">', 1 == e.content.length ? (n += '<a href="' + o + F(e.content[0].slug) + '"' + l + ">" + e.title + "</a>", r += '<div class="feed-widget-viewall"><a href="' + o + F(e.content[0].slug) + '"' + l + "><span>" + t("VIEW ALL") + '</span> <i class="gis gi-chevron-right"></i></a></div>') : e.selectAll ? (n += '<a href="' + o + '/search"' + l + ">" + e.title + "</a>", r += '<div class="feed-widget-viewall"><a href="' + o + '/search"' + l + ">" + t("VIEW ALL") + ' <i class="gis gi-chevron-right"></i></a></div>') : e.content.length && (n += "<span>" + e.title + "</span>", r += '<div class="feed-widget-viewall"><a href="' + o + F(e.content[0].slug) + '"' + l + "><span>" + t("VIEW ALL") + '</span> <i class="gis gi-chevron-right"></i></a></div>'), n += "</h2>"), e.content.length > 1 && !e.selectAll) {
            s += '<div class="feed-widget-labels">', s += '<ul class="bg">';
            for (var c = 0; c < e.content.length; c++) s += '<li><a href="javascript: void(0)" ' + (0 == c ? 'class="active" ' : "") + 'data-i="' + c + '"><span class="check"><i class="gis gi-check"></i></span> ' + e.content[c].name + ' <span class="down"><i class="gis gi-angle-down"></i></span></a></li>';
            s += "</ul>", s += "</div>"
        }
        g(e.param.viewall) || (r = ""), (n || s || r) && (i += '<div class="feed-widget-header">' + n + s + r + a + "</div>"), i += '<div class="widget-content feed-widget-content widget-content-' + e.id + '" id="widget-content-' + e.id + '">', e.content.length ? i += '<div class="loader">Loading...</div>' : e.selectAll || (i += '<div class="empty">' + t("Not found any posts") + "</div>"), i += "</div>" + a, p(e.param.pages) || (e.param.pages = !1), g(e.param.pages) && (i += a + '<div class="feed-widget-pagination"></div>' + a), i += function(e) {
            var t = "",
                a = "#" + e.id;
            if (p(e.param.color)) {
                var i = e.param.color;
                t += a + " a,    " + a + " .color {color: " + i + "}    " + a + " .border,    " + a + " .feed-widget-header {border-color: " + i + "}    " + a + " .bg,    " + a + ".box-title h2.widget-title,    " + a + " .slider-item .item-readmore:hover,    " + a + " .grid-item .item-readmore:hover,    " + a + " .owl-dot.active {background: " + i + "}    " + a + ".box-title h2.widget-title a,    " + a + " .item-labels a,    " + a + " .item-title a,    " + a + " .meta-item,    " + a + " .feed-widget-labels a,    " + a + " .slider-item .item-readmore,    " + a + ".sticky .item-0 a.item-readmore,     " + a + " .grid-item .item-readmore {color: white}    " + a + " .item-sub .item-title a {color:" + $("body").css("color") + "}     " + a + ".sticky .item-sub .item-title a {color:white}    " + a + ' .slider-item .meta-item i[class*="gi"],    ' + a + ' .grid-item .meta-item i[class*="gi"] {color: ' + i + "}    " + a + ".complex .than-0 .item-labels,    " + a + ".blogging .item-labels,    " + a + ".left .item-extra .item-labels,    " + a + ".right .item-extra .item-labels,    " + a + ".ticker .item-labels {background: none}    " + a + ".complex .than-0 .item-labels a,    " + a + ".complex .item-sub .meta-item,    " + a + ".blogging .item-labels a,    " + a + ".left .item-extra .item-labels a,    " + a + ".right .item-extra .item-labels a,    " + a + ".ticker .item-labels a {color: " + i + "}    " + a + ".complex .than-0 .item-title a,    " + a + ".blogging .item-title a,    " + a + ".one .meta-item,    " + a + ".left .item-extra .item-title a,    " + a + ".right .item-extra .item-title a,    " + a + ".ticker .item-title a {color: " + $("body").css("color") + "}    " + a + ".three .meta-item,    " + a + ".blogging .meta-item,    " + a + ".left .item-sub .meta-item,    " + a + ".right .item-sub .meta-item {color: " + $("body").css("color") + "}    "
            }
            return p(e.param.tbg) && "rainbow" != e.param.tbg && (t += a + " .thumbnail-overlay {                background-color: " + e.param.tbg + ";                background-image: -webkit-linear-gradient(135deg," + e.param.tbg + ",#000);                background-image: -moz-linear-gradient(135deg," + e.param.tbg + ",#000);                background-image: -o-linear-gradient(135deg," + e.param.tbg + ",#000);                background-image: linear-gradient(135deg," + e.param.tbg + ",#000);            }"), t && (t = '<style type="text/css">' + t + "</style>"), t
        }(e), e.html(i).show(), (e.content.length || e.selectAll) && lt(e), "left" == e.param.type ? $(a).insertBefore(e) : ("right" == e.param.type || $(a).insertBefore(e), $(a).insertAfter(e))
    }

    function dt(e) {
        if ("followbyemail" == e.type && e.param.desc && e.find(".widget-content").prepend('<div class="desc">' + e.param.desc + "</div>"), "image" == e.type && p(e.param.quote)) {
            e.addClass("quote"), e.prepend('<div class="item-thumbnail quote-background" style="opacity:0"><img src="' + e.content.src + '"/></div>');
            var i = '<div class="quote-icon"><i class="gis gi-quote-left"></i></div><div class="quote-content">' + e.content.caption + '</div><div class="quote-author"> - ';
            e.content.href ? i += '<a href="' + e.content.href + '">' + e.param.quote + "</a>" : i += e.param.quote, i += "</div>" + a, e.find(".widget-content").html(i), e.find(".item-thumbnail").css("height", 117 * e.outerHeight() / 100 + "px"), pe(e.find(".item-thumbnail img")), e.find(".item-thumbnail").animate({
                opacity: .3
            }, 500)
        }
        "html" != e.type || "content-section-2" != e.section_id ? e.show() : function(e) {
            if (G() && !X()) {
                e.addClass("archive-page-feed feed");
                var i = '<div class="clear"></div><div class="archive-page-header"><h2>';
                if (_()) i += "<span>" + t("LABEL") + ": </span>", ARCHIVE_PAGE_FEED_LINKS && (i += '<a target="_blank" href="' + o.feed + "/posts/default/-/" + L(r.canonicalUrl) + '">'), i += "<strong>" + function(e) {
                    e.has("/search/label/") && (e = L(e));
                    for (var t = 0; t < r.label.length; t++)
                        if (r.label[t].slug == e) return r.label[t].name;
                    return !1
                }(r.canonicalUrl) + "</strong>", ARCHIVE_PAGE_FEED_LINKS && (i += ' <i class="gis gi-rss-square"></i>');
                else if (q())
                    if (o.current.has(".html")) {
                        var n = w(r.canonicalUrl),
                            l = n.split("_")[0],
                            c = n.split("_")[1];
                        i += "<span>" + t("ARCHIVE") + ": </span><strong>" + l + "-" + c + "</strong>"
                    } else if (o.path.has("/")) {
                    for (var d = o.path.split("/"), h = (l = 0, c = 0, 0); h < d.length; h++)
                        if (u(d[h]))
                            if (0 == l) l = Number(d[h]);
                            else {
                                if (0 != c) break;
                                c = Number(d[h])
                            } l && (i += "<span>" + t("ARCHIVE") + ": </span><strong>" + l, c && ((c = Number(c)) < 10 && (c = "0" + c), i += "-" + c), i += "</strong>")
                } else l = (l = o.current.split("updated-min=")[1]).split("-")[0], i += "<span>" + t("ARCHIVE") + ": </span><strong>" + l + "</strong>";
                else K() && ("" != s.q ? i += "<span>" + t("SEARCH") + ": </span><strong>" + decodeURIComponent(s.q).replaceAll("+", " ") + "</strong>" : i += "<strong>" + t("ALL POSTS") + "</strong>");
                i += "</h2>" + a + '</div><div class="archive-page-pagination archive-page-pagination-top"></div>' + a + '<div class="archive-page-content widget-content" id="widget-content-' + e.id + '"><div class="loader"></div></div>' + a + '<div class="archive-page-pagination archive-page-pagination-bottom"></div>', e.html(i).show(),
                    function(e) {
                        e.addClass("pending loading"), (!p(e.param.count) || isNaN(e.param.count)) && (e.param.count = 4);
                        var i = 1;
                        o.hash.has("#archive-page-") && (i = Number(o.hash.replace("#archive-page-", ""))), $.get(Ct(e.param.count, i), (function(n) {
                            if (e.removeClass("pending loading"), Tt(e, n), n = fe(n))
                                if (0 != (n = new Ae(n)).entry.length) {
                                    if (!p(s.q) || "" == s.q) {
                                        var r = Math.ceil(n.total_entry / e.param.count);
                                        if (r > 1) {
                                            e.attr("data-max_page", r), e.attr("data-count", e.param.count), e.attr("data-total", n.total_entry);
                                            for (var o = "", l = 1; l <= r; l++) o += '<a href="#archive-page-' + l + '" class="shad archive-page-pagination-button archive-page-pagination-button-' + l + '">' + l + "</a>", 3 != l && l != r - 3 || (o += '<span class="archive-page-pagination-separator archive-page-pagination-separator-' + l + '">...</span>');
                                            o += '<span class="archive-page-pagination-info"><span class="value">' + n.entry.length + "</span> / " + n.total_entry + " " + t("POSTS") + "</span>", $(".archive-page-pagination").html(o + a), Rt(i), $(".archive-page-pagination-button").click((function() {
                                                if ($(this).is(".active")) return !0;
                                                if (ARCHIVE_RELOAD_FOR_CONTENT) return $("html, body").animate({
                                                    scrollTop: 0
                                                }, 10), $("body").animate({
                                                    opacity: .5
                                                }, 100), setTimeout((function() {
                                                    location.reload()
                                                }), 100), !0;
                                                var t = Number($(this).html());
                                                ! function(e, t) {
                                                    var a = Number($(".widget.archive-page-feed").attr("data-count"));
                                                    $(".widget.archive-page-feed .widget-content").html('<div class="loader">Loading...</div>'), $.get(Ct(a, t), (function(t) {
                                                        Tt(e, t)
                                                    }), "jsonp")
                                                }(e, t), Rt(t), y(".archive-page-pagination-top", 100), $(".archive-page-header").length ? y(".archive-page-header", 100) : $(".archive-page-pagination-top").length ? y(".archive-page-pagination-top", 100) : y("#content-section-2", 100)
                                            }))
                                        }
                                    }
                                } else e.addClass("no-post").find(".widget-content").html(t("Not found any post match with your request") + '. <a href="/">' + t("Back Home") + "</a>")
                        }), "jsonp")
                    }(e)
            } else e.remove()
        }(e)
    }

    function ht(e) {
        p(e) || (e = "standard");
        var t = '<i class="gi-solid gi-';
        switch (e) {
            case "video":
                t += "play";
                break;
            case "audio":
                t += "microphone";
                break;
            case "image":
                t += "camera";
                break;
            default:
                t += "newspaper"
        }
        return t + '"></i>'
    }

    function mt(e, t, a) {
        var i = "";
        return e.param.author && void 0 !== e.author ? (void 0 === t && (t = !1), void 0 === a && (a = e.author.uri), "" == a && "Tien Nguyen" == e.author.name && (a = "https://nitro-en.blogspot.com"), t ? v(t) ? t.has(".") && t.has(":") && t.has("http") ? i += '<img class="avatar" src="' + t + '"/>' : i += '<span class="avatar">' + t + "</span>" : i += '<img class="avatar" src="' + e.author.avatar + '"/>' : i += '<i class="gi-regular gi-user gi-lg gi-light"></i>', i += " <span>" + e.author.name + "</span>", f(a) ? '<a class="meta-item meta-item-author" href="#unlink-profile">' + i + "</a>" : '<a href="' + a + '" target="_blank" class="meta-item meta-item-author" rel="noopener noreferrer">' + i + "</a>") : ""
    }

    function pt(e) {
        return e.param.date && void 0 !== e.published ? (date = e.published, '<a class="meta-item meta-item-date" href="' + e.link + '"><i class="gi-regular gi-clock gi-lg gi-light"></i> <span>' + function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            a || (a = "undefined" != typeof FORMAT_DATE ? FORMAT_DATE : "MMM dd, yyyy");
            const i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var s = Math.max(e.lastIndexOf("-"), e.lastIndexOf("+")); - 1 !== s && (e = e.substring(0, s));
            let r = new Date(e);
            const o = {
                yyyy: () => r.getFullYear(),
                yy: () => r.getFullYear() % 1e3,
                MMMM: () => t(n[r.getMonth()]),
                MMM: () => t(n[r.getMonth()].substring(0, 3)),
                MM: () => (r.getMonth() >= 9 ? "" : "0") + (r.getMonth() + 1),
                M: () => r.getMonth() + 1,
                ddd: () => t(i[r.getDay()]),
                dd: () => (r.getDate() > 9 ? "" : "0") + r.getDate(),
                d: () => r.getDate(),
                E: () => t(i[r.getDay()].substring(0, 3)),
                D: () => r.getDate() + ([1, 21, 31].includes(r.getDate()) ? "st" : [2, 22].includes(r.getDate()) ? "nd" : [3, 23].includes(r.getDate()) ? "rd" : "th"),
                hh: () => (r.getHours() % 12).toString().padStart(2, "0"),
                h: () => r.getHours() % 12,
                HH: () => r.getHours().toString().padStart(2, "0"),
                H: () => r.getHours(),
                mm: () => r.getMinutes().toString().padStart(2, "0"),
                ss: () => r.getSeconds().toString().padStart(2, "0"),
                SSS: () => r.getMilliseconds().toString().padStart(3, "0"),
                a: () => r.getHours() < 12 ? "AM" : "PM",
                p: () => r.getHours() < 12 ? "a.m" : "p.m"
            };
            let l = [];
            for (let e in o) - 1 !== a.indexOf(e) && (a = a.replaceAll(e, "[$" + l.length + "$]"), l.push(o[e]()));
            for (let e = 0; e < l.length; e++) a = a.replaceAll("[$" + e + "$]", l[e]);
            return a
        }(date, DATE_FORMAT) + "</span></a>") : ""
    }

    function gt(e) {
        return e.param.comment && void 0 !== e.reply_number ? '<a\tclass="meta-item meta-item-comment-number" href="' + e.link + '#comments"><i class="gi-regular gi-comment gi-flip gi-lg gi-light"></i> <span>' + e.reply_number + "</span></a>" : ""
    }

    function ut(e) {
        return g(e.param.title) ? '<h3 class="item-title"><a href="' + e.link + '">' + e.title + "</a></h3>" : ""
    }

    function ft(e) {
        if (!e.param.snippet || !e.summary) return "";
        var t = e.summary;
        return '<div class="item-snippet">' + (t = u(e.param.snippet) && t.length > Number(e.param.snippet) && Number(e.param.snippet) >= 10 ? t.substring(0, Number(e.param.snippet)) + "..." : t.substring(0, 150) + "...") + "</div>"
    }

    function At(e) {
        return e.param.readmore ? '<div class="item-readmore-wrapper"><a class="item-readmore" href="' + e.link + '#more">' + t("Readmore") + "</a></div>" : ""
    }

    function vt(e, t, a) {
        var i = !1;
        void 0 === a && (a = !1), p(e.param) || (e.param = new Object, e.param.icon = !1), p(t) ? v(t) && t.has("natural-") && (t = t.replace("natural-", ""), i = !0) : t = 1600, isNaN(t) && (t = 1600), -1 != (t = Number(t)) && (e.thumbnail = ge(e.thumbnail, i ? t : 86, !1, !0));
        var n = '<a href="' + e.link + '" class="thumbnail ' + (i ? "natural" : "item") + '-thumbnail">';
        return n += '<img src="' + e.thumbnail + '" alt="' + e.title_attr + '" loading="lazy" decoding="async"/>', a && g(e.param.icon) && void 0 !== e.format && (n += '<span class="item-icon"><span class="item-icon-inner">' + ht(e.format) + "</span></span>"), p(e.param.tbg) && (n += '<span class="thumbnail-overlay"></span>'), n += "</a>", !a && g(e.param.icon) && void 0 !== e.format && (n += '<a href="' + e.link + '" class="item-icon"><span class="item-icon-inner">' + ht(e.format) + "</span></a>"), n
    }

    function bt(e, t) {
        var a = "",
            i = 1,
            n = "",
            s = "";
        if (f(e.param.host) || (n = e.param.host, s = ' target="_blank"'), f(e.cate)) return "";
        if (f(e.param.cate)) return "";
        void 0 === t && (t = ""), u(e.param.cate) && (i = Number(e.param.cate));
        for (var r = 0; r < e.cate.length && r < i; r++) a && (a += "<span>, </span>"), "popularposts" != e.id ? a += '<a href="' + n + F(encodeURIComponent(e.cate[r])) + '"' + s + ">" + e.cate[r] + "</a>" : a = '<a href="' + e.link + '">' + e.cate[r] + "</a>";
        return '<div class="' + t + ' item-labels">' + a + "</div>"
    }

    function wt(e, t, a) {
        p(t) || (t = ""), v(t) && (t = (t = $.trim(t)).split(" ")), A(t) || (t = new Array), p(a) || (a = new Array), v(a) && (a = (a = $.trim(a)).split(" ")), A(a) || (a = new Array);
        var i = "shad item item-" + e;
        e % 2 == 0 && (i += " item-two"), e % 3 == 0 && (i += " item-three"), e % 4 == 0 && (i += " item-four");
        for (var n = 1; n <= e; n++) i += " than-" + (n - 1);
        t.length && (i += " " + t.join(" ")), i = i.split(" ");
        for (var s = 0; s < a.length; s++)
            for (var r in i) i[r] == a[s] && i.splice(r, 1);
        return ' class="' + i.join(" ") + '"'
    }

    function yt(e, t) {
        var a = "";
        if (!e.param.meta || void 0 === e.author && void 0 === e.reply_number && void 0 === e.published) return "";
        p(t) || (t = "acd"), a = t.split("");
        for (var i = 0; i < a.length; i++) "a" == a[i] ? a[i] = mt(e) : "c" == a[i] ? a[i] = gt(e) : "d" == a[i] && (a[i] = pt(e));
        return (a = a.join("")) && (a = '<div class="meta-items">' + a + "</div>"), a
    }

    function xt(e, t) {
        var a = Number(e.attr("data-max_page")),
            i = Number(e.param.count),
            n = Number(e.attr("data-total")),
            s = i * t;
        s >= n && (s = n), e.find(".feed-widget-pagination-info .value").html(s), e.find(".feed-widget-pagination-button.active").removeClass("active"), e.find(".feed-widget-pagination-button-" + t).addClass("active"), e.find(".feed-widget-pagination-separator").hide(), e.find(".feed-widget-pagination-button").hide(), e.find(".feed-widget-pagination-button-" + (t - 1)).show(), e.find(".feed-widget-pagination-button-" + t).show(), e.find(".feed-widget-pagination-button-" + (t + 1)).show(), 1 == t && e.find(".feed-widget-pagination-button-3").show(), t == a && e.find(".feed-widget-pagination-button-" + (a - 2)).show(), a > 4 && (t - 2 > 1 && e.find(".feed-widget-pagination-separator-1").show(), t + 2 < a && e.find(".feed-widget-pagination-separator-" + (a - 1)).show()), e.find(".feed-widget-pagination-button-1").show(), e.find(".feed-widget-pagination-button-" + a).show()
    }

    function Tt(e, i) {
        if (void 0 !== i) {
            if (!(i = fe(i))) return;
            i = new Ae(i)
        } else {
            if (void 0 === e.json) return;
            i = e.json
        }
        if (0 != i.entry.length) {
            p(e.param.icon) || (e.param.icon = !1), p(e.param.title) || (e.param.title = !0), "out-of-thumbnail" != e.param.title && "out-of-thumb" != e.param.title || (e.param.title = "oot");
            var n = e.param;
            n.author = g(n.author), n.comment = g(n.comment), n.date = g(n.date), n.meta = g(n.meta), n.meta ? n.author || n.comment || n.date ? n.meta = !0 : n.meta = !1 : n.author = n.comment = n.date = !1, n.snippet = g(n.snippet), n.readmore = g(n.readmore), n.cate = g(n.cate), !p(n.height) || "auto" != n.height && "0" != n.height ? e.addClass("fix-height") : e.addClass("auto-height"), g(n.icon) ? e.addClass("show-icon") : e.addClass("none-icon");
            var s = "",
                r = "",
                o = "",
                l = "",
                c = "",
                d = 1,
                h = i.entry.length,
                m = 0,
                f = "";
            if ("grid" == n.type) {
                if (i.entry.length > 5)
                    for (d = Math.ceil(i.entry.length / 5), m = 5; m >= 1 && (h = i.entry.length - (d - 1) * m, !(Math.abs(h - m) <= 2)); m -= 1);
                m > 5 && (m = 5, h = i.entry.length - d * m)
            }
            for (var A = 0; A < i.entry.length; A++) {
                var v = i.entry[A];
                switch (v.param = n, n.type) {
                    case "slider":
                        s += '<div class="item slider-item slider-item-' + A + '"><div class="slider-item-inner">' + vt(v, 900) + '<div class="slider-item-content">' + bt(v, "bg") + yt(v, "cad") + ut(v) + ft(v) + At(v) + "</div></div></div>";
                        break;
                    case "sticky":
                        var b = 520;
                        1 == A || 2 == A || 3 == A || !p(n.height) || "auto" != n.height && 0 != n.height || (b = "natural-520"), 4 == A && (s += a), s += "<div " + wt(A, A >= 4 ? " item-extra" : "") + '><div class="item-main">' + vt(v, b) + '<div class="item-content gradient">' + bt(v, "bg") + ("oot" != n.title || 0 != A ? ut(v) : "") + (0 == A ? mt(v, t("By")) : "") + "</div></div>", 0 == A && (n.snippet || n.meta || n.readmore || "oot" == n.title) && (s += '<div class="item-sub bg">' + ("oot" == n.title && 0 == A ? ut(v) : "") + ft(v) + At(v) + yt(v, "cd") + "</div>"), s += "</div>";
                        break;
                    case "complex":
                        b = 450, 0 != A || !p(n.height) || "auto" != n.height && 0 != n.height || (b = "natural-450"), A % 2 == 0 && A >= 4 && (s += a), s += "<div " + wt(A, A >= 4 ? " item-extra" : "") + '><div class="item-main">' + (0 == A ? vt(v, b) : "") + '<div class="item-content' + (0 == A ? " gradient" : "") + '">' + bt(v, 0 == A ? "bg" : "") + ("oot" != n.title || 0 != A ? ut(v) : "") + (0 == A ? mt(v, t("By")) : "") + "</div></div>", 0 == A && (n.snippet || n.meta || n.readmore || "oot" == n.title) && (s += '<div class="item-sub">' + ("oot" == n.title ? ut(v) : "") + ft(v) + At(v) + yt(v, "cd") + "</div>"), s += "</div>";
                        break;
                    case "three":
                        b = 500, 0 != A || !p(n.height) || "auto" != n.height && 0 != n.height || (b = "natural-500"), s = "<div " + wt(A) + '><div class="item-main">' + vt(v, b) + '<div class="item-content gradient">' + bt(v, "bg") + ("oot" != n.title ? ut(v) : "") + "</div></div>", (n.snippet || n.meta || n.readmore || "oot" == n.title) && (s += '<div class="item-sub">' + ("oot" == n.title ? ut(v) : "") + ft(v) + At(v) + yt(v) + "</div>"), s += "</div>", A % 3 == 0 ? o += s : A % 3 == 1 ? l += s : c += s, f += s, r += s, A % 3 == 2 && (r += a);
                        break;
                    case "carousel":
                        s += '<div class="item carousel-item carousel-item-' + A + '"><div class="carousel-item-inner">' + vt(v, 640) + '<div class="carousel-item-content item-content gradient">' + bt(v, "bg") + ut(v) + "</div></div></div>";
                        break;
                    case "blogging":
                        b = 320, 0 != A || !p(n.height) || "auto" != n.height && 0 != n.height || (b = "natural-320"), s += "<div " + wt(A, (v.has_thumbnail ? "" : " no-thumbnail") + (A == i.entry.length - 1 ? " item-last" : "")) + ">" + (v.has_thumbnail ? vt(v, b, !0) : "") + '<div class="item-content">' + bt(v) + ut(v) + yt(v) + '<div class="item-sub">' + ft(v) + At(v) + "</div>" + a + "</div>" + a + "</div>";
                        break;
                    case "one":
                        b = 900, !p(n.height) || "auto" != n.height && 0 != n.height || (b = "natural-900"), s += "<div " + wt(A, A == i.entry.length - 1 ? " item-last" : "") + '><div class="item-main">' + vt(v, b) + '<div class="item-content gradient">' + bt(v, "bg") + ("oot" != n.title ? ut(v) : "") + "</div></div>", (n.snippet || n.meta || n.readmore || "oot" == n.title) && (s += '<div class="item-sub">' + ("oot" == n.title ? ut(v) : "") + yt(v) + ft(v) + At(v) + "</div>" + a), s += "</div>";
                        break;
                    case "left":
                    case "right":
                        b = 450, !p(n.height) || "auto" != n.height && "0" != n.height || (b = "natural-450"), s += "<div " + wt(A, A > 0 ? " item-extra" : "") + '><div class="item-main">' + (0 == A ? vt(v, b) : "") + '<div class="item-content' + (0 == A ? " gradient" : "") + '">' + bt(v, 0 == A ? "bg" : "") + ("oot" != n.title || 0 != A ? ut(v) : "") + (0 == A ? mt(v, t("By")) : "") + "</div></div>", 0 == A && (n.snippet || n.meta || n.readmore || "oot" == n.title) && (s += '<div class="item-sub">' + ("oot" == n.title ? ut(v) : "") + ft(v) + At(v) + yt(v, "cd") + "</div>" + a), s += "</div>";
                        break;
                    case "two":
                        b = 450, !p(n.height) || "auto" != n.height && "0" != n.height || (b = "natural-450"), s = "<div " + wt(A) + '><div class="item-main">' + vt(v, b) + '<div class="item-content gradient">' + bt(v, "bg") + ("oot" != n.title ? ut(v) : "") + mt(v, t("By")) + "</div></div>", (n.snippet || n.meta || n.readmore || "oot" == n.title) && (s += '<div class="item-sub">' + ("oot" == n.title ? ut(v) : "") + ft(v) + At(v) + yt(v, "cd") + "</div>" + a), s += "</div>", A % 2 ? l += s : o += s, f += s, r += s, A % 2 == 1 && (r += a);
                        break;
                    case "ticker":
                        b = 320, p(n.height) && u(n.height) && Number(n.height) > 0 && (b = Number(n.height)), s += '<div class="ticker-item carousel-item-' + A + '"><div class="ticker-item-inner">' + vt(v, b) + '<div class="ticker-item-content">' + bt(v) + ut(v) + "</div></div></div>";
                        break;
                    case "grid":
                        var w = 0;
                        A >= h && (w = Math.ceil((A + 1 - h) / m));
                        var y = 0;
                        w >= 1 && (y = (w - 1) * m + h);
                        var x = 0 == w ? h : m,
                            T = w % 2 ? "odd" : "even",
                            C = "even" == T ? y + 1 : y + x - 1;
                        if (A == y) {
                            A > 0 && (s += a + "</div>" + a + "</div>"), s += '<div class="grid-page">';
                            var R = "";
                            p(n.height) && u(n.height) && (R += ' style="height:' + n.height + 'px"'), s += '<div class="grid-sub grid-sub-' + (1 == i.entry.length ? "full" : "even" == T ? "wide" : "narrow") + " grid-sub-" + ("even" == T ? 1 : x - 1) + '"' + R + ">"
                        }
                        var D = y;
                        A == C && (s += a + "</div>", R = "", p(n.height) && u(n.height) && (R += ' style="height:' + n.height + 'px"'), s += '<div class="grid-sub grid-sub-' + (1 == i.entry.length ? "full" : "even" == T ? "narrow" : "wide") + " grid-sub-" + ("even" == T ? x - 1 : 1) + '"' + R + ">"), A >= C && (D = C), s += '<div class="item grid-item grid-item-' + A + " grid-sub-item-" + (A - D) + '"><div class="grid-item-inner">' + vt(v, 500) + '<div class="grid-item-content item-content gradient">' + bt(v, "bg") + yt(v) + ut(v) + ft(v) + At(v) + "</div></div></div>", A == i.entry.length - 1 && (s += a + "</div>" + a + "</div>");
                        break;
                    case "list":
                        s += "<div " + wt(A, " table") + '>                        <div class="tr">                            <div class="td">                                <h2 class="item-title">                                    <a href="' + v.link + '">                                        ' + (g(n.author) && p(v.author) ? '<span class="meta-item meta-item-author">' + v.author.name + ":</span>" : "") + '                                        <span class="title-name">' + v.title + "</span>                                        " + (g(n.comment) && p(v.reply_number) ? '<span class="color meta-item mete-item-comment-number"><i class="gi-regular gi-comment gi-flip gi-lg gi-light"></i> ' + v.reply_number + "</span>" : "") + "                                    </a>                                </h2>                                " + (g(n.date) && p(v.published) ? '<span class="meta-item meta-item-date">' + pt(v) + "</span>" : "") + "                            </div>                            " + (g(n.readmore) ? '<div class="td item-readmore" style="width:1em;">                                <a href="' + v.link + '#more"><i class="gis gi-angle-right"></i></a>                            </div>' : "") + "                        </div>                    </div>" + a
                }
            }
            if ("two" == n.type && (s = !p(n.height) || "auto" != n.height && "0" != n.height ? r : '<div class="two-col two-col-left col-1">' + o + '</div><div class="two-col two-col-right col-2">' + l + '</div><div class="two-col-mobile mobile">' + f + "</div>"), "three" == n.type && (s = !p(n.height) || "auto" != n.height && "0" != n.height ? r : '<div class="three-col col-1">' + o + '</div><div class="three-col col-2">' + l + '</div><div class="three-col col-3">' + c + '</div><div class="three-col-mobile mobile">' + f + "</div>"), e.find(".widget-content").html(s).css("opacity", 0).each((function() {
                    u(n.height) && Number(n.height) > 0 && ($("#widget-content-" + e.id + " .item-thumbnail").css("height", n.height + "px"), "slider" == n.type || "carousel" == n.type ? $("#widget-content-" + e.id + " ." + n.type + "-item").css("height", n.height + "px") : "sticky" == n.type && $("#widget-content-" + e.id + " .item-1 .item-thumbnail,#widget-content-" + e.id + " .item-2 .item-thumbnail,#widget-content-" + e.id + " .item-3 .item-thumbnail").removeAttr("style")), pe($(this).find(".item-thumbnail img"))
                })).animate({
                    opacity: 1
                }, 1e3), p(n.tbg) && "rainbow" == n.tbg) {
                var S = 0;
                e.find(".thumbnail-overlay").each((function() {
                    var e = "background-color: " + THUMBNAIL_RAINBOW_COLORS[S].split(",")[0] + ";                background-image: -webkit-linear-gradient(135deg," + THUMBNAIL_RAINBOW_COLORS[S] + ");                background-image: -moz-linear-gradient(135deg," + THUMBNAIL_RAINBOW_COLORS[S] + ");                background-image: -o-linear-gradient(135deg," + THUMBNAIL_RAINBOW_COLORS[S] + ");                background-image: linear-gradient(135deg," + THUMBNAIL_RAINBOW_COLORS[S] + ");";
                    $(this).attr("style", e), ++S == THUMBNAIL_RAINBOW_COLORS.length && (S = 0)
                }))
            }
            switch (n.type) {
                case "slider":
                case "carousel":
                case "ticker":
                    var E = new Object;
                    E.responsive = new Object, E.responsive[0] = new Object, E.responsive[499] = new Object, E.responsive[699] = new Object, E.responsive[899] = new Object;
                    var k = "slider" == n.type ? 1 : 2;
                    if (E.loop = !0, E.nav = g(n.buttons), E.dots = "ticker" != n.type && g(n.dots), E.autoplay = !0, E.autoplayHoverPause = !0, E.onTranslated = function() {
                            setTimeout((function() {
                                pe($(document).find("#widget-content-" + e.id + " .item-thumbnail img"), !0)
                            }), 100)
                        }, E.navText = ['<a class="' + n.type + "-button " + n.type + '-button-left" href="javascript:void(0)"><i class="gis gi-angle-left"></i></i></a>', '<a class="' + n.type + "-button " + n.type + '-button-right" href="javascript:void(0)"><i class="gis gi-angle-right"></i></i></a>'], ee() && (E.rtl = !0), u(n.columns)) {
                        var B = Number(n.columns);
                        B > 1 && (k = B)
                    }
                    u(n.title) && e.find(".item-title").css("font-size", n.title + "px"), "undefined" != typeof SliderAnimateIn && "inherit" != SliderAnimateIn && (E.animateIn = SliderAnimateIn), "undefined" != typeof SliderAnimateOut && "inherit" != SliderAnimateOut && (E.animateOut = SliderAnimateOut), "ticker" == n.type && (E.slideBy = i.entry.length), u(n.speed) && (E.autoplayTimeout = Number(n.speed), E.autoplaySpeed = Math.floor(E.autoplayTimeout / 10)), E.items = k, E.responsive[899].items = k, E.responsive[699].items = k > 3 ? 3 : k, E.responsive[499].items = k > 2 ? 2 : k, E.responsive[0].items = 1, p(e.owl) && (e.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"), e.find(".owl-stage-outer").children().unwrap(), e.owl.destroy());
                    var O = $("#widget-content-" + e.id);
                    O.owlCarousel(E), e.owl = O.data("owlCarousel"), setTimeout((function() {
                        pe($(document).find("#widget-content-" + e.id + " .item-thumbnail img"), !0)
                    }), 100)
            }
        }
    }

    function Ct(e, t) {
        var a = o.feed + "/posts/default",
            i = (t - 1) * e + 1,
            n = 0,
            l = 0,
            c = 0,
            d = 0;
        if (_()) a += "/-/" + L(r.canonicalUrl);
        else if (q()) {
            if (o.current.has(".html")) {
                var h = w(r.canonicalUrl);
                c = h.split("_")[0], d = h.split("_")[1], l = Number(d) + 1, n = Number(c)
            } else if (!o.current.has("updated-min")) {
                var m = o.path.split("/");
                c = 0, d = 0;
                for (var g = 0; g < m.length; g++)
                    if (u(m[g]))
                        if (0 == c) c = Number(m[g]);
                        else {
                            if (0 != d) break;
                            d = Number(m[g])
                        } n = Number(c), 0 == d ? (d = 1, l = 1, n = Number(c) + 1) : l = Number(d) + 1
            }
            n && c && (n = Number(n), l = Number(l), c = Number(c), l > 12 && (l = 1, n++), l < 10 && (l = "0" + l), (d = Number(d)) < 10 && (d = "0" + d), s["updated-min"] = c + "-" + d + "-01T00:00:00-08:00", s["updated-max"] = n + "-" + l + "-01T00:00:00-08:00")
        }
        return a += "?alt=json-in-script&start-index=" + i, p(s["updated-min"]) && (a += "&published-min=" + s["updated-min"]), p(s["updated-max"]) && (a += "&published-max=" + s["updated-max"]), p(s.q) && "" != s.q ? (a += "&q=" + s.q, p(s.orderby) ? a += "&orderby=" + s.orderby : a += "&orderby=relevance", a += "&max-results=999999") : a += "&max-results=" + e, a
    }

    function Rt(e) {
        var t = Number($(".widget.archive-page-feed").attr("data-max_page")),
            a = Number($(".widget.archive-page-feed").attr("data-count")),
            i = Number($(".widget.archive-page-feed").attr("data-total")),
            n = a * e;
        n >= i && (n = i), $(".archive-page-pagination-info .value").html(n), $(".archive-page-pagination-button.active").removeClass("active"), $(".archive-page-pagination-button-" + e).addClass("active"), $(".archive-page-pagination-separator").hide(), $(".archive-page-pagination-button").hide(), $(".archive-page-pagination-button-1").show(), $(".archive-page-pagination-button-2").show(), $(".archive-page-pagination-button-3").show(), $(".archive-page-pagination-button-" + (t - 2)).show(), $(".archive-page-pagination-button-" + (t - 1)).show(), $(".archive-page-pagination-button-" + t).show(), $(".archive-page-pagination-button-" + (e - 1)).show(), $(".archive-page-pagination-button-" + e).show(), $(".archive-page-pagination-button-" + (e + 1)).show(), t > 6 && (e - 2 > 3 && $(".archive-page-pagination-separator-3").show(), e + 2 < t - 2 && $(".archive-page-pagination-separator-" + (t - 3)).show())
    }

    function Dt() {
        $("#main-menu-toggle-mobile").removeClass("active"), $("#header .mobile-menu .menu").stop().hide(), $("#header").removeClass("mobile-menu-opened"), $("#header").css("height", ""), $(".mobile-menu").css("padding-bottom", "")
    }
    $(".tab-link").click((function(e) {
        e.preventDefault();
        var t = $(this).attr("href").replace("-link", "");
        return pe($(t + " .item-thumbnail img")), !1
    })), $(".widget").each((function() {
        (0 == $(this).children("h2").length || f($(this).children("h2").html())) && ($(this).children("h2").remove(), 0 == $(this).find("h2.widget-title").length && $(this).addClass("no-title")), $(this).find("#mc_embed_signup").length && !$(this).find("link").length && ($(this).addClass("FollowByEmail"), $(this).find("#mc_embed_signup").each((function() {
            $(this).addClass("follow-by-email-inner");
            var e = $(this).find("form");
            e.prepend('<table width="100%" cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table>'), e.find('input[type="email"]').addClass("follow-by-email-address").appendTo(e.find("tr")), e.find('input[type="submit"]').addClass("follow-by-email-submit").appendTo(e.find("tr")), e.find("div").remove(), e.find("input").wrap("<td></td>"), f(e.find('input[type="email"]').attr("placeholder")) && e.find('input[type="email"]').attr("placeholder", "Email Address ...")
        })))
    })), CENTERING_MENU_ITEMS && $(".widget.main-menu").addClass("main-menu-center"), $(".menu .menu-item-mega-label").hover((function() {
        if (!$(this).is(".loaded")) {
            var e = $(this);
            e.addClass("loaded"), $.get(o.feed + "/posts/default/-/" + $(this).attr("data-slug") + "?alt=json-in-script&max-results=4", (function(i) {
                ! function(e, i) {
                    if (e = fe(e)) {
                        if (0 == (e = new Ae(e)).total_entry) return i.find(".menu-mega-content").html(t("Not found any posts")), void i.addClass("finished");
                        for (var n = "", s = 0; s < e.entry.length; s++) {
                            var r = e.entry[s];
                            n += '<div class="item item-' + s + '">', n += '<a href="' + r.link + '" class="item-thumbnail"><img src="' + ge(r.thumbnail, 240) + '"/>' + ht(r.format) + "</a>", n += '<a href="' + r.link + '" class="item-title">' + r.title + "</a>", n += a + "</div>"
                        }
                        i.find(".menu-mega-content").html(n), i.addClass("finished"), pe(i.find(".menu-mega-content").find("img"))
                    }
                }(i, e)
            }), "jsonp")
        }
    })), $("#main-menu-toggle").click((function() {
        $(this).is(".active") ? ($(this).removeClass("active"), $("#header .main-menu").stop().slideUp(300)) : ($(this).addClass("active"), $("#header .main-menu").stop().slideDown(300))
    })), $("#main-menu-toggle-mobile").click((function() {
        $(this).is(".active") ? Dt() : ($("#main-menu-toggle-mobile").addClass("active"), $("#header .mobile-menu .menu").stop().slideDown(300), $("#header").addClass("mobile-menu-opened"), $("#header").is(".sticky") && ($("#header").css("height", $(window).height() + "px"), $(".mobile-menu").css("padding-bottom", $(window).height() + "px")))
    })), $(document).on("change", ".header-mode-toggle-checkbox", (function() {
        $(this).is(":checked") ? ($("body").attr("data-mode", "dark"), O("theme-mode", "dark")) : ($("body").attr("data-mode", "light"), O("theme-mode", "light"))
    })), $("#search-toggle").click((function() {
        $(this).is(".active") ? ($(this).removeClass("active"), $(".search-form-wrapper").stop().fadeOut(100)) : ($(this).addClass("active"), $(".search-form-wrapper").stop().fadeIn(100, (function() {
            $(".search-text").focus()
        })))
    })), $(".search-form-overlay, .search-form-label").click((function() {
        $("#search-toggle").removeClass("active"), $(".search-form-wrapper").stop().fadeOut(100)
    })), $("form.search-form").on("submit", (function() {
        return !f($(this).find(".search-text").val()) || ($("#search-toggle").removeClass("active"), $(".search-form-wrapper").stop().fadeOut(100), !1)
    })), $(".feed-widget-labels a").click((function() {
        var e = $(this).parents(".feed-widget-labels");
        if (e.is(".listing")) {
            if ($(this).is(".active")) return void e.find("a").each((function() {
                $(this).is(".active") || $(this).stop().slideUp(100, (function() {
                    e.removeClass("listing")
                }))
            }));
            e.find("a").removeClass("active"), $(this).addClass("active"), e.find("a").each((function() {
                $(this).is(".active") || $(this).stop().slideUp(100, (function() {
                    e.removeClass("listing")
                }))
            })), xe = l[Number($(this).parents(".feed.widget").attr("data-i"))], index = Number($(this).attr("data-i")), xe.addClass("pending"), lt(xe, index), xe.find(".feed-widget-viewall a").attr("href", F(xe.content[index].slug))
        } else e.addClass("listing"), e.find("a").stop().slideDown(100)
    })), $(".copyright-year").html((function() {
        return (new Date).getFullYear()
    })), $(window).scroll((function() {
        $(".widget.feed.pending").each((function() {
            lt(l[Number($(this).attr("data-i"))])
        }))
    })), $(".scroll-up").click((function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    })), $(document).keyup((function(e) {
        27 == e.keyCode && ($("#search-toggle").removeClass("active"), $(".search-form-wrapper").stop().fadeOut(100))
    }));
    var St = $(".wrapper").css("background-color");
    if ("rgb(255, 255, 255)" != St && "#ffffff" != St && "#FFFFFF" != St || $("body").addClass("solid-white"), STICKY_SIDEBAR && "none" != $("#main-sidebar").css("float") && "undefined" == typeof IE) {
        var Et = 0,
            $t = 0;

        function kt() {
            $("#sidebar").removeClass("fix-top fix-bot abs-stay abs-bot").removeAttr("style")
        }

        function Bt() {
            if ("none" != $("#main-sidebar").css("float") && 0 != $("#sidebar").length) {
                var e = $(window),
                    t = e.height(),
                    a = e.scrollTop(),
                    i = t + a,
                    n = $("#content"),
                    s = n.height(),
                    r = n.offset().top,
                    o = s + r,
                    l = $("#sidebar"),
                    c = l.height(),
                    d = l.offset().top,
                    h = d + c;
                if ("static" != l.css("position") && 0 != $t || ($t = l.offset().left), l.css("left", $t + "px"), l.css("width", $("#main-sidebar").width() + "px"), c >= s || a <= r) return kt(), void(Et = a);
                if (c < t) return h >= o ? (l.removeClass("fix-top fix-bot abs-stay abs-bot").addClass("abs-bot"), void(Et = a)) : (l.removeClass("fix-top fix-bot abs-stay abs-bot").addClass("fix-top"), void(Et = a));
                if (i >= o) return l.removeClass("fix-top fix-bot abs-stay abs-bot").addClass("abs-bot"), void(Et = a);
                Et < a ? i >= h ? l.removeClass("fix-top fix-bot abs-stay abs-bot").addClass("fix-bot") : l.removeClass("fix-top fix-bot abs-stay abs-bot").css("top", d - r + "px").addClass("abs-stay") : a <= d ? l.removeClass("fix-top fix-bot abs-stay abs-bot").addClass("fix-top") : l.removeClass("fix-top fix-bot abs-stay abs-bot").css("top", d - r + "px").addClass("abs-stay"), Et = a
            } else kt()
        }
        Bt(), $(window).scroll((function() {
            Bt()
        })), $(window).resize((function() {
            kt()
        })), $(window).resize((function() {
            $("#sidebar").css("width", $("#main-sidebar").width() + "px")
        }))
    }
    var Ot = 0;

    function Mt() {
        var e = $("#header").width(),
            t = $(".main-menu").height();
        $(".main-menu").addClass("sticky-menu"), $(".main-menu").find("ul.menu").css("width", e + "px").css("height", t + "px"), 0 == $(".main-menu-placeholder").length && $('<div class="main-menu-placeholder" style="height:' + t + 'px"></div>').insertAfter($(".main-menu"))
    }

    function Ut() {
        $(".main-menu").removeClass("sticky-menu"), $(".main-menu").find("ul.menu").css("width", ""), $(".main-menu-placeholder").remove()
    }

    function zt() {
        var e = $("#header").height();
        $("#header").addClass("sticky"), $("#header .blog-title").css("width", $(window).width() + "px"), 0 == $(".mobile-menu-placeholder").length && $('<div class="mobile-menu-placeholder" style="height:' + e + 'px"></div>').insertAfter($("#header"))
    }

    function Nt() {
        $("#header").removeClass("sticky"), $("#header .blog-title").css("width", ""), $(".mobile-menu-placeholder").remove()
    }
    "disable" != STICKY_MENU && "undefined" == typeof IE && $(window).scroll((function() {
        if ("none" != $(".main-menu").css("display") && "both" != $("#main-sidebar").css("float") && "none" != $("#main-sidebar").css("float")) {
            var e = $("#header-wide").offset().top,
                t = $(window).scrollTop();
            if (t > e) switch (STICKY_MENU) {
                case "up":
                    t < Ot ? Mt() : Ut();
                    break;
                case "down":
                    t > Ot ? Mt() : Ut();
                    break;
                default:
                    Mt()
            } else Ut();
            Ot = t
        } else Ut()
    }));
    var jt = !1;

    function Ht() {
        var e = new Array;
        $('a[href*=".html"').each((function() {
            var t = $(this).attr("href");
            t.has("_archive.html") || t.has("/p/") || !t.has(o.host) || e.push(t)
        })), 0 == e.length ? window.location.href = o.host : window.location.href = e[x(0, e.length - 1)]
    }
    "disable" != STICKY_MOBILE_MENU && "undefined" == typeof IE && ($(".top-page-wrapper").is(".auto-height") && $("#header").addClass("auto-height"), $(window).scroll((function() {
        if (jt) jt = !1;
        else {
            if ("none" == $(".mobile-menu").css("display") || "both" != $("#main-sidebar").css("float") && "none" != $("#main-sidebar").css("float")) return Dt(), void Nt();
            var e = $("#header-wide").offset().top,
                t = $(window).scrollTop();
            if (t > e) switch (STICKY_MOBILE_MENU) {
                case "up":
                    t < Ot ? zt() : (Dt(), Nt());
                    break;
                case "down":
                    t > Ot ? zt() : (Dt(), Nt());
                    break;
                default:
                    zt()
            } else Nt();
            (Ot = $(window).scrollTop()) != t && (jt = !0)
        }
    }))), $(document).on("click", 'a[href*="#random-post"]', (function(e) {
        e.preventDefault(), $("body").html('<div class="loader"></div>'), $.get(o.feed + "/posts/default?alt=json-in-script&max-results=0", (function(e) {
            (e = fe(e)) && 0 != (e = new Ae(e)).total_entry ? $.get(o.feed + "/posts/default?alt=json-in-script&max-results=1&start-index=" + x(1, e.total_entry), (function(e) {
                (e = fe(e)) ? 0 == (e = new Ae(e)).entry.length ? Ht() : window.location.href = e.entry[0].link: Ht()
            }), "jsonp") : Ht()
        }), "jsonp")
    })), $(".main-loader").length ? $(document).ready((function() {
        var e = setInterval((function() {
            $(".feed.pending.loading").length || $("img.loading").length || (clearInterval(e), e = null, $(".main-loader").remove(), $(".wrapper").animate({
                opacity: 1
            }, 100))
        }), 10)
    })) : $(".wrapper").css("opacity", 1), $(document).ready((function() {
        if (! function() {
                if (o.current.has("cache")) return !0;
                if (void 0 === window.SNEEIT_LICENSE) return !1;
                var e = window.SNEEIT_LICENSE;
                e = e.split("-");
                for (var t = new Array, a = 1; a < e.length; a++) t[a - 1] = e[a][0] + e[e.length - a][1];
                for (a = 1; a < e.length; a++) e[a] = e[a].substr(2);
                e = e.join("");
                var i = "",
                    n = "",
                    s = "",
                    r = -1,
                    l = -1;
                for (a = 0; a < e.length - 1; a += 2) {
                    for (var c = e[a] + e[a + 1], d = 0; d < t.length; d++) {
                        var h = t[d][1] + t[d][0],
                            m = t[d];
                        if (c == h && -1 == r) {
                            r = a;
                            break
                        }
                        if (c == m && -1 != r && -1 == l) {
                            l = a;
                            break
                        }
                    }
                    if (-1 != r && -1 != l) {
                        i = e.substring(0, r), s = e.substring(r, l), n = e.substring(l);
                        break
                    }
                }
                var p = 0;
                for (a = 0; a < s.length - 1 && (c = s[a + 1] + s[a], -1 != (f = t.indexOf(c))); a += 2) p = 10 * p + f;
                if (p > 3) {
                    s = (s = p.toString(2)).substring(1);
                    var g = "";
                    for (a = 0; a < s.length && (c = "", "1" == s[a] ? (c = n.substring(0, 4), n = n.substring(4)) : (c = i.substring(0, 4), i = i.substring(4)), c); a++) g += c;
                    var u = "";
                    for (a = 0; a < g.length - 1; a += 2) {
                        var f;
                        if (c = g[a] + g[a + 1], -1 == (f = t.indexOf(c))) break;
                        u += f
                    }
                    for (g = "", a = 0; a < u.length - 1; a += 2) g += String.fromCharCode(Number(u[a] + u[a + 1]) + 37); - 1 != g.indexOf(".blogspot.") && (g = (g = g.split(".blogspot."))[0] + ".com"), -1 != g.indexOf("www.") && (g = (g = g.split("www."))[1]), -1 != g.indexOf("//") && (g = (g = g.split("//"))[1]), -1 != g.lastIndexOf(".") && (g = g.substring(0, g.lastIndexOf(".")));
                    var A = window.location.hostname;
                    return -1 != A.indexOf(".blogspot.") && (A = (A = A.split(".blogspot."))[0] + ".com"), -1 != A.indexOf("www.") && (A = (A = A.split("www."))[1]), -1 != A.indexOf("//") && (A = (A = A.split("//"))[1]), -1 != A.lastIndexOf(".") && (A = A.substring(0, A.lastIndexOf("."))), g == A
                }
            }()) {
            var e = '<div style="text-align: center;padding: 20px 0 0 0;font-size: 12px!important;text-indent: 0!important;opacity: 1!important;visibility: visible!important;display: block!important;position: static!important;">Designed by <a href="https://nitro-en.blogspot.com" style="font-size: 12px!important;text-indent: 0!important;opacity: 1!important;visibility: visible!important;display: inline-block!important;position: static!important;">Nitro</a></div>';
            $(".wrapper").append(e), setTimeout((function() {
                $(".wrapper").find(">div").last().find(">a").length || $(".wrapper").append(e)
            }), 1e3)
        }
    }))
};