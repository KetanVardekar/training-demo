import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
imgAddress:any="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEX19fUAPHD5ZAD19fYAPHL7YwD49PH29fP09fgBPG/x9vr09vX+YgD9YgD39PPy9vj19PkAPHT3///u9/34+/729fD2ZgDz///59O4APXcAKlz68/T59e8AOG3V4uroXwAAMmXP3+8AJmAAPWwALGXvXQDqXwDp+P8AKFYAMV//8eMANGoAIVMANmj78foALmIANl8oT3K8y9vv+PHjZAD72LX/8tf/8N4AOWHwaADH2eirw9A0WnxIaYlVdpVmgZ6Am6uSqrvdt5XvuIzVXAD+5cnbbiDfejnqm2H1tIH4z6fkejjilF3naBz/3r3qj1Tu1NXcwK3SnnnHdEHqiVryq3Lxl1jyqID1x5r76crohDz9+efckWXpro7tp4HdayzuwInkfUj51qz7/ePpYR9/lK3ZiVX85dXuiFD81p/Zawyixd1vjZsqSmrk/vGhtcMoTmjFVqkWAAAWTUlEQVR4nO1c+3/aSJIXNFILtV4gtSSQACdYgDEG28IG41e8HuzYTuy72/HmwUzmNruezOWS8/3/P121MLbk2JPd+TiG7OmbxE8I/VVVV32rqgXHJUiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIMEfAyYEY8wJKp72Sr4RMNU0QUDNPzUNVZ32Yr4NXNfVdbz/w1r9X9SKSBSwRIYH6cOmiKa9mG8CpFGSX39eS/tHgjjtxXwjOIZ63E0r8sFw2iv5RiAG1/yrYlmy/7wZtN1AmPaCHhqIYG+/JgND5Ye1QHcDfdoremgg4gw/yjK/kVask16d0H85hhzxXtTSMm9ZvOy/o8Q1pr2ghwbxjitpK53mrbSSfnnKtYNpr+gBgTDCqtQ7YRYEelbaUl4I+tcZYo6g70P+aA4SmuZRRU5fQbYqx4HLYfVedYM4VVVdbENEIo+61j8GwmFJHR5YwJC/Ymgdruuaxsx0NzCHECKci+n3QBD4UYOeWTI/YahYvH9kipKE8D0UMdIkkQj/RgP9e5B4gsTCjCzz6Wvw8suhwEnafTZUkaQJo3//8J0wVLG2fsAraR4UTcjPkq20/2LkiGDEu58iIE1w1v5jpOmzLn2AAEKUBEc+SxQTI1pMvFWOiSTqd28zJEqO9uHPp4HmznowpRAydDUYdmUrfQvKSQ+53N0MIbng3q8vmkbgiLNfiCAkjX7kLfk2Q8s/d9rBPSZyMP3LD2uegRztewimwXHN+sKE4LSVocZpdz6DGN6R/8IjuivMeD6EpMZhsv5L2uK/pGjxv0JSvPuJ9NjvDg0NkslsE4Q9iDhCX3UV2Ve+YKgotdf0zlyA6FpX+WmkqV6gzXiy0HVMjGGFRVH+C4aQNA7WRQHrenQzai6q68OXFpgQg/2ntvR/EKIraL2zO/Yg24aQNGpHnkj0WMqQqIvenKRr56N7HHi2IArI3K/dSZDlf4XvDomGhShDqP3fvLWUjz3szbiDhpBEsXlwh39eMeRl/tceQUK0kPIM5yxt1Y7ymvNdGFHyzu8xIfNSKBZr+1QXaOQZzuhH3/IPmxLFs25DEQoHlVvbmBQUvHJXsFEOeoYwFqeEiJjq3gvfUvxjjXqzbkJIFIJgjN4qG/yVnJGhvOdrb7sxorz/yqPt0FpBoJPAeeXzlv+j41GCZtyGCAwo4dcVayK4LYsJmxfrJzH9xqd/WNPc8Bliu62Pzn24FC/feJQSMuMMRUGVxPUDxZIncga2nfJxqB7XYoVimj/zvNBNMdKbRzUZ1MFRgDEmZLaTIRIFUewd+bJ1tf3AV2W59rOHnZ/SMYZy5U9e+BQajI4qssUrh+uQP0AMzTpD1UDvu6wnw48FGysvDnuY6MNu1EutDf4gYEEFLHhekdOK1V0zOI21aWabIafbevNMCXsyVyZT0lD06ro9+tlnzf3QbZkHV/ZtrNuBM3rnQ7wFH8WGyvbgrDMUdG+/Epfb/vOR7baDUROCDTDkWeSBWn9/5LapLo3eQZnM89bBusTNeusiBG4PD+JV7waI6YC0xcA57kLmUFiDn1e6r6nhGq7rvKrI8oaidNeE70PMcLr3rpaO2dDfd0RC2rpGRs99iLFpptp+OR5pOlQTvRc+xKIN2T8nhjPr/hkCQZixrChD66SnChrkcV0S3xyk2e/42uEQPDTQvTdnFZZWLIijnKTOftEEPqo5JwofVS98ZU0wdBesqHLtYB+kmSz7Zz2P1NtOMDxhARfCTm1oN13DmfGjDLorkaa5X7lO9TIbVCgvmoYwiSDS+lvQOt39UaBhanCnNfZInudBh4uYm3EtAwxFqPl6B+FGG5uPhy32cuhJDh63Bh1DOq74h2ue7uqC4x13rbDU4P2fnJlnx6BKVCMQS8CE8rUR/X1PQw6Swkc4Rr357nxdqrtgb+eoxrQra3ScNFXte4ijWKPOaVcGE07kGQjRw6YhYVW8Wj+hoEV1XWgGUvMnljXD0qq7hppEmu7i/yEgovUOeTYJTVsTyd1doxrGk6NCuuBRyRAFVx0Nf4PdF47drO6+J5IZjzGIbTMR5NbPPqzY4tOTHpT8grpYwNrVvFB3VQk71DPI2oEPyZ9nYdR/7qhcHc22nBEZBaltD1/GG8BQ8Blu5HGECiLxODx63Z2o8rTyWw9TjGb8RBjYEEMhO3qubERbFrz/n17sYIKhCohQCltw8pCu8vKNJqj4vonpzEAEilg7rsQ7MvLb9bYe7TbpgmoY9PSvvnJ1IaA0XqPERSKhM04RnAwL6yeKFR2m8ZX3aptGvVQQNK15fKDIk2gLVg7ajioZsx9JRVH1jkBWRwWp8rxpBF507ZiQ3nmFtW7Gwg60jIMIJvZgVZrxfagTakAJf+OkECfljz1XC+g4EyJVNSSn7b0/82UWasMaMe2/a7ZVinF9ZcVAGEvizAZU5FLNeeFHC4q0UtmPtOcFZAiO8bf9v09G+goIn9oZqG1IMvmLp/N7eQwuPMMMBem4xscZ/tqMPELTiOb0/lIJk2AYhRTFZwQNTjVXW4Xc8hMkIG1mh/eiiJzD6BbkWdEUTXGEEucYav+N9FVL0VL4ww+iKHGOW+9nc7nFHVvlxNkNqKKzX0lHodReRcsF5DRZiAk1+caYoXXyQVIpp6r2zlwhU821Vs0ZZcjm2ZgOu7HejMUf9HR1fOYkPP9E1058nt/g5Un9zx8MkSRwBOX3nmYK2WqmtGLPZjhVJQl7mncGbqdMPNSy5NrroE2oilDY/6Tr593rLj8fHgI7OBUlh+jI3HyaSzFk5vdMYRbPnmJ2yoccd2/ao2E79Gxd14kkqoKgqiLo7NpG5NzQhiIfnI7qElSJZnk5O2aYzTbK952UmipAbkli7+3N+UPWK1Qqp0Fbo7qIkGTow7+wTHkzZLNkcFFq29TR1PrKUiYzZphZ2rGdadO5A4RyUnO/pkQYpvnuq5HWJkRAuig0Xx9A2Q+40eQKBBmd1YoBizK57JhhKlPcNKdN5w5QqomnH9nyr71Q5g/fYF1zRSxKzfdnFSs93oOTB9QOhxLIWEEy8p8auUJqzDCXzZZW6tOmcwcoMZxfrWjJpPCV13nRJZDsvPWjj2y2dlURQ/0PXyqHQ6RTCD+SvdfKZjLZMUP2ufgsD9ptxup9qtPj2JiCB63SM5CHNbf3+iSeJeFK8LWzYSC54N3UvmyNt+A1MnNPMJUI/frLPiKIu34QG9TzVvfUbHpEco6Bnxzr71u1tP/CEeuai6mQ32zcIphKze3YAp2x3r4evPLjNRObkkn55vAFaJjY+WA2U+yej3SEHEfTzEEjW7jNMAXBxiEz1VhE7ulLfiNmqI89w8Efntf8cIIfO5wI9aCnU8d1PMkeNEpXUTSKUrXOGlczBDL6zYofIa0ce3R43mWl1O1jJvzLY48QSdOlwBwsLxYy/dsUs9nOhanOCkPqSoFrvq7IPH9jQ6v246j37uW4kpocxuBlqAohxJ4MPcSOs7lqfrAAUTT1hQ0zhVLjCcEiFCuzUEhhYqi9Qyuc614ZCRTZf+0fQOkXMRyIbUbSqr1946msKycIsAeXvogyIcNcDoJNmC1mQIbrAW2PzmvsIP4Nw/TGRx8oW7cYQk7snq/bGitEBC+/2sjl7iIIRi0UGpsmpXQWwg1jyMYU/PWYgrklVIDKRmxnsqJQtj4ee7oenk5H9majVLiHYbVQyPbrhDGcvhEJQb0zttUighO+3ACPjGdBdhjj7akmseP3mNNAyaQmQuZLirA5Oxe2JqjTZchOniEqcsc+65ldT0SZYuPZ6OnKS8fhBizbfdVTBdBpRBVE+6KVgZq+Ot53ED1BcqeutRtYMZtrDCTXnWqbH+kcxahN1n+545z6rQQBlP2D154GSoWI4H31nfloZIF4k83lsrlC1KilbdsVpttARZgSEcKMssHzv0PPCieg/tnQY4fVIIbifHlrIRtjmMllcqVONpeJ/DhTvDSnnCwoDQjR1ipyWv49hizwbHT318U65HlOUFF+0J+LJUFIipnM0sJ/L2eikSdT6tclYaoVhsrmZOu/yRu/S5C1Dv2zUwIm5zT4J9mXkAYzcYa57MLywN4rZiL5MZMpXtjTfYsJVySC87omb3xlE1o/HPWAnKoiBGne3n1ayqSqt2y41H9CHGNrMcowl2kNprsNdYlqH365Gj7c3nzXH6FQhFoXC0iSOMfJl1cWwsCSnUTRahUIzn0um9Qhg2KW/eqqZZNNLW3ZGsaaOKXtCMsm3k/+l+xCw40DjCX7v/zcoxK7jxBzBOc3l5eq0b3G8gKUvFt1HVKfau/OZXLV67ZbNtW4NAVHm1aLGLmOuVa5ZwuylgXk/HT31QdXs0WVEqcpmPXdxlI8y0MULRQ623WJNVQFsb5cykRsyJQNcrhp3aEnaoJzpnx5Q9PEiqBpKmenHtFIIHCaBuX8YGU+l4tpbYgxudz8dl0UVAjLsEsvi5nUFUOgWijM7eZdLE6p3EeSt3+fCVk/2OpCjieeDQLaFTVi2M8ai7lMJs4Q/LSxA0kBsgKWMGidraUJwxyogELq6cBE02KIaa8rp++RMxbvf9xfR1DhQbEu6S6FLF+EhF7N3nhpNmTY+mQzfhBRJE0V9UHrmmGmCvmxsGWgKRBUoX51iPfct3g5RksOO4UgTIFfz8OuADKGcrou1Z+1SnEPZWxzhcXGZX6SEdhnnP+0mKveXIJUig0ypjDfF9nBoLUfwreBiDAEbLCejP/3n4cOPEKSNELaKLAHK41qKkYwC/RyqeLKwI77IKr3S7FcmV0uT+G9s1iS0pqH/nUTPxJEZcV/efRGlQwDGILIprpZ/1RcTEUqh7F9CoVS61M9T2L3iYqcedmKNt+qKQg2jz/21ijVRvs1+RZDCJ/A7+Dog8BOscFGpY4jEPty6Wmqn2ME40Jmrr+ZxxirUd0C1b+5XYrZMNUaPP4gAwkEnR6E95/FbKjw3cP9NyNbb4PtKIRHAdmD7WIBKsGQYJRhqbVTz7MzOHr0zXgoQeqgGHXn6lQGGbpgUHboIjwRw+Yx7JB2mvcrh697rq7rNGA6BAIp5PjWYi4Le3CsUcZbkaWMueVNm3jwGD3OUBRV86KTCfNI+Fiokot7psp84hEZioKwdnXqLlRnMuvL1LrP348CEbE7lrCoqqpo1p815uKFIOPJSqXWbt0ET75TrWCpn8stRSupTlkQHndUI0jrJxvjPCHL1sYGC58H4J4BCy8iFLmeKIqmcQl1YCGa4sN0mE1lG59XbSgV72HImZvFXK4Ued7cTl543BP8grk/UdwWO3UP9cP7v5ltTW+3XYRUyOCgQTdXiqx4T0UBKpQ56F4dCexR93Vh8ttLhVKs3F81HfKY8hQPD65rJl6pHb4bOmA9L2DQYPGSbWxuFTNh/IxWgplCobDU2C3b4ObsqOV9d1GiciOXitQgmdRKXX1Mhsh7ng5TPc9Dcjhfa7K3BnBVFXI70XVVNW3gtxTK6lS8qZ0ptbYHeZZLJE3T7lsy0sxnnWifI5vt7OUfaZ6IcIDa0vH4pDrk9p+AHgR4x/EwgqiIBdU165crrVJY5rIGIQN8wRqH2cLTz5t5kzWjIJMAqBCBGgKHP6f1z9EyEjbvwhPqwUX59gEVYyK5vZN0eqPmH56/Xx+N79cVGRAsk+Tre59bsRKQBZcs889Ssbpn57UYwieK2vUHPQTirg/YTP4TCDasV/ftGVLaNkZHNb/y1/21nmcb7XYY4iTWY8IOzpcvFoqleIkUtimA4dP+nsHKKIzEG4SHicZfEgZwdpfpeje/sxgNUJlUaxOM/wj3sANDqffnHyEzqK7QbuvB+AA3ERyBM+3BbnE+E2aF2wG01Pi8VzdVF66DO3ZKl0GNuObYPwmbVpiCky/3M1GGOSj3IQ+p3zzcIIKxM8R1o+0G/xM4TnC1/1Wcr19uFRdhJexgRawXkwF+K5egsSmCksSsl8vlJ+UnIQYRrIbYHOPycnN7McIQ/pe5ZzZ7o95vzVDUAqEtuTRQXa3tUhJKLszljfKnPnPPcWdpHEFD6QV05xrbq4aps7fZ1U1jr7/AUCx2OsVO8Qatp3FAMI4whLhcWigb7iMVUlC3gzUEV2U1PObMvHG51Vq8bThwLVhXplPcHdimzt5PB4HMWSlWw1+mfheZ1B0PmN8BSf9IygZKW4ndLcl0CSS/3eXiHMTKeIEL3golfKu/V85LEEYcB9Lk5WeQAbmvsLsXWQg29JGKYTZhoVDYmXl78KzfKGVYNojNHJh3LnVaO5u26XmuK3gg4/bAj6Gwv3sq+g+gWsjUA/dxuuCC42AQHsbg2ediJ3xxkNTVWABdmmttgfmQiglIAQ7S5HInx1ptMRn3zzHMzT+z3a+v7iEg6ma+PrhYYbVRJqxtM6XI1sqUFlsrFwPDRKpHiYg0+8nFchG8dpz9/6gNU9V+58mDj2rCZMWFx5hBgSD2Zg4gLOz65sXnRofJ/3FBBLurxDjCn1ypU2T0QH0iQ6SwUY3Vnc58NmzxhrPeP7oPoRhe3LYRVh9yMMyCJaOEkM4+w7davl6+3OmD9cZOCc5ZZT46VqCpuc7C1sWgbsLzQOGpsFXLexBnM3/ccDdgV7K4aXrCQw4yRAOCpobZIWbdESCw1Dc/rRQ7S9nrkBg6XYbpstxip9jfuSzbJkgS9tadjoDM1d2F+flCrtp/AIasA5ldrmMHPbCwwVhwwBYmsHu21SqG7HLXtS37BrDYaSzv7A3qeROEHRU8x0GS/eTZ59ZibhxYH4Agm9lkOp/ywkOOasK7HpnpypcXK63i3BJkBfZCbOp39bpLS8VGY2V3DwKLaapMnyJRklTmnU/DQUy1X83+8RQRY1hlY44BejiGEFcYudVnsO86i6VwrBLGFfYJQsri/PzTpa3dvdUysGMZEi6HhiDQAr3tBaDHxtfVHBtXVL9O4KsoQFTLZHMQbB4m0mBOKg8uL7Y/LxTnF0tXzpjLFQqLix2QlMXqyvbu3mbZkMB04vjuTwgsoDzrg72tYqcUNrlTk+txlSRYY+NLVK+i1S2UMqVSabwlUqlSis09WNfg6aUtPIiyKV9+2v7fz3145dJch2FhebnfX1nZ2t692LtcfVKu23bejMlESAxPLndXwN45dnqktAh/SotRzIUI/7vOHJPe7GJ1xlJ7/kuwn4WPXWJYZuj3lz+X8YPkfUTyeduo11mxMwF8B7Typsmp47YDjd7WKkEkWmj0+/3PcCEAWwzbDDsMuwwXDM9C7MHfEJcMYcEEGNdQq2E9Vf4SsIK6QR5mIzrOuFJ14IuwOA3r1FCSsnuux9Bib4IAAdeEsATX4Oswb4OELxJt3HgMV4Xx1ZSAQdcp9yDvyq9JkmFAOpTCzwAcVuPcddcBWIpa9D1iIXnC99TznJs1wvVx2AcvXCO93XIaX7pxc0a6jbCRY9wAhc+jD8YwbIhx7B8rkgDoBup4oTh+fzn7KTvYpU1Wp0UaMlcdJoYxocjvxhaadDTGHybfRmzKhZ7DPRjDBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBAkSJEiQIEGC/4f4P1PsmiEgmo1qAAAAAElFTkSuQmCC"
}
