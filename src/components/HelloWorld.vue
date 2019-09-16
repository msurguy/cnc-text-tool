<template>
  <div class="hello">
    <input type="text" v-model="text">
    <button @click.prevent="convert">Convert Text</button>
    <svg width="4in" height="4in" id="canvas">
      <path v-for="(path, index) in paths" :key="index" stroke-linejoin="round" stroke="#000" stroke-width="1px" fill="none" :d="path.d" :transform="`translate(${path.x} ${path.y})`"></path>
    </svg>
    <svg ref="EMSNixish" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">

      <metadata>
        Font name: EMS Nixish
        License: SIL Open Font License http://scripts.sil.org/OFL
        Created by: Sheldon B. Michaels
        SVG font conversion by: Windell H. Oskay
        A derivative of: Nixie One
        Designer: Jovanny Lemonad
        Link: http://jovanny.ru
        Google font page: https://fonts.google.com/specimen/Nixie+One
      </metadata>
      <defs>
        <font id="EMSNixish" horiz-adv-x="378">
          <font-face
                  font-family="EMS Nixish"
                  units-per-em="1000"
                  ascent="800"
                  descent="-200"
                  cap-height="500"
                  x-height="300"
          />
          <missing-glyph horiz-adv-x="378"/>
          <glyph unicode=" " glyph-name="space" horiz-adv-x="378"/>
          <glyph unicode="!" glyph-name="exclam" horiz-adv-x="290"
                 d="M 171 690 L 171 202 M 175 94.5 L 149 78.8 L 137 47.2 L 152 28.4 L 171 22 L 193 25.2 L 209 47.2 L 209 75.6 L 197 88.2 L 175 94.5"/>
          <glyph unicode="&#x22;" glyph-name="quotedbl" horiz-adv-x="337"
                 d="M 78.8 693 L 78.8 495 M 208 690 L 208 495"/>
          <glyph unicode="#" glyph-name="numbersign" horiz-adv-x="762"
                 d="M 145 34.6 L 306 687 M 570 693 L 410 34.6 M 614 220 L 34.6 220 M 101 498 L 687 498"/>
          <glyph unicode="$" glyph-name="dollar" horiz-adv-x="636"
                 d="M 63 34.6 L 63 224 L 63 135 L 113 97.6 L 170 59.9 L 239 31.5 L 312 25.2 L 391 31.5 L 454 53.6 L 510 97.6 L 532 148 L 542 198 L 539 239 L 504 287 L 432 328 L 359 350 L 290 369 L 224 387 L 164 410 L 113 438 L 75.6 488 L 63 539 L 75.6 602 L 123 662 L 189 690 L 249 696 L 334 693 L 397 671 L 447 643 L 488 611 L 517 583 L 517 495 L 517 690 M 290 765 L 290 -41"/>
          <glyph unicode="%" glyph-name="percent" horiz-adv-x="794"
                 d="M 183 394 L 220 394 L 265 419 L 296 444 L 318 476 L 331 513 L 334 558 L 328 595 L 306 636 L 271 671 L 227 693 L 186 696 L 132 687 L 78.8 655 L 50.4 605 L 41 551 L 41 501 L 69.3 454 L 107 413 L 142 400 L 183 394 M 551 22 L 589 22 L 633 47.2 L 665 72.4 L 687 104 L 699 142 L 702 186 L 696 224 L 674 265 L 639 296 L 595 318 L 554 324 L 501 315 L 447 284 L 419 233 L 410 180 L 410 129 L 438 81.9 L 476 40.9 L 510 28.4 L 551 22 M 151 34.6 L 580 690"/>
          <glyph unicode="&amp;" glyph-name="ampersand" horiz-adv-x="706"
                 d="M 479 611 L 428 655 L 372 693 L 331 696 L 284 696 L 224 680 L 176 639 L 158 586 L 161 523 L 195 463 L 576 31.5 L 646 31.5 M 268 375 L 198 359 L 123 328 L 63 261 L 44.1 205 L 53.5 139 L 81.9 75.6 L 145 25.2 L 227 9.45 L 309 25.2 L 384 69.3 L 441 120 L 488 189 L 595 346"/>
          <glyph unicode="&apos;" glyph-name="quotesingle" horiz-adv-x="208" d="M 78.8 690 L 78.8 482"/>
          <glyph unicode="(" glyph-name="parenleft" horiz-adv-x="296"
                 d="M 198 -120 L 142 -34.6 L 101 63 L 75.6 170 L 72.5 315 L 78.8 454 L 107 583 L 142 680 L 198 765"/>
          <glyph unicode=")" glyph-name="parenright" horiz-adv-x="293"
                 d="M 50.4 -123 L 107 -34.6 L 148 59.9 L 173 167 L 176 312 L 170 454 L 142 583 L 107 677 L 50.4 762"/>
          <glyph unicode="*" glyph-name="asterisk" horiz-adv-x="466"
                 d="M 208 397 L 208 690 M 69.3 624 L 350 463 M 66.1 463 L 343 624"/>
          <glyph unicode="+" glyph-name="plus" horiz-adv-x="510" d="M 224 132 L 224 517 M 34.6 331 L 419 331"/>
          <glyph unicode="," glyph-name="comma" horiz-adv-x="261"
                 d="M 129 25.2 L 110 22 L 91.4 28.4 L 75.6 47.2 L 85 78.8 L 113 94.5 L 135 88.2 L 145 75.6 L 145 47.2 L 145 9.45 L 142 -25.2 L 129 -47.2 L 113 -69.3 L 81.9 -91.4"/>
          <glyph unicode="-" glyph-name="hyphen" horiz-adv-x="583" d="M 75.6 331 L 463 331"/>
          <glyph unicode="." glyph-name="period" horiz-adv-x="261"
                 d="M 104 94.5 L 78.8 78.8 L 69.3 47.2 L 81.9 28.4 L 104 22 L 123 25.2 L 139 47.2 L 139 75.6 L 126 88.2 L 104 94.5"/>
          <glyph unicode="/" glyph-name="slash" horiz-adv-x="529" d="M 28.4 34.6 L 454 690"/>
          <glyph unicode="0" glyph-name="zero" horiz-adv-x="662"
                 d="M 306 25.2 L 365 31.5 L 438 69.3 L 488 123 L 526 195 L 548 255 L 551 321 L 551 391 L 548 454 L 545 498 L 517 561 L 469 621 L 406 671 L 343 696 L 290 696 L 211 677 L 145 627 L 101 558 L 69.3 485 L 63 403 L 63 309 L 75.6 236 L 91.4 176 L 129 113 L 173 69.3 L 236 31.5 L 306 25.2"/>
          <glyph unicode="1" glyph-name="one" horiz-adv-x="365"
                 d="M 78.8 31.5 L 284 31.5 L 180 31.5 L 180 693 L 31.5 567"/>
          <glyph unicode="2" glyph-name="two" horiz-adv-x="605"
                 d="M 53.5 602 L 101 646 L 164 677 L 230 696 L 299 696 L 362 687 L 416 662 L 463 621 L 495 548 L 491 495 L 469 444 L 406 378 L 318 324 L 227 277 L 154 230 L 107 192 L 69.3 135 L 59.9 97.6 L 59.9 31.5 L 491 31.5 L 491 173"/>
          <glyph unicode="3" glyph-name="three" horiz-adv-x="608"
                 d="M 56.7 120 L 107 75.6 L 170 40.9 L 239 25.2 L 293 25.2 L 359 34.6 L 425 63 L 466 104 L 491 158 L 498 227 L 482 290 L 435 340 L 381 362 L 312 375 L 211 375 L 334 375 L 384 391 L 432 422 L 466 469 L 479 526 L 472 576 L 441 633 L 406 668 L 346 690 L 280 693 L 214 690 L 135 662 L 69.3 614"/>
          <glyph unicode="4" glyph-name="four" horiz-adv-x="592"
                 d="M 205 712 L 202 649 L 192 573 L 183 510 L 158 441 L 126 375 L 88.2 302 L 22 202 L 526 202 L 419 202 L 419 25.2 L 419 507"/>
          <glyph unicode="5" glyph-name="five" horiz-adv-x="583"
                 d="M 69.3 3.15 L 139 9.45 L 227 18.9 L 312 44.1 L 391 81.9 L 447 135 L 482 192 L 485 255 L 482 309 L 457 362 L 419 400 L 359 428 L 277 444 L 183 435 L 117 410 L 72.5 381 L 72.5 687 L 457 687"/>
          <glyph unicode="6" glyph-name="six" horiz-adv-x="608"
                 d="M 81.9 450 L 331 450 L 394 428 L 447 397 L 491 346 L 513 296 L 517 230 L 510 164 L 469 104 L 428 59.9 L 362 28.4 L 287 25.2 L 224 34.6 L 161 69.3 L 101 129 L 63 214 L 56.7 296 L 63 387 L 75.6 438 L 97.6 510 L 145 583 L 211 643 L 284 690 L 362 718 L 441 715"/>
          <glyph unicode="7" glyph-name="seven" horiz-adv-x="482"
                 d="M 3.15 548 L 3.15 687 L 425 687 L 353 554 L 293 447 L 246 334 L 214 255 L 195 189 L 183 123 L 180 34.6"/>
          <glyph unicode="8" glyph-name="eight" horiz-adv-x="649"
                 d="M 299 25.2 L 378 31.5 L 460 59.9 L 523 113 L 548 173 L 539 230 L 507 277 L 460 312 L 406 334 L 312 369 L 230 397 L 154 432 L 113 476 L 88.2 542 L 97.6 602 L 148 662 L 224 690 L 302 699 L 362 693 L 444 668 L 498 617 L 517 564 L 517 504 L 472 447 L 413 413 L 334 384 L 220 346 L 145 315 L 94.5 274 L 66.1 236 L 59.9 158 L 88.2 101 L 135 59.9 L 195 34.6 L 255 25.2 L 299 25.2"/>
          <glyph unicode="9" glyph-name="nine" horiz-adv-x="605"
                 d="M 120 3.15 L 186 6.3 L 255 31.5 L 318 63 L 378 104 L 428 170 L 469 239 L 488 318 L 501 397 L 495 469 L 479 551 L 428 624 L 362 677 L 306 696 L 239 696 L 164 680 L 94.5 633 L 59.9 586 L 44.1 517 L 41 450 L 63 375 L 94.5 334 L 135 302 L 208 274 L 277 268 L 476 268"/>
          <glyph unicode=":" glyph-name="colon" horiz-adv-x="277"
                 d="M 113 501 L 85 488 L 75.6 457 L 91.4 435 L 110 428 L 129 435 L 145 454 L 145 482 L 135 495 L 113 501 M 113 97.6 L 85 81.9 L 75.6 50.4 L 91.4 31.5 L 110 25.2 L 129 28.4 L 145 50.4 L 145 78.8 L 135 91.4 L 113 97.6"/>
          <glyph unicode=";" glyph-name="semicolon" horiz-adv-x="268"
                 d="M 113 501 L 88.2 488 L 78.8 457 L 91.4 438 L 113 432 L 132 435 L 148 457 L 148 485 L 135 495 L 113 501 M 129 28.4 L 110 25.2 L 91.4 31.5 L 75.6 50.4 L 85 81.9 L 113 94.5 L 135 88.2 L 145 75.6 L 145 47.2 L 145 9.45 L 142 -22 L 129 -44.1 L 113 -66.1 L 81.9 -91.4"/>
          <glyph unicode="&#x3c;" glyph-name="less" horiz-adv-x="513" d="M 406 479 L 37.8 268 L 406 53.6"/>
          <glyph unicode="=" glyph-name="equal" horiz-adv-x="586" d="M 72.5 432 L 469 432 M 69.3 233 L 466 233"/>
          <glyph unicode="&#x3e;" glyph-name="greater" horiz-adv-x="513" d="M 56.7 44.1 L 428 258 L 56.7 476"/>
          <glyph unicode="?" glyph-name="question" horiz-adv-x="558"
                 d="M 249 94.5 L 224 81.9 L 211 50.4 L 227 31.5 L 246 25.2 L 268 28.4 L 284 47.2 L 284 75.6 L 271 88.2 L 249 94.5 M 246 198 L 249 243 L 261 277 L 290 309 L 337 346 L 384 384 L 422 422 L 450 463 L 460 501 L 454 551 L 432 608 L 391 655 L 343 684 L 284 699 L 220 696 L 173 687 L 129 671 L 85 643 L 53.5 602 L 37.8 561 L 34.6 513"/>
          <glyph unicode="@" glyph-name="at" horiz-adv-x="926"
                 d="M 611 485 L 611 145 L 558 81.9 L 482 34.6 L 384 25.2 L 296 69.3 L 249 129 L 227 227 L 227 340 L 280 438 L 353 491 L 425 507 L 510 482 L 564 432 L 595 394 L 614 350 L 614 101 L 643 47.2 L 699 22 L 753 34.6 L 797 88.2 L 822 142 L 835 217 L 835 331 L 819 406 L 791 488 L 740 561 L 687 611 L 624 655 L 554 684 L 498 693 L 428 699 L 353 687 L 274 662 L 192 605 L 135 545 L 88.2 463 L 66.1 381 L 53.5 293 L 63 192 L 88.2 94.5 L 129 18.9 L 180 -41 L 261 -101 L 359 -145 L 444 -148 L 539 -145 L 614 -123 L 658 -94.5 L 696 -63"/>
          <glyph unicode="A" glyph-name="A" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5"/>
          <glyph unicode="B" glyph-name="B" horiz-adv-x="662"
                 d="M 31.5 690 L 365 690 L 419 674 L 463 646 L 498 598 L 504 551 L 504 501 L 488 460 L 457 425 L 425 397 L 391 381 L 356 372 L 142 372 L 362 372 L 400 372 L 457 362 L 507 334 L 539 287 L 554 233 L 554 173 L 539 123 L 507 75.6 L 466 47.2 L 419 37.8 L 387 31.5 L 47.2 31.5 L 139 31.5 L 139 687"/>
          <glyph unicode="C" glyph-name="C" horiz-adv-x="699"
                 d="M 595 696 L 595 498 L 595 592 L 536 630 L 482 665 L 425 690 L 359 696 L 296 693 L 227 671 L 158 627 L 104 554 L 69.3 479 L 59.9 400 L 63 299 L 85 214 L 126 139 L 202 69.3 L 293 31.5 L 435 28.4 L 510 50.4 L 561 81.9 L 598 117"/>
          <glyph unicode="D" glyph-name="D" horiz-adv-x="740"
                 d="M 37.8 34.6 L 353 34.6 L 428 53.6 L 495 88.2 L 561 154 L 605 220 L 627 296 L 627 406 L 608 488 L 561 570 L 513 627 L 438 671 L 359 693 L 37.8 693 L 139 693 L 139 37.8"/>
          <glyph unicode="E" glyph-name="E" horiz-adv-x="621"
                 d="M 513 180 L 513 34.6 L 31.5 34.6 L 135 34.6 L 135 365 L 416 365 L 416 447 L 416 284 L 416 365 L 132 365 L 132 687 L 41 687 L 507 687 L 507 548"/>
          <glyph unicode="F" glyph-name="F" horiz-adv-x="589"
                 d="M 37.8 31.5 L 252 31.5 L 142 31.5 L 142 365 L 428 365 L 428 284 L 428 447 L 428 369 L 142 369 L 142 690 L 44.1 690 L 501 690 L 501 548"/>
          <glyph unicode="G" glyph-name="G" horiz-adv-x="772"
                 d="M 504 369 L 702 369 L 598 369 L 598 28.4 L 598 135 L 539 85.1 L 476 47.2 L 403 25.2 L 337 25.2 L 284 31.5 L 208 59.9 L 151 113 L 91.4 195 L 63 312 L 59.9 413 L 91.4 523 L 154 611 L 236 677 L 318 699 L 410 693 L 498 662 L 561 617 L 592 570 L 592 501 L 592 693"/>
          <glyph unicode="H" glyph-name="H" horiz-adv-x="788"
                 d="M 41 31.5 L 236 31.5 L 145 31.5 L 145 687 L 37.8 687 L 236 687 L 145 687 L 145 365 L 589 365 L 589 690 L 498 690 L 690 690 L 592 690 L 592 31.5 L 690 31.5 L 504 31.5"/>
          <glyph unicode="I" glyph-name="I" horiz-adv-x="340"
                 d="M 34.6 31.5 L 243 31.5 L 142 31.5 L 142 693 L 246 693 L 41 693"/>
          <glyph unicode="J" glyph-name="J" horiz-adv-x="520"
                 d="M 18.9 110 L 63 59.9 L 120 28.4 L 173 25.2 L 230 31.5 L 287 59.9 L 324 104 L 334 154 L 340 205 L 340 687 L 236 687 L 438 687"/>
          <glyph unicode="K" glyph-name="K" horiz-adv-x="699"
                 d="M 37.8 687 L 236 687 L 139 687 L 139 31.5 L 41 31.5 L 230 31.5 L 139 31.5 L 139 268 L 532 687 L 621 687 L 410 687 L 532 687 L 277 416 L 561 31.5 L 649 31.5 L 450 31.5"/>
          <glyph unicode="L" glyph-name="L" horiz-adv-x="586"
                 d="M 37.8 693 L 261 693 L 142 693 L 142 34.6 L 41 34.6 L 510 34.6 L 510 173"/>
          <glyph unicode="M" glyph-name="M" horiz-adv-x="976"
                 d="M 37.8 31.5 L 233 31.5 L 142 31.5 L 142 687 L 41 687 L 164 687 L 460 37.8 L 762 690 L 879 690 L 775 690 L 775 31.5 L 690 31.5 L 879 31.5"/>
          <glyph unicode="N" glyph-name="N" horiz-adv-x="794"
                 d="M 41 34.6 L 230 34.6 L 142 34.6 L 142 687 L 37.8 687 L 154 687 L 583 31.5 L 699 31.5 L 598 31.5 L 598 690 L 510 690 L 699 690"/>
          <glyph unicode="O" glyph-name="O" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2"/>
          <glyph unicode="P" glyph-name="P" horiz-adv-x="649"
                 d="M 41 31.5 L 255 31.5 L 145 31.5 L 145 687 L 44.1 687 L 394 687 L 444 677 L 495 649 L 532 611 L 554 554 L 554 482 L 542 403 L 507 346 L 454 315 L 391 306 L 148 306"/>
          <glyph unicode="Q" glyph-name="Q" horiz-adv-x="794"
                 d="M 287 34.6 L 211 59.9 L 139 120 L 81.9 208 L 63 293 L 53.5 384 L 78.8 507 L 129 595 L 217 668 L 318 696 L 419 696 L 513 668 L 573 624 L 624 570 L 662 488 L 677 406 L 680 309 L 658 224 L 614 145 L 554 81.9 L 488 44.1 L 419 28.4 L 346 25.2 L 296 34.6 L 287 47.2 L 315 104 L 372 126 L 413 113 L 438 78.8 L 454 9.45 L 476 -31.5 L 513 -56.7 L 558 -50.4 L 592 -31.5"/>
          <glyph unicode="R" glyph-name="R" horiz-adv-x="696"
                 d="M 47.2 34.6 L 246 34.6 L 145 34.6 L 145 687 L 47.2 687 L 397 687 L 457 674 L 504 649 L 545 598 L 558 542 L 554 491 L 539 428 L 510 394 L 469 362 L 416 350 L 145 350 L 324 350 L 554 31.5 L 444 31.5 L 636 31.5"/>
          <glyph unicode="S" glyph-name="S" horiz-adv-x="665"
                 d="M 78.8 31.5 L 78.8 224 L 78.8 129 L 120 97.6 L 192 53.6 L 277 28.4 L 375 25.2 L 457 47.2 L 520 94.5 L 548 151 L 554 230 L 520 290 L 454 328 L 372 353 L 243 391 L 142 428 L 97.6 466 L 72.5 517 L 78.8 589 L 113 646 L 167 680 L 243 693 L 340 693 L 406 671 L 457 639 L 498 608 L 529 576 L 529 498 L 529 693"/>
          <glyph unicode="T" glyph-name="T" horiz-adv-x="630"
                 d="M 192 31.5 L 400 31.5 L 290 31.5 L 290 687 L 31.5 687 L 31.5 539 L 31.5 687 L 554 687 L 554 539"/>
          <glyph unicode="U" glyph-name="U" horiz-adv-x="778"
                 d="M 22 690 L 211 690 L 126 690 L 126 208 L 142 158 L 173 110 L 220 69.3 L 274 37.8 L 334 25.2 L 403 25.2 L 469 50.4 L 526 88.2 L 570 132 L 592 180 L 598 227 L 598 687 L 504 687 L 699 687"/>
          <glyph unicode="V" glyph-name="V" horiz-adv-x="734"
                 d="M -3.15 690 L 186 690 L 81.9 690 L 340 31.5 L 595 687 L 498 687 L 693 687"/>
          <glyph unicode="W" glyph-name="W" horiz-adv-x="1011.2"
                 d="M -3.15 693 L 183 693 L 85 693 L 290 28.4 L 479 693 L 671 28.4 L 882 690 L 784 690 L 964 690"/>
          <glyph unicode="X" glyph-name="X" horiz-adv-x="668"
                 d="M 6.3 34.6 L 198 34.6 L 91.4 34.6 L 523 687 L 605 687 L 413 687 M 9.45 690 L 205 690 L 107 690 L 536 34.6 L 614 34.6 L 428 34.6"/>
          <glyph unicode="Y" glyph-name="Y" horiz-adv-x="649"
                 d="M 205 31.5 L 400 31.5 L 293 31.5 L 293 321 L 81.9 687 L -3.15 687 L 186 687 L 81.9 687 L 293 318 L 507 690 L 416 690 L 602 690"/>
          <glyph unicode="Z" glyph-name="Z" horiz-adv-x="633"
                 d="M 63 548 L 63 693 L 532 693 L 53.5 34.6 L 517 34.6 L 517 170"/>
          <glyph unicode="[" glyph-name="bracketleft" horiz-adv-x="315" d="M 243 -120 L 104 -120 L 104 759 L 236 759"/>
          <glyph unicode="\" glyph-name="backslash" horiz-adv-x="529" d="M 25.2 693 L 450 31.5"/>
          <glyph unicode="]" glyph-name="bracketright" horiz-adv-x="309" d="M 18.9 -117 L 151 -117 L 151 759 L 22 759"/>
          <glyph unicode="^" glyph-name="asciicircum" horiz-adv-x="485" d="M 28.4 466 L 220 721 L 416 466"/>
          <glyph unicode="_" glyph-name="underscore" horiz-adv-x="721" d="M 183 -41 L 485 -41"/>
          <glyph unicode="`" glyph-name="grave" horiz-adv-x="261" d="M 53.5 709 L 151 576"/>
          <glyph unicode="a" glyph-name="a" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6"/>
          <glyph unicode="b" glyph-name="b" horiz-adv-x="611"
                 d="M -6.3 690 L 94.5 690 L 94.5 31.5 L 94.5 164 L 135 117 L 189 63 L 233 37.8 L 306 22 L 372 31.5 L 435 69.3 L 485 139 L 507 214 L 507 309 L 488 372 L 454 428 L 397 466 L 331 488 L 265 491 L 97.6 491"/>
          <glyph unicode="c" glyph-name="c" horiz-adv-x="561"
                 d="M 457 498 L 457 337 L 457 400 L 391 457 L 296 498 L 224 498 L 161 479 L 107 438 L 69.3 375 L 53.5 302 L 53.5 217 L 75.6 145 L 126 72.4 L 198 31.5 L 252 25.2 L 312 25.2 L 400 53.6 L 454 97.6"/>
          <glyph unicode="d" glyph-name="d" horiz-adv-x="643"
                 d="M 353 690 L 466 690 L 466 154 L 400 94.5 L 343 47.2 L 268 25.2 L 224 28.4 L 135 59.9 L 78.8 126 L 47.2 214 L 53.5 315 L 85 400 L 161 466 L 236 491 L 312 495 L 466 495 L 466 31.5 L 561 31.5"/>
          <glyph unicode="e" glyph-name="e" horiz-adv-x="580"
                 d="M 59.9 271 L 479 271 L 479 340 L 457 400 L 425 441 L 372 482 L 302 501 L 230 504 L 158 476 L 97.6 422 L 69.3 359 L 56.7 290 L 56.7 214 L 72.5 154 L 123 81.9 L 186 40.9 L 236 25.2 L 312 25.2 L 394 50.4 L 457 94.5"/>
          <glyph unicode="f" glyph-name="f" horiz-adv-x="435"
                 d="M 37.8 34.6 L 249 34.6 L 135 34.6 L 135 495 L 37.8 495 L 318 495 L 132 495 L 132 551 L 142 608 L 180 665 L 230 693 L 290 699 L 356 677 L 400 639"/>
          <glyph unicode="g" glyph-name="g" horiz-adv-x="617"
                 d="M 145 97.6 L 81.9 69.3 L 37.8 25.2 L 28.4 -28.4 L 34.6 -91.4 L 97.6 -145 L 173 -161 L 261 -167 L 353 -164 L 428 -142 L 476 -107 L 504 -63 L 504 0 L 476 53.6 L 416 85.1 L 340 104 L 280 104 L 220 101 L 158 97.6 L 110 107 L 59.9 126 L 50.4 161 L 69.3 195 L 120 227 L 161 205 L 230 189 L 299 189 L 372 208 L 438 252 L 460 306 L 463 384 L 444 432 L 416 466 L 460 498 L 554 498 L 554 381 L 554 498 L 466 498 L 416 466 L 362 491 L 268 504 L 180 491 L 91.4 441 L 66.1 369 L 69.3 302 L 97.6 249 L 120 224"/>
          <glyph unicode="h" glyph-name="h" horiz-adv-x="662"
                 d="M 28.4 690 L 123 690 L 123 34.6 L 28.4 34.6 L 211 34.6 L 123 34.6 L 123 375 L 180 435 L 233 482 L 306 504 L 362 504 L 422 485 L 460 457 L 495 406 L 501 343 L 501 31.5 L 413 31.5 L 598 31.5"/>
          <glyph unicode="i" glyph-name="i" horiz-adv-x="309"
                 d="M 37.8 31.5 L 246 31.5 L 139 31.5 L 139 498 L 37.8 498 M 132 595 L 161 611 L 161 636 L 142 652 L 117 646 L 107 621 L 113 608 L 132 595"/>
          <glyph unicode="j" glyph-name="j" horiz-adv-x="265"
                 d="M -139 -113 L -101 -145 L -53.5 -167 L 9.45 -167 L 59.9 -145 L 101 -107 L 113 -28.4 L 113 488 L 15.8 488 M 113 595 L 132 608 L 139 636 L 123 652 L 91.4 649 L 85 621 L 88.2 605 L 113 595"/>
          <glyph unicode="k" glyph-name="k" horiz-adv-x="598"
                 d="M 18.9 693 L 123 693 L 123 34.6 L 22 34.6 L 214 34.6 L 126 34.6 L 126 170 L 422 495 L 507 495 L 312 495 L 422 495 L 252 312 L 450 31.5 L 536 31.5 L 346 31.5"/>
          <glyph unicode="l" glyph-name="l" horiz-adv-x="293"
                 d="M 25.2 31.5 L 220 31.5 L 120 31.5 L 120 693 L 25.2 693"/>
          <glyph unicode="m" glyph-name="m" horiz-adv-x="964"
                 d="M 37.8 31.5 L 227 31.5 L 139 31.5 L 139 498 L 41 498 L 135 498 L 135 378 L 189 441 L 258 491 L 324 501 L 387 491 L 422 460 L 460 400 L 466 346 L 466 34.6 L 378 34.6 L 554 34.6 L 469 34.6 L 469 353 L 482 384 L 526 441 L 583 488 L 643 501 L 702 495 L 747 469 L 784 422 L 800 365 L 800 306 L 800 34.6 L 709 34.6 L 891 34.6"/>
          <glyph unicode="n" glyph-name="n" horiz-adv-x="680"
                 d="M 44.1 31.5 L 224 31.5 L 142 31.5 L 142 495 L 44.1 495 L 139 495 L 139 365 L 192 435 L 239 472 L 296 501 L 350 504 L 410 495 L 466 469 L 504 422 L 517 381 L 517 331 L 517 37.8 L 428 37.8 L 621 37.8"/>
          <glyph unicode="o" glyph-name="o" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2"/>
          <glyph unicode="p" glyph-name="p" horiz-adv-x="639"
                 d="M 18.9 -164 L 239 -164 L 113 -164 L 113 495 L 25.2 495 L 113 495 L 113 375 L 176 435 L 265 498 L 356 507 L 444 472 L 504 400 L 526 306 L 523 214 L 504 139 L 457 85.1 L 394 50.4 L 334 37.8 L 284 31.5 L 120 31.5"/>
          <glyph unicode="q" glyph-name="q" horiz-adv-x="630"
                 d="M 353 -161 L 564 -161 L 460 -161 L 460 498 L 460 378 L 422 422 L 372 463 L 309 495 L 243 507 L 180 491 L 113 447 L 75.6 391 L 56.7 334 L 50.4 268 L 56.7 202 L 78.8 142 L 132 81.9 L 208 44.1 L 296 34.6 L 460 34.6"/>
          <glyph unicode="r" glyph-name="r" horiz-adv-x="523"
                 d="M 252 31.5 L 31.5 31.5 L 132 31.5 L 132 495 L 41 495 L 132 495 L 132 350 L 176 400 L 217 441 L 268 472 L 312 495 L 365 501 L 441 501 L 441 378"/>
          <glyph unicode="s" glyph-name="s" horiz-adv-x="564"
                 d="M 63 31.5 L 63 195 L 63 126 L 104 88.2 L 151 53.6 L 214 28.4 L 274 22 L 350 31.5 L 416 59.9 L 450 101 L 460 145 L 450 195 L 406 230 L 353 249 L 258 265 L 170 280 L 113 302 L 75.6 334 L 63 372 L 63 413 L 85 454 L 142 491 L 195 501 L 277 501 L 331 485 L 372 460 L 410 425 L 438 400 L 438 334 L 438 495"/>
          <glyph unicode="t" glyph-name="t" horiz-adv-x="406"
                 d="M 113 690 L 113 495 L 18.9 495 L 306 495 L 113 495 L 113 145 L 126 94.5 L 151 56.7 L 192 31.5 L 233 25.2 L 284 31.5 L 334 53.6 L 362 78.8"/>
          <glyph unicode="u" glyph-name="u" horiz-adv-x="665"
                 d="M 9.45 495 L 117 495 L 117 170 L 120 129 L 145 88.2 L 173 56.7 L 214 31.5 L 274 22 L 334 31.5 L 400 56.7 L 447 104 L 491 158 L 491 31.5 L 592 31.5 L 491 31.5 L 491 498 L 391 498"/>
          <glyph unicode="v" glyph-name="v" horiz-adv-x="630"
                 d="M -6.3 495 L 192 495 L 91.4 495 L 290 28.4 L 495 495 L 576 495 L 394 495"/>
          <glyph unicode="w" glyph-name="w" horiz-adv-x="873"
                 d="M 0 495 L 192 495 L 94.5 495 L 261 31.5 L 413 495 L 564 28.4 L 731 498 L 825 498 L 630 498"/>
          <glyph unicode="x" glyph-name="x" horiz-adv-x="589"
                 d="M 18.9 31.5 L 214 31.5 L 104 31.5 L 438 495 L 510 495 L 324 495 M 217 495 L 25.2 495 L 107 495 L 438 31.5 L 517 31.5 L 328 31.5"/>
          <glyph unicode="y" glyph-name="y" horiz-adv-x="636"
                 d="M 31.5 -117 L 59.9 -142 L 97.6 -170 L 135 -170 L 176 -170 L 220 -145 L 261 -94.5 L 299 -6.3 L 495 491 L 576 491 L 394 491 M 6.3 495 L 186 495 L 94.5 495 L 312 31.5"/>
          <glyph unicode="z" glyph-name="z" horiz-adv-x="551"
                 d="M 53.5 369 L 53.5 491 L 444 491 L 41 31.5 L 444 31.5 L 444 158"/>
          <glyph unicode="{" glyph-name="braceleft" horiz-adv-x="343"
                 d="M 271 -117 L 205 -117 L 180 -101 L 158 -75.6 L 142 -47.2 L 135 -9.45 L 135 246 L 117 287 L 85 309 L 59.9 321 L 18.9 321 L 63 321 L 104 346 L 129 372 L 139 406 L 139 690 L 151 715 L 183 750 L 220 765 L 271 765"/>
          <glyph unicode="|" glyph-name="bar" horiz-adv-x="277" d="M 110 -170 L 110 690"/>
          <glyph unicode="}" glyph-name="braceright" horiz-adv-x="337"
                 d="M 18.9 -120 L 69.3 -120 L 107 -107 L 129 -81.9 L 148 -56.7 L 148 -18.9 L 148 239 L 164 277 L 195 309 L 230 321 L 265 321 L 230 321 L 189 340 L 164 372 L 151 403 L 151 444 L 151 690 L 135 721 L 113 743 L 75.6 762 L 28.4 762"/>
          <glyph unicode="~" glyph-name="asciitilde" horiz-adv-x="545"
                 d="M 85 290 L 88.2 324 L 110 362 L 145 378 L 186 375 L 227 356 L 258 321 L 296 293 L 346 280 L 391 299 L 410 324 L 413 365"/>
          <glyph unicode="&#xa0;" glyph-name="nbspace" horiz-adv-x="378"/>
          <glyph unicode="&#xa1;" glyph-name="exclamdown" horiz-adv-x="290"
                 d="M 117 22 L 117 510 M 113 617 L 139 633 L 151 665 L 135 684 L 117 690 L 94.5 687 L 78.8 665 L 78.8 636 L 91.4 624 L 113 617"/>
          <glyph unicode="&#xa2;" glyph-name="cent" horiz-adv-x="277"
                 d="M 457 498 L 457 337 L 457 400 L 391 457 L 296 498 L 224 498 L 161 479 L 107 438 L 69.3 375 L 53.5 302 L 53.5 217 L 75.6 145 L 126 72.4 L 198 31.5 L 252 25.2 L 312 25.2 L 400 53.6 L 454 97.6 M 236 -170 L 236 690"/>
          <glyph unicode="&#xa5;" glyph-name="yen" horiz-adv-x="649"
                 d="M 205 31.5 L 400 31.5 L 293 31.5 L 293 321 L 81.9 687 L -3.15 687 L 186 687 L 81.9 687 L 293 318 L 507 690 L 416 690 L 602 690 M 107 236 L 495 236 M 107 362 L 495 362"/>
          <glyph unicode="&#xa6;" glyph-name="brokenbar" horiz-adv-x="83.2"
                 d="M 203 -51 L 203 207 M 203 421 L 203 679"/>
          <glyph unicode="&#xa8;" glyph-name="dieresis" horiz-adv-x="567"
                 d=" M 168 756 L 143 740 L 133 709 L 146 690 L 168 684 L 187 687 L 203 709 L 203 737 L 190 750 L 168 756 M 418 756 L 393 740 L 383 709 L 396 690 L 418 684 L 437 687 L 453 709 L 453 737 L 440 750 L 418 756"/>
          <glyph unicode="&#xa9;" glyph-name="copyright" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 487 506 L 487 406 L 487 454 L 457 472 L 430 490 L 402 502 L 369 506 L 337 504 L 302 493 L 268 471 L 241 435 L 224 397 L 219 358 L 220 307 L 232 265 L 252 227 L 290 192 L 335 173 L 406 172 L 444 183 L 469 198 L 488 216"/>
          <glyph unicode="&#xaa;" glyph-name="ordfeminine" horiz-adv-x="295"
                 d="M 148 822 L 175 843 L 211 852 L 254 849 L 284 839 L 309 811 L 317 786 L 317 677 L 296 650 L 261 624 L 227 611 L 181 614 L 146 633 L 131 658 L 131 687 L 145 717 L 181 739 L 224 743 L 317 743 L 317 616 L 365 616"/>
          <glyph unicode="&#xab;" glyph-name="guillemotleft" horiz-adv-x="308"
                 d="M 163 383 L 15.1 214 L 163 42.8 M 289 383 L 141 214 L 289 42.8"/>
          <glyph unicode="&#xae;" glyph-name="registered" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 213 175 L 312 175 L 261 175 L 261 501 L 213 501 L 387 501 L 417 495 L 441 482 L 461 457 L 468 428 L 466 403 L 458 372 L 444 354 L 424 339 L 397 332 L 261 332 L 351 332 L 466 173 L 411 173 L 507 173"/>
          <glyph unicode="&#xb0;" glyph-name="degree" horiz-adv-x="282"
                 d="M 225 575 L 243 575 L 272 586 L 291 603 L 307 625 L 316 649 L 318 679 L 312 713 L 301 735 L 287 753 L 266 766 L 247 773 L 225 776 L 199 773 L 173 763 L 155 747 L 139 722 L 131 698 L 129 674 L 132 648 L 139 627 L 149 611 L 164 594 L 182 583 L 205 576 L 225 575"/>
          <glyph unicode="&#xb1;" glyph-name="plusminus" horiz-adv-x="408"
                 d="M 514 75.6 L 824 75.6 M 633 295 L 633 602 M 481 454 L 789 454"/>
          <glyph unicode="&#xb2;" glyph-name="twosuperior" horiz-adv-x="302"
                 d="M 137 899 L 161 921 L 192 937 L 225 947 L 260 947 L 291 942 L 318 929 L 342 909 L 358 873 L 356 846 L 345 821 L 313 788 L 269 761 L 224 737 L 187 713 L 164 695 L 145 666 L 140 647 L 140 614 L 356 614 L 356 685"/>
          <glyph unicode="&#xb3;" glyph-name="threesuperior" horiz-adv-x="304"
                 d="M 139 658 L 164 636 L 195 619 L 230 611 L 257 611 L 290 616 L 323 630 L 343 650 L 356 677 L 359 712 L 351 743 L 328 769 L 301 780 L 266 786 L 216 786 L 277 786 L 302 794 L 326 810 L 343 833 L 350 862 L 346 887 L 331 915 L 313 932 L 284 943 L 250 945 L 217 943 L 178 929 L 145 906"/>
          <glyph unicode="&#xb4;" glyph-name="acute" horiz-adv-x="378" d=" M 275 809 L 149 639"/>
          <glyph unicode="&#xb7;" glyph-name="middot" horiz-adv-x="345"
                 d="M 200 416 L 170 397 L 159 359 L 174 336 L 200 329 L 223 333 L 242 359 L 242 393 L 227 408 L 200 416"/>
          <glyph unicode="&#xb9;" glyph-name="onesuperior" horiz-adv-x="183"
                 d="M 150 614 L 252 614 L 200 614 L 200 945 L 126 882"/>
          <glyph unicode="&#xba;" glyph-name="ordmasculine" horiz-adv-x="282"
                 d="M 225 575 L 243 575 L 272 586 L 291 603 L 307 625 L 316 649 L 318 679 L 312 713 L 301 735 L 287 753 L 266 766 L 247 773 L 225 776 L 199 773 L 173 763 L 155 747 L 139 722 L 131 698 L 129 674 L 132 648 L 139 627 L 149 611 L 164 594 L 182 583 L 205 576 L 225 575"/>
          <glyph unicode="&#xbb;" glyph-name="guillemotright" horiz-adv-x="308"
                 d="M 22.7 35.3 L 171 207 L 22.7 381 M 149 35.3 L 297 207 L 149 381"/>
          <glyph unicode="&#xbc;" glyph-name="onequarter" horiz-adv-x="517"
                 d="M 47.2 397 L 170 397 L 108 397 L 108 794 L 18.9 718 M 123 34.6 L 548 690 M 595 427 L 593 389 L 588 344 L 582 306 L 567 265 L 548 225 L 525 181 L 486 121 L 788 121 L 724 121 L 724 15.1 L 724 304"/>
          <glyph unicode="&#xbd;" glyph-name="onehalf" horiz-adv-x="524"
                 d="M 47.2 397 L 170 397 L 108 397 L 108 794 L 18.9 718 M 123 34.6 L 548 690 M 505 361 L 533 387 L 571 406 L 610 418 L 652 418 L 690 412 L 722 397 L 750 372 L 769 329 L 767 297 L 754 266 L 716 227 L 663 195 L 609 166 L 565 138 L 537 115 L 514 81.3 L 508 58.6 L 508 18.9 L 767 18.9 L 767 104"/>
          <glyph unicode="&#xbe;" glyph-name="threequarters" horiz-adv-x="648"
                 d="M 34 450 L 64.3 423 L 102 403 L 144 393 L 176 393 L 215 399 L 255 416 L 280 440 L 295 472 L 299 514 L 289 552 L 261 582 L 229 595 L 187 603 L 127 603 L 200 603 L 231 612 L 259 631 L 280 660 L 287 694 L 284 724 L 265 758 L 244 779 L 208 792 L 168 794 L 129 792 L 81.3 775 L 41.6 747 M 123 34.6 L 548 690 M 595 427 L 593 389 L 588 344 L 582 306 L 567 265 L 548 225 L 525 181 L 486 121 L 788 121 L 724 121 L 724 15.1 L 724 304"/>
          <glyph unicode="&#xbf;" glyph-name="questiondown" horiz-adv-x="558"
                 d="M 246 630 L 271 643 L 284 674 L 268 693 L 249 699 L 227 696 L 211 677 L 211 649 L 224 636 L 246 630 M 249 526 L 246 482 L 233 447 L 205 416 L 158 378 L 110 340 L 72.5 302 L 44.1 261 L 34.7 224 L 41 173 L 63 117 L 104 69.3 L 151 41 L 211 25.2 L 274 28.4 L 321 37.8 L 365 53.5 L 410 81.9 L 441 123 L 457 164 L 460 211"/>
          <glyph unicode="&#xc0;" glyph-name="Agrave" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5 M 228 992 L 326 860"/>
          <glyph unicode="&#xc1;" glyph-name="Aacute" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5 M 493 986 L 367 816"/>
          <glyph unicode="&#xc2;" glyph-name="Acircumflex" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5 M 235 828 L 351 981 L 468 828"/>
          <glyph unicode="&#xc3;" glyph-name="Atilde" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5 M 229 842 L 232 867 L 247 893 L 271 904 L 300 902 L 329 889 L 351 864 L 377 845 L 412 836 L 443 849 L 456 867 L 459 895"/>
          <glyph unicode="&#xc4;" glyph-name="Adieresis" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5 M 252 945 L 227 929 L 217 898 L 230 879 L 252 873 L 271 876 L 287 898 L 287 926 L 274 939 L 252 945 M 494 945 L 469 929 L 460 898 L 472 879 L 494 873 L 513 876 L 529 898 L 529 926 L 516 939 L 494 945"/>
          <glyph unicode="&#xc5;" glyph-name="Aring" horiz-adv-x="728"
                 d="M -9.45 34.6 L 180 34.6 L 78.8 34.6 L 337 693 L 504 274 L 173 274 L 507 274 L 602 31.5 L 501 31.5 L 693 31.5 M 377 858 L 395 858 L 424 869 L 443 886 L 459 908 L 468 933 L 471 963 L 464 997 L 454 1018.7 L 439 1036.7 L 419 1049.9 L 399 1056.5 L 377 1059.3 L 352 1056.5 L 325 1046.1 L 307 1030.0 L 291 1005.5 L 284 982 L 282 957 L 284 932 L 291 911 L 301 895 L 317 878 L 335 867 L 357 860 L 377 858"/>
          <glyph unicode="&#xc8;" glyph-name="Egrave" horiz-adv-x="621"
                 d="M 513 180 L 513 34.6 L 31.5 34.6 L 135 34.6 L 135 365 L 416 365 L 416 447 L 416 284 L 416 365 L 132 365 L 132 687 L 41 687 L 507 687 L 507 548 M 175 992 L 272 860"/>
          <glyph unicode="&#xc9;" glyph-name="Eacute" horiz-adv-x="621"
                 d="M 513 180 L 513 34.6 L 31.5 34.6 L 135 34.6 L 135 365 L 416 365 L 416 447 L 416 284 L 416 365 L 132 365 L 132 687 L 41 687 L 507 687 L 507 548 M 386 1028.2 L 260 858"/>
          <glyph unicode="&#xca;" glyph-name="Ecircumflex" horiz-adv-x="621"
                 d="M 513 180 L 513 34.6 L 31.5 34.6 L 135 34.6 L 135 365 L 416 365 L 416 447 L 416 284 L 416 365 L 132 365 L 132 687 L 41 687 L 507 687 L 507 548 M 203 828 L 318 981 L 436 828"/>
          <glyph unicode="&#xcb;" glyph-name="Edieresis" horiz-adv-x="621"
                 d="M 513 180 L 513 34.6 L 31.5 34.6 L 135 34.6 L 135 365 L 416 365 L 416 447 L 416 284 L 416 365 L 132 365 L 132 687 L 41 687 L 507 687 L 507 548 M 197 945 L 172 929 L 163 898 L 175 879 L 197 873 L 216 876 L 232 898 L 232 926 L 219 939 L 197 945 M 442 945 L 417 929 L 408 898 L 420 879 L 442 873 L 461 876 L 477 898 L 477 926 L 464 939 L 442 945"/>
          <glyph unicode="&#xcc;" glyph-name="Igrave" horiz-adv-x="340"
                 d="M 34.6 31.5 L 243 31.5 L 142 31.5 L 142 693 L 246 693 L 41 693 M 34.6 992 L 132 860"/>
          <glyph unicode="&#xcd;" glyph-name="Iacute" horiz-adv-x="340"
                 d="M 34.6 31.5 L 243 31.5 L 142 31.5 L 142 693 L 246 693 L 41 693 M 248 1018.0 L 122 848"/>
          <glyph unicode="&#xce;" glyph-name="Icircumflex" horiz-adv-x="340"
                 d="M 34.6 31.5 L 243 31.5 L 142 31.5 L 142 693 L 246 693 L 41 693 M 24.6 828 L 140 981 L 257 828"/>
          <glyph unicode="&#xcf;" glyph-name="Idieresis" horiz-adv-x="340"
                 d="M 34.6 31.5 L 243 31.5 L 142 31.5 L 142 693 L 246 693 L 41 693 M 55.9 945 L 30.7 929 L 21.2 898 L 33.8 879 L 55.9 873 L 74.8 876 L 90.5 898 L 90.5 926 L 77.9 939 L 55.9 945 M 303 945 L 278 929 L 269 898 L 281 879 L 303 873 L 322 876 L 338 898 L 338 926 L 325 939 L 303 945"/>
          <glyph unicode="&#xd0;" glyph-name="Eth" horiz-adv-x="740"
                 d="M 12.6 331 L 400 331 M 37.8 34.6 L 353 34.6 L 428 53.6 L 495 88.2 L 561 154 L 605 220 L 627 296 L 627 406 L 608 488 L 561 570 L 513 627 L 438 671 L 359 693 L 37.8 693 L 139 693 L 139 37.8"/>
          <glyph unicode="&#xd1;" glyph-name="Ntilde" horiz-adv-x="794"
                 d="M 41 34.6 L 230 34.6 L 142 34.6 L 142 687 L 37.8 687 L 154 687 L 583 31.5 L 699 31.5 L 598 31.5 L 598 690 L 510 690 L 699 690 M 245 842 L 247 867 L 262 893 L 287 904 L 315 902 L 344 889 L 366 864 L 392 845 L 428 836 L 459 849 L 472 867 L 474 895"/>
          <glyph unicode="&#xd2;" glyph-name="Ograve" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 257 992 L 354 860"/>
          <glyph unicode="&#xd3;" glyph-name="Oacute" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 475 995 L 349 825"/>
          <glyph unicode="&#xd4;" glyph-name="Ocircumflex" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 252 828 L 368 981 L 485 828"/>
          <glyph unicode="&#xd5;" glyph-name="Otilde" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 243 842 L 245 867 L 260 893 L 284 904 L 313 902 L 342 889 L 364 864 L 390 845 L 426 836 L 456 849 L 470 867 L 472 895"/>
          <glyph unicode="&#xd6;" glyph-name="Odieresis" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 270 945 L 245 929 L 236 898 L 248 879 L 270 873 L 289 876 L 305 898 L 305 926 L 292 939 L 270 945 M 533 945 L 508 929 L 498 898 L 511 879 L 533 873 L 552 876 L 568 898 L 568 926 L 555 939 L 533 945"/>
          <glyph unicode="&#xd7;" glyph-name="multiply" horiz-adv-x="614"
                 d="M 135 -22.1 L 570 498 L 353 239 L 135 501 L 573 -18.9"/>
          <glyph unicode="&#xd8;" glyph-name="Oslash" horiz-adv-x="784"
                 d="M 372 25.2 L 432 25.2 L 529 63 L 592 120 L 646 192 L 674 274 L 684 375 L 662 488 L 627 561 L 580 621 L 510 665 L 444 687 L 372 696 L 287 687 L 198 652 L 139 598 L 85 517 L 59.9 438 L 53.5 356 L 63 271 L 85 202 L 120 148 L 170 91.4 L 230 53.6 L 306 31.5 L 372 25.2 M 107 -33.2 L 604 733"/>
          <glyph unicode="&#xd9;" glyph-name="Ugrave" horiz-adv-x="778"
                 d="M 22 690 L 211 690 L 126 690 L 126 208 L 142 158 L 173 110 L 220 69.3 L 274 37.8 L 334 25.2 L 403 25.2 L 469 50.4 L 526 88.2 L 570 132 L 592 180 L 598 227 L 598 687 L 504 687 L 699 687 M 254 992 L 351 860"/>
          <glyph unicode="&#xda;" glyph-name="Uacute" horiz-adv-x="778"
                 d="M 22 690 L 211 690 L 126 690 L 126 208 L 142 158 L 173 110 L 220 69.3 L 274 37.8 L 334 25.2 L 403 25.2 L 469 50.4 L 526 88.2 L 570 132 L 592 180 L 598 227 L 598 687 L 504 687 L 699 687 M 451 1023.4 L 325 853"/>
          <glyph unicode="&#xdb;" glyph-name="Ucircumflex" horiz-adv-x="778"
                 d="M 22 690 L 211 690 L 126 690 L 126 208 L 142 158 L 173 110 L 220 69.3 L 274 37.8 L 334 25.2 L 403 25.2 L 469 50.4 L 526 88.2 L 570 132 L 592 180 L 598 227 L 598 687 L 504 687 L 699 687 M 250 828 L 366 981 L 483 828"/>
          <glyph unicode="&#xdc;" glyph-name="Udieresis" horiz-adv-x="778"
                 d="M 22 690 L 211 690 L 126 690 L 126 208 L 142 158 L 173 110 L 220 69.3 L 274 37.8 L 334 25.2 L 403 25.2 L 469 50.4 L 526 88.2 L 570 132 L 592 180 L 598 227 L 598 687 L 504 687 L 699 687 M 268 945 L 243 929 L 233 898 L 246 879 L 268 873 L 287 876 L 303 898 L 303 926 L 290 939 L 268 945 M 529 945 L 504 929 L 494 898 L 507 879 L 529 873 L 548 876 L 564 898 L 564 926 L 551 939 L 529 945"/>
          <glyph unicode="&#xdd;" glyph-name="Yacute" horiz-adv-x="649"
                 d="M 205 31.5 L 400 31.5 L 293 31.5 L 293 321 L 81.9 687 L -3.15 687 L 186 687 L 81.9 687 L 293 318 L 507 690 L 416 690 L 602 690 M 388 1011.9 L 262 842"/>
          <glyph unicode="&#xe0;" glyph-name="agrave" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6 M 159 803 L 257 671"/>
          <glyph unicode="&#xe1;" glyph-name="aacute" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6 M 384 802 L 258 632"/>
          <glyph unicode="&#xe2;" glyph-name="acircumflex" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6 M 175 658 L 290 811 L 407 658"/>
          <glyph unicode="&#xe3;" glyph-name="atilde" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6 M 175 644 L 177 668 L 193 695 L 217 706 L 245 703 L 274 690 L 296 666 L 323 646 L 358 637 L 389 650 L 402 668 L 404 697"/>
          <glyph unicode="&#xe4;" glyph-name="adieresis" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6 M 176 756 L 151 740 L 141 709 L 154 690 L 176 684 L 195 687 L 211 709 L 211 737 L 198 750 L 176 756 M 432 756 L 407 740 L 397 709 L 410 690 L 432 684 L 451 687 L 467 709 L 467 737 L 454 750 L 432 756"/>
          <glyph unicode="&#xe5;" glyph-name="aring" horiz-adv-x="589"
                 d="M 75.6 447 L 129 488 L 202 507 L 287 501 L 346 482 L 397 425 L 413 375 L 413 158 L 372 104 L 302 50.4 L 233 25.2 L 142 31.5 L 72.5 69.3 L 41 120 L 41 176 L 69.3 236 L 142 280 L 227 290 L 413 290 L 413 34.6 L 510 34.6 M 253 669 L 271 669 L 301 680 L 319 697 L 335 719 L 344 744 L 347 774 L 340 808 L 330 830 L 316 848 L 295 861 L 275 868 L 253 870 L 228 868 L 201 857 L 183 841 L 167 816 L 160 793 L 158 768 L 161 743 L 167 722 L 178 706 L 193 689 L 211 678 L 233 671 L 253 669"/>
          <glyph unicode="&#xe8;" glyph-name="egrave" horiz-adv-x="580"
                 d="M 59.9 271 L 479 271 L 479 340 L 457 400 L 425 441 L 372 482 L 302 501 L 230 504 L 158 476 L 97.6 422 L 69.3 359 L 56.7 290 L 56.7 214 L 72.5 154 L 123 81.9 L 186 40.9 L 236 25.2 L 312 25.2 L 394 50.4 L 457 94.5 M 154 803 L 252 671"/>
          <glyph unicode="&#xe9;" glyph-name="eacute" horiz-adv-x="580"
                 d="M 59.9 271 L 479 271 L 479 340 L 457 400 L 425 441 L 372 482 L 302 501 L 230 504 L 158 476 L 97.6 422 L 69.3 359 L 56.7 290 L 56.7 214 L 72.5 154 L 123 81.9 L 186 40.9 L 236 25.2 L 312 25.2 L 394 50.4 L 457 94.5 M 365 833 L 239 662"/>
          <glyph unicode="&#xea;" glyph-name="ecircumflex" horiz-adv-x="580"
                 d="M 59.9 271 L 479 271 L 479 340 L 457 400 L 425 441 L 372 482 L 302 501 L 230 504 L 158 476 L 97.6 422 L 69.3 359 L 56.7 290 L 56.7 214 L 72.5 154 L 123 81.9 L 186 40.9 L 236 25.2 L 312 25.2 L 394 50.4 L 457 94.5 M 172 658 L 287 811 L 404 658"/>
          <glyph unicode="&#xeb;" glyph-name="edieresis" horiz-adv-x="580"
                 d="M 59.9 271 L 479 271 L 479 340 L 457 400 L 425 441 L 372 482 L 302 501 L 230 504 L 158 476 L 97.6 422 L 69.3 359 L 56.7 290 L 56.7 214 L 72.5 154 L 123 81.9 L 186 40.9 L 236 25.2 L 312 25.2 L 394 50.4 L 457 94.5 M 179 756 L 154 740 L 145 709 L 157 690 L 179 684 L 198 687 L 214 709 L 214 737 L 201 750 L 179 756 M 419 756 L 394 740 L 385 709 L 397 690 L 419 684 L 438 687 L 454 709 L 454 737 L 441 750 L 419 756"/>
          <glyph unicode="&#xec;" glyph-name="igrave" horiz-adv-x="309"
                 d="M 37.8 31.5 L 246 31.5 L 139 31.5 L 139 498 L 37.8 498  M 18.9 803 L 117 671"/>
          <glyph unicode="&#xed;" glyph-name="iacute" horiz-adv-x="309"
                 d="M 37.8 31.5 L 246 31.5 L 139 31.5 L 139 498 L 37.8 498  M 239 833 L 113 663"/>
          <glyph unicode="&#xee;" glyph-name="icircumflex" horiz-adv-x="309"
                 d="M 37.8 31.5 L 246 31.5 L 139 31.5 L 139 498 L 37.8 498  M 15.1 658 L 130 811 L 248 658"/>
          <glyph unicode="&#xef;" glyph-name="idieresis" horiz-adv-x="309"
                 d="M 37.8 31.5 L 246 31.5 L 139 31.5 L 139 498 L 37.8 498  M 37 756 L 11.8 740 L 2.32 709 L 14.9 690 L 37 684 L 55.9 687 L 71.6 709 L 71.6 737 L 59 750 L 37 756 M 291 756 L 265 740 L 256 709 L 269 690 L 291 684 L 310 687 L 325 709 L 325 737 L 313 750 L 291 756"/>
          <glyph unicode="&#xf1;" glyph-name="ntilde" horiz-adv-x="680"
                 d="M 44.1 31.5 L 224 31.5 L 142 31.5 L 142 495 L 44.1 495 L 139 495 L 139 365 L 192 435 L 239 472 L 296 501 L 350 504 L 410 495 L 466 469 L 504 422 L 517 381 L 517 331 L 517 37.8 L 428 37.8 L 621 37.8 M 196 644 L 198 668 L 214 695 L 238 706 L 267 703 L 295 690 L 318 666 L 344 646 L 379 637 L 410 650 L 423 668 L 426 697"/>
          <glyph unicode="&#xf2;" glyph-name="ograve" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2 M 165 803 L 263 671"/>
          <glyph unicode="&#xf3;" glyph-name="oacute" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2 M 378 803 L 252 633"/>
          <glyph unicode="&#xf4;" glyph-name="ocircumflex" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2 M 179 658 L 294 811 L 411 658"/>
          <glyph unicode="&#xf5;" glyph-name="otilde" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2 M 178 644 L 180 668 L 196 695 L 220 706 L 248 703 L 277 690 L 299 666 L 326 646 L 361 637 L 392 650 L 405 668 L 407 697"/>
          <glyph unicode="&#xf6;" glyph-name="odieresis" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2 M 182 756 L 157 740 L 148 709 L 160 690 L 182 684 L 201 687 L 217 709 L 217 737 L 204 750 L 182 756 M 438 756 L 413 740 L 403 709 L 416 690 L 438 684 L 457 687 L 473 709 L 473 737 L 460 750 L 438 756"/>
          <glyph unicode="&#xf7;" glyph-name="divide" horiz-adv-x="874"
                 d="M 387 630 L 362 614 L 353 583 L 365 564 L 387 558 L 406 561 L 422 583 L 422 611 L 410 624 L 387 630 M 387 315 L 362 299 L 353 268 L 365 249 L 387 243 L 406 246 L 422 268 L 422 296 L 410 309 L 387 315 M 113 425 L 695 425"/>
          <glyph unicode="&#xf8;" glyph-name="oslash" horiz-adv-x="602"
                 d="M 280 25.2 L 346 31.5 L 419 69.3 L 472 129 L 498 205 L 504 287 L 491 356 L 454 422 L 403 466 L 334 498 L 280 504 L 195 495 L 117 438 L 69.3 369 L 53.5 280 L 56.7 195 L 91.4 120 L 148 59.9 L 224 28.4 L 280 25.2 M 103 -23.8 L 460 527"/>
          <glyph unicode="&#xf9;" glyph-name="ugrave" horiz-adv-x="665"
                 d="M 9.45 495 L 117 495 L 117 170 L 120 129 L 145 88.2 L 173 56.7 L 214 31.5 L 274 22 L 334 31.5 L 400 56.7 L 447 104 L 491 158 L 491 31.5 L 592 31.5 L 491 31.5 L 491 498 L 391 498 M 197 803 L 295 671"/>
          <glyph unicode="&#xfa;" glyph-name="uacute" horiz-adv-x="665"
                 d="M 9.45 495 L 117 495 L 117 170 L 120 129 L 145 88.2 L 173 56.7 L 214 31.5 L 274 22 L 334 31.5 L 400 56.7 L 447 104 L 491 158 L 491 31.5 L 592 31.5 L 491 31.5 L 491 498 L 391 498 M 412 797 L 286 627"/>
          <glyph unicode="&#xfb;" glyph-name="ucircumflex" horiz-adv-x="665"
                 d="M 9.45 495 L 117 495 L 117 170 L 120 129 L 145 88.2 L 173 56.7 L 214 31.5 L 274 22 L 334 31.5 L 400 56.7 L 447 104 L 491 158 L 491 31.5 L 592 31.5 L 491 31.5 L 491 498 L 391 498 M 198 658 L 313 811 L 430 658"/>
          <glyph unicode="&#xfc;" glyph-name="udieresis" horiz-adv-x="665"
                 d="M 9.45 495 L 117 495 L 117 170 L 120 129 L 145 88.2 L 173 56.7 L 214 31.5 L 274 22 L 334 31.5 L 400 56.7 L 447 104 L 491 158 L 491 31.5 L 592 31.5 L 491 31.5 L 491 498 L 391 498 M 223 756 L 198 740 L 188 709 L 201 690 L 223 684 L 242 687 L 258 709 L 258 737 L 245 750 L 223 756 M 461 756 L 435 740 L 426 709 L 438 690 L 461 684 L 479 687 L 495 709 L 495 737 L 483 750 L 461 756"/>
          <glyph unicode="&#xfd;" glyph-name="yacute" horiz-adv-x="636"
                 d="M 31.5 -117 L 59.9 -142 L 97.6 -170 L 135 -170 L 176 -170 L 220 -145 L 261 -94.5 L 299 -6.3 L 495 491 L 576 491 L 394 491 M 6.3 495 L 186 495 L 94.5 495 L 312 31.5 M 396 803 L 270 633"/>
          <glyph unicode="&#xff;" glyph-name="ydieresis" horiz-adv-x="636"
                 d="M 31.5 -117 L 59.9 -142 L 97.6 -170 L 135 -170 L 176 -170 L 220 -145 L 261 -94.5 L 299 -6.3 L 495 491 L 576 491 L 394 491 M 6.3 495 L 186 495 L 94.5 495 L 312 31.5 M 197 756 L 172 740 L 162 709 L 175 690 L 197 684 L 216 687 L 231 709 L 231 737 L 219 750 L 197 756 M 458 756 L 433 740 L 424 709 L 436 690 L 458 684 L 477 687 L 493 709 L 493 737 L 480 750 L 458 756"/>
          <glyph unicode="&#x2013;" glyph-name="endash" horiz-adv-x="874" d="M 113 331 L 695 331"/>
          <glyph unicode="&#x2014;" glyph-name="emdash" horiz-adv-x="1165.5" d="M 151 331 L 926 331"/>
          <glyph unicode="&#x201c;" glyph-name="quotedblleft" horiz-adv-x="442"
                 d="M 95 695 L 139 576 M 237 695 L 281 576"/>
          <glyph unicode="&#x201d;" glyph-name="quotedblright" horiz-adv-x="442"
                 d="M 96.4 695 L 52.4 576 M 238 695 L 194 576"/>
          <glyph unicode="&#x2039;" glyph-name="guilsinglleft" horiz-adv-x="205" d="M 163 383 L 15.1 214 L 163 42.8"/>
          <glyph unicode="&#x203a;" glyph-name="guilsinglright" horiz-adv-x="205" d="M 22.7 35.3 L 171 207 L 22.7 381"/>
          <glyph unicode="&#x20ac;" glyph-name="Euro" horiz-adv-x="699"
                 d="M 595 696 L 595 498 L 595 592 L 536 630 L 482 665 L 425 690 L 359 696 L 296 693 L 227 671 L 158 627 L 104 554 L 69.3 479 L 59.9 400 L 63 299 L 85 214 L 126 139 L 202 69.3 L 293 31.5 L 435 28.4 L 510 50.4 L 561 81.9 L 598 117 M 12.6 268 L 400 268 M 12.6 394 L 400 394"/>
          <glyph unicode="&#x0178;" glyph-name="Ydieresis" horiz-adv-x="649"
                 d="M 205 31.5 L 400 31.5 L 293 31.5 L 293 321 L 81.9 687 L -3.15 687 L 186 687 L 81.9 687 L 293 318 L 507 690 L 416 690 L 602 690 M 208 945 L 183 929 L 174 898 L 186 879 L 208 873 L 227 876 L 243 898 L 243 926 L 230 939 L 208 945 M 459 945 L 434 929 L 425 898 L 437 879 L 459 873 L 478 876 L 494 898 L 494 926 L 482 939 L 459 945"/>
          <glyph unicode="&#xc7;" glyph-name="Ccedilla" horiz-adv-x="699"
                 d="M362.1779 28.573864L362.1779 -31.129064999999997C484.38462000000004 -31.129064999999997 399.68634000000003 -146.35442999999998 308.35567000000003 -118.82977M595.0 696.0L595.0 498.0L595.0 592.0L536.0 630.0L482.0 665.0L425.0 690.0L359.0 696.0L296.0 693.0L227.0 671.0L158.0 627.0L104.0 554.0L69.3 479.0L59.9 400.0L63.0 299.0L85.0 214.0L126.0 139.0L202.0 69.3L293.0 31.5L435.0 28.4L510.0 50.4L561.0 81.9L598.0 117.0"/>
          <glyph unicode="&#xe7;" glyph-name="ccedilla" horiz-adv-x="561"
                 d="M282.10495 24.786021L282.10495 -22.490495C378.87588 -22.490495 311.80647999999997 -113.73313999999999 239.48513999999997 -91.937398M457.0 498.0L457.0 337.0L457.0 400.0L391.0 457.0L296.0 498.0L224.0 498.0L161.0 479.0L107.0 438.0L69.3 375.0L53.5 302.0L53.5 217.0L75.6 145.0L126.0 72.4L198.0 31.500000000000007L252.0 25.200000000000006L312.0 25.200000000000006L400.0 53.60000000000001L454.0 97.60000000000001"/>
          <glyph unicode="&#xdf;" glyph-name="germandbls" horiz-adv-x="611"
                 d="M109.3571 491.0L14.668969 491.0M11.168789 23.971593999999982L111.96879 23.971593999999982L111.96879 495.95774C116.67323999999999 609.09137 223.91613999999998 688.01296 323.4688 688.01296C423.02146 688.01296 462.03096 637.27765 462.03096 573.23753C462.03096 509.19741 320.05137 506.04679 320.05137 434.42005C320.05137 362.79332 523.63798 359.14515 523.63798 185.39568C523.63798 11.64620099999999 274.06106 -23.62254200000001 182.36543999999998 80.461072"/>
          <glyph unicode="&#xa3;" glyph-name="sterling" horiz-adv-x="586"
                 d="M38.6 331.0L426.0 331.0M388.45541000000003 546.5738699999999L385.27953 580.9140799999999C380.93822 627.85585 333.02178 699.50446 250.54099 695.53873C131.76448 689.82788 142.0 553.0 142.0 553.0L142.0 513.56802L142.0 34.6L41.0 34.6L510.0 34.6L510.0 173.0"/>
          <glyph unicode="&#xb8;" glyph-name="cedilla" horiz-adv-x="699"
                 d="M362.1779 28.573864L362.1779 -31.129064999999997C484.38462000000004 -31.129064999999997 399.68634000000003 -146.35442999999998 308.35567000000003 -118.82977"/>
        </font>
      </defs>
    </svg>
    <svg ref="EMSAllure" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <defs>
        <font id="EMSAllure" horiz-adv-x="378">
          <font-face
                  font-family="EMS Allure"
                  units-per-em="1000"
                  ascent="800"
                  descent="-200"
                  cap-height="500"
                  x-height="300"
          />
          <missing-glyph horiz-adv-x="378"/>
          <glyph unicode=" " glyph-name="space" horiz-adv-x="378"/>
          <glyph unicode="!" glyph-name="exclam" horiz-adv-x="359"
                 d="M 444 665 L 403 592 L 295 362 L 232 214 M 204 63 L 182 40.9"/>
          <glyph unicode="&#x22;" glyph-name="quotedbl" horiz-adv-x="302"
                 d="M 94.5 548 L 78.8 403 M 233 548 L 211 400"/>
          <glyph unicode="#" glyph-name="numbersign" horiz-adv-x="926"
                 d="M 410 743 L 167 40.9 M 693 737 L 460 37.8 M 94.5 469 L 825 472 M 12.6 192 L 753 192"/>
          <glyph unicode="$" glyph-name="dollar" horiz-adv-x="592"
                 d="M 372 403 L 447 463 L 479 532 L 463 586 L 419 608 L 328 608 L 205 576 L 126 513 L 97.6 457 L 91.4 422 L 97.6 375 L 246 198 L 274 151 L 249 117 L 192 101 L 142 107 L 88.2 117 L 63 129 M 432 658 L 403 633 L 239 359 L 63 12.6"/>
          <glyph unicode="%" glyph-name="percent" horiz-adv-x="548"
                 d="M 189 649 L 120 621 L 66.1 558 L 66.1 479 L 104 444 L 164 450 L 211 495 L 243 545 L 246 602 L 233 633 L 205 646 L 271 624 L 413 630 L 476 662 L 410 573 L 211 280 L 56.7 18.9 M 306 202 L 261 132 L 255 59.9 L 296 22 L 340 22 L 400 66.1 L 432 113 L 441 202 L 410 233 L 353 236 L 306 202"/>
          <glyph unicode="&amp;" glyph-name="ampersand" horiz-adv-x="828"
                 d="M 602 658 L 573 646 L 542 595 L 526 561 L 526 520 M 548 621 L 510 662 L 457 690 L 359 680 L 280 652 L 249 567 L 274 488 L 321 410 L 387 340 L 274 328 L 164 315 L 66.1 239 L 25.2 145 L 56.7 59.9 L 120 3.15 L 224 -15.8 L 343 -3.15 L 450 25.2 L 539 72.4 L 598 142 L 636 214 L 646 280 L 639 321 L 621 375 M 728 491 L 728 463 L 696 428 L 570 350 L 472 309 L 384 265 L 340 192 L 343 154 L 372 110"/>
          <glyph unicode="&apos;" glyph-name="quotesingle" horiz-adv-x="173" d="M 97.6 551 L 78.8 400"/>
          <glyph unicode="(" glyph-name="parenleft" horiz-adv-x="447"
                 d="M 501 684 L 293 573 L 148 444 L 72.5 315 L 25.2 154 L 18.9 18.9 L 37.8 -97.6 L 66.1 -161"/>
          <glyph unicode=")" glyph-name="parenright" horiz-adv-x="617"
                 d="M 372 684 L 428 554 L 425 362 L 356 158 L 246 9.45 L 139 -75.6 L 41 -123 L -50.4 -158"/>
          <glyph unicode="*" glyph-name="asterisk" horiz-adv-x="762"
                 d="M 236 602 L 243 598 L 400 261 M 457 617 L 186 271 M 554 438 L 117 428"/>
          <glyph unicode="+" glyph-name="plus" horiz-adv-x="731" d="M 101 243 L 586 243 M 435 432 L 249 15.8"/>
          <glyph unicode="," glyph-name="comma" horiz-adv-x="211" d="M 104 56.7 L 123 22 L 101 -9.45 L 28.4 -117"/>
          <glyph unicode="-" glyph-name="hyphen" horiz-adv-x="444" d="M 161 236 L 387 243"/>
          <glyph unicode="." glyph-name="period" horiz-adv-x="224" d="M 145 63 L 129 37.8"/>
          <glyph unicode="/" glyph-name="slash" horiz-adv-x="564" d="M 482 655 L 252 356 L 126 183 L 25.2 22"/>
          <glyph unicode="0" glyph-name="zero" horiz-adv-x="662"
                 d="M 466 583 L 432 608 L 343 611 L 293 589 L 189 520 L 132 463 L 85 387 L 47.2 265 L 41 164 L 81.9 63 L 151 15.8 L 230 -6.3 L 318 9.45 L 422 63 L 520 161 L 576 268 L 608 384 L 608 479 L 583 558 L 532 608 L 479 649 L 425 665 L 350 668"/>
          <glyph unicode="1" glyph-name="one" horiz-adv-x="378"
                 d="M 170 450 L 261 523 L 315 589 L 356 646 L 384 646 L 287 428 L 192 211 L 154 101 L 145 37.8 M 6.3 9.45 L 69.3 31.5 L 132 31.5 L 205 37.8 L 284 34.6"/>
          <glyph unicode="2" glyph-name="two" horiz-adv-x="702"
                 d="M 198 491 L 195 501 L 195 536 L 287 602 L 372 630 L 472 643 L 573 621 L 621 586 L 649 510 L 617 432 L 539 346 L 435 265 L 350 205 L 261 148 L 198 113 L 170 97.6 L 123 66.1 L 104 47.2 L 56.7 15.8 L 56.7 47.2 L 81.9 81.9 L 120 94.5 L 186 91.4 L 255 66.1 L 299 37.8 L 403 -3.15 L 513 -6.3 L 570 18.9 L 617 56.7 L 630 85.1"/>
          <glyph unicode="3" glyph-name="three" horiz-adv-x="665"
                 d="M 239 498 L 255 567 L 321 617 L 406 639 L 479 643 L 558 624 L 605 564 L 608 498 L 589 460 L 545 422 L 510 394 L 438 378 L 362 365 L 312 346 L 299 356 L 293 384 L 369 378 L 482 356 L 536 337 L 567 290 L 576 208 L 554 145 L 495 78.8 L 428 31.5 L 353 0 L 220 -18.9 L 148 -9.45 L 104 18.9 L 75.6 72.4 L 85 110 L 101 132"/>
          <glyph unicode="4" glyph-name="four" horiz-adv-x="558"
                 d="M 243 -6.3 L 268 94.5 L 321 249 L 419 463 L 504 636 L 372 526 L 239 422 L 104 340 L 37.8 284 L -3.15 224 L 50.4 252 L 88.2 268 L 183 268 L 261 265 L 334 249 L 410 249 L 491 280 L 529 306 L 554 337"/>
          <glyph unicode="5" glyph-name="five" horiz-adv-x="643"
                 d="M 318 608 L 220 460 L 164 362 L 220 397 L 312 428 L 387 432 L 460 416 L 523 378 L 548 321 L 548 255 L 523 183 L 457 101 L 378 50.4 L 284 12.6 L 192 -3.15 L 117 -3.15 L 50.4 9.45 L 3.15 31.5 L -25.2 78.8 L -34.6 129 L -15.8 154 M 280 614 L 422 624 L 570 630 L 652 624"/>
          <glyph unicode="6" glyph-name="six" horiz-adv-x="602"
                 d="M 551 507 L 554 576 L 523 624 L 450 636 L 337 614 L 214 520 L 145 432 L 88.2 312 L 59.9 186 L 69.3 97.6 L 120 31.5 L 195 6.3 L 274 6.3 L 334 34.6 L 406 91.4 L 454 154 L 479 252 L 463 324 L 406 365 L 337 372 L 271 359 L 227 321"/>
          <glyph unicode="7" glyph-name="seven" horiz-adv-x="501"
                 d="M 110 507 L 148 592 L 208 630 L 318 636 L 447 621 L 523 617 L 576 611 L 617 633 L 435 438 L 293 261 L 189 139 L 126 31.5 L 113 25.2"/>
          <glyph unicode="8" glyph-name="eight" horiz-adv-x="592"
                 d="M 384 662 L 268 611 L 195 536 L 202 460 L 227 406 L 293 375 L 359 375 L 435 350 L 482 280 L 479 195 L 444 145 L 343 75.6 L 255 25.2 L 173 15.8 L 94.5 22 L 37.8 53.6 L 25.2 132 L 69.3 214 L 170 290 L 422 428 L 501 469 L 554 513 L 573 589 L 548 643 L 491 668 L 384 662"/>
          <glyph unicode="9" glyph-name="nine" horiz-adv-x="605"
                 d="M 369 328 L 318 293 L 243 284 L 164 309 L 126 359 L 126 454 L 170 551 L 239 611 L 299 643 L 403 658 L 485 630 L 539 558 L 551 482 L 529 369 L 498 284 L 435 183 L 359 110 L 284 50.4 L 227 22 L 158 9.45 L 104 9.45 L 47.2 53.6 L 34.6 88.2 L 37.8 158"/>
          <glyph unicode=":" glyph-name="colon" horiz-adv-x="246" d="M 195 252 L 183 230 M 139 63 L 126 40.9"/>
          <glyph unicode=";" glyph-name="semicolon" horiz-adv-x="224"
                 d="M 189 252 L 173 230 M 101 59.9 L 120 40.9 L 117 18.9 L 101 -9.45 L 31.5 -101"/>
          <glyph unicode="&#x3c;" glyph-name="less" horiz-adv-x="450"
                 d="M 391 561 L 101 277 L 167 186 L 208 132 L 252 59.9"/>
          <glyph unicode="=" glyph-name="equal" horiz-adv-x="646"
                 d="M 189 318 L 573 328 M 145 139 L 189 154 L 548 151"/>
          <glyph unicode="&#x3e;" glyph-name="greater" horiz-adv-x="472"
                 d="M 252 554 L 328 438 L 391 375 L 293 280 L 173 164 L 85 78.8"/>
          <glyph unicode="?" glyph-name="question" horiz-adv-x="564"
                 d="M 139 561 L 151 602 L 173 624 L 246 665 L 309 696 L 413 693 L 469 652 L 498 561 L 466 476 L 422 413 L 362 365 L 315 337 L 246 280 L 214 236 L 202 205 M 129 56.7 L 107 31.5"/>
          <glyph unicode="@" glyph-name="at" horiz-adv-x="895"
                 d="M 602 517 L 510 551 L 381 501 L 284 428 L 220 356 L 186 293 L 183 236 L 208 202 L 249 186 L 309 202 L 362 252 L 450 340 L 554 463 L 576 463 L 529 369 L 507 299 L 501 214 L 529 183 L 598 189 L 680 255 L 750 359 L 788 447 L 797 554 L 759 649 L 658 712 L 539 724 L 406 709 L 265 646 L 132 542 L 53.5 438 L -3.15 284 L 6.3 170 L 41 97.6 L 132 18.9 L 258 -15.8 L 410 -12.6 L 570 28.4 L 580 34.6 L 715 123 L 788 202 L 816 258 L 822 312 L 816 378"/>
          <glyph unicode="A" glyph-name="A" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293"/>
          <glyph unicode="B" glyph-name="B" horiz-adv-x="860"
                 d="M 94.5 328 L 22 369 L 3.15 419 L 25.2 510 L 117 583 L 328 680 L 548 712 L 696 709 L 781 677 L 819 627 L 816 561 L 788 520 L 737 479 L 598 435 L 529 425 L 469 416 L 428 410 L 542 324 L 633 246 L 668 158 L 652 72.4 L 605 12.6 L 532 -37.8 L 438 -44.1 L 375 -44.1 L 318 -25.2 L 290 31.5 L 277 81.9 L 208 31.5 L 161 0 L 148 25.2 L 186 148 L 324 406 L 372 510 L 419 561 L 479 573 L 517 570"/>
          <glyph unicode="C" glyph-name="C" horiz-adv-x="690"
                 d="M 296 362 L 403 372 L 526 441 L 617 526 L 658 608 L 639 680 L 564 712 L 375 662 L 249 576 L 110 419 L 41 280 L 12.6 132 L 59.9 25.2 L 189 -31.5 L 346 -15.8 L 476 34.6 L 595 113 L 668 189"/>
          <glyph unicode="D" glyph-name="D" horiz-adv-x="1033.2"
                 d="M 652 554 L 545 507 L 472 403 L 454 334 L 387 186 L 350 107 L 302 9.45 L 265 -44.1 L 236 -37.8 L 205 31.5 L 202 113 L 214 208 L 233 145 L 375 34.6 L 510 -9.45 L 728 25.2 L 863 113 L 976 220 L 1033.2 372 L 1020.6 532 L 951 627 L 828 680 L 608 706 L 413 671 L 261 614 L 154 548 L 94.5 460 L 85 384 L 126 321 L 189 293"/>
          <glyph unicode="E" glyph-name="E" horiz-adv-x="850"
                 d="M 662 580 L 668 504 L 589 662 L 501 718 L 400 706 L 324 621 L 328 526 L 365 428 L 406 372 L 444 321 L 504 306 L 507 337 L 466 350 L 359 346 L 180 321 L 41 217 L -3.15 107 L 44.1 9.45 L 170 -50.4 L 318 -47.2 L 498 -22 L 643 37.8 L 756 113 L 803 180 L 810 205 L 806 252"/>
          <glyph unicode="F" glyph-name="F" horiz-adv-x="624"
                 d="M 517 576 L 435 551 L 369 479 L 331 384 L 277 296 L 217 170 L 164 75.6 L 158 25.2 L 176 0 L 224 9.45 L 252 47.2 L 268 66.1 M 72.5 372 L 25.2 403 L -6.3 476 L 44.1 589 L 145 652 L 346 690 L 513 674 L 630 658 L 709 658 L 791 655 L 828 677 L 813 680 L 740 605 L 718 554 L 721 507 M 230 309 L 195 287 L 570 331"/>
          <glyph unicode="G" glyph-name="G" horiz-adv-x="951"
                 d="M 825 639 L 781 696 L 731 718 L 621 718 L 454 677 L 328 608 L 208 517 L 135 419 L 88.2 337 L 66.1 246 L 78.8 161 L 126 94.5 L 214 44.1 L 324 31.5 L 472 72.4 L 580 142 L 699 233 L 753 284 L 775 312 L 835 353 L 854 372 L 822 362 L 769 271 L 677 -41 L 573 -208 L 466 -353 L 365 -406 L 271 -413 L 227 -375 L 227 -302 L 265 -220 L 365 -117 L 495 -31.5 L 608 28.4 L 731 69.3 L 762 75.6 L 847 91.4"/>
          <glyph unicode="H" glyph-name="H" horiz-adv-x="939"
                 d="M 290 539 L 302 539 L 400 592 L 447 652 L 482 699 L 444 589 M 444 589 L 324 255 L 211 56.7 L 110 -72.5 L 6.3 -126 L -50.4 -126 L -123 -94.5 L -129 -72.5 M 939 680 L 854 643 L 810 567 L 759 447 L 712 337 L 665 211 L 633 107 L 643 40.9 L 671 9.45 L 728 6.3 L 794 56.7 L 869 132 L 907 183 M 41 198 L 31.5 293 L 81.9 353 L 236 372 L 315 359 L 441 343 L 614 306 L 759 290 L 832 306 L 850 321"/>
          <glyph unicode="I" glyph-name="I" horiz-adv-x="548"
                 d="M 501 693 L 410 413 L 334 224 L 280 126 L 220 50.4 L 167 28.4 L 97.6 18.9 L 9.45 25.2 L -6.3 50.4 L 22 72.4 L 66.1 40.9 L 117 31.5 L 447 37.8 M 233 450 L 176 523 L 202 602 L 277 665 L 394 684 L 523 677 L 598 674 L 665 649"/>
          <glyph unicode="J" glyph-name="J" horiz-adv-x="687"
                 d="M 643 715 L 614 687 L 567 586 L 501 400 L 428 202 L 328 40.9 L 258 -34.6 L 145 -94.5 L 53.5 -72.5 L 28.4 9.45 L 81.9 110 L 214 243 L 309 302 L 428 356 L 529 384 L 624 403 M 268 438 L 217 476 L 211 567 L 265 633 L 397 674 L 523 684 L 636 668 L 684 646"/>
          <glyph unicode="K" glyph-name="K" horiz-adv-x="759"
                 d="M 132 532 L 255 592 L 334 699 L 208 359 L 154 208 L 110 132 L 41 31.5 L -25.2 -50.4 L -126 -120 L -211 -129 L -258 -113 L -293 -56.7 M 756 699 L 564 583 L 381 435 L 236 293 L 145 180 M 296 403 L 350 189 L 435 40.9 L 529 -9.45 L 595 3.15 L 624 50.4 L 611 72.4 L 595 97.6"/>
          <glyph unicode="L" glyph-name="L" horiz-adv-x="617"
                 d="M 230 126 L 239 126 L 425 202 L 589 337 L 687 510 L 702 624 M 709 624 L 671 702 L 605 721 L 498 680 L 410 567 L 346 369 L 249 88.2 L 214 -6.3 L 176 -69.3 L 145 -107 L 126 -120 M 123 81.9 L 6.3 50.4 L 18.9 81.9 L 135 40.9 L 302 -75.6 L 435 -151 L 583 -211 L 750 -202 L 819 -151 L 838 -120 L 841 -56.7"/>
          <glyph unicode="M" glyph-name="M" horiz-adv-x="1351.3"
                 d="M 224 536 L 302 570 L 343 605 L 378 646 L 406 693 L 428 699 L 365 529 L 287 315 L 205 148 L 129 18.9 L 63 -41 L 0 -59.9 L -37.8 -15.8 L -18.9 47.2 L 94.5 186 L 249 356 L 447 542 L 570 614 L 649 633 L 721 605 L 756 513 L 740 315 L 721 189 L 687 75.6 L 712 81.9 L 784 198 L 961 463 L 1036.3 570 L 1105.7 621 L 1156.1 614 L 1174.9 589 L 1187.6 539 L 1149.8 428 L 1111.9 350 L 1067.8 255 L 1045.8 180 L 1045.8 101 L 1083.6 22 L 1181.2 37.8 L 1285.2 129 L 1319.8 183"/>
          <glyph unicode="N" glyph-name="N" horiz-adv-x="932"
                 d="M -230 -37.8 L -211 -91.4 L -154 -126 L -66.1 -107 L 37.8 -34.6 L 129 107 L 214 271 L 274 432 L 321 561 L 350 658 L 359 328 L 381 189 L 447 34.6 L 507 -18.9 L 573 -34.6 L 643 0 L 731 129 L 788 274 L 825 472 L 832 589 L 819 646 L 797 709 L 844 643 L 873 605 L 898 586 L 926 570 M 158 513 L 170 517 L 258 558 L 293 595 L 328 658 M 158 513 L 170 517 L 258 558 L 293 595 L 328 658"/>
          <glyph unicode="O" glyph-name="O" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570"/>
          <glyph unicode="P" glyph-name="P" horiz-adv-x="639"
                 d="M 504 576 L 441 561 L 387 526 L 346 479 L 331 416 L 306 362 L 246 265 L 198 173 L 170 97.6 L 161 63 L 154 31.5 L 170 0 L 205 12.6 L 243 56.7 M 101 359 L 41 394 L 22 463 L 44.1 545 L 132 611 L 230 658 L 324 687 L 450 702 L 624 693 L 740 649 L 803 595 L 810 523 L 775 441 L 718 378 L 639 340 L 504 296 L 375 274 L 299 261 L 214 271"/>
          <glyph unicode="Q" glyph-name="Q" horiz-adv-x="800"
                 d="M 699 715 L 775 680 L 816 608 L 813 463 L 759 287 L 646 123 L 532 34.6 L 447 -3.15 L 337 -25.2 L 211 -3.15 L 113 53.6 L 53.5 167 L 50.4 353 L 117 513 L 214 614 L 296 668 L 384 715 L 479 740 L 573 724 L 646 677 L 684 595 L 687 469 L 668 356 L 598 239 L 513 151 L 438 104 L 384 85.1 L 274 47.2 L 230 63 L 236 85.1 L 296 78.8 L 397 31.5 L 498 -37.8 L 605 -107 L 734 -183 L 898 -214 M 895 -214 L 1036.3 -189 L 1080.4 -132 L 1083.6 -104 L 1080.4 -37.8"/>
          <glyph unicode="R" glyph-name="R" horiz-adv-x="639"
                 d="M 498 573 L 419 564 L 356 501 L 340 438 L 293 334 L 208 198 L 154 85.1 L 142 34.6 L 161 3.15 L 198 18.9 L 220 37.8 L 227 44.1 M 81.9 369 L 28.4 419 L 22 495 L 53.5 561 L 161 636 L 274 671 L 406 696 L 558 693 L 671 680 L 772 617 L 813 536 L 788 447 L 677 365 L 554 321 L 432 284 L 334 280 L 202 293 L 198 315 L 312 230 L 381 117 L 498 -22 L 627 -117 L 762 -176 L 882 -176 L 945 -139 L 970 -101 L 976 -66.1"/>
          <glyph unicode="S" glyph-name="S" horiz-adv-x="706"
                 d="M 693 580 L 721 621 L 721 668 L 665 709 L 520 690 L 350 636 L 268 558 L 265 485 L 362 438 L 517 391 L 617 337 L 658 277 L 652 224 L 617 170 L 523 97.6 L 372 34.6 L 167 -6.3 L 63 9.45 L 28.4 47.2 L 18.9 129 L 53.5 202 L 117 255 L 189 293 L 293 324"/>
          <glyph unicode="T" glyph-name="T" horiz-adv-x="554"
                 d="M 56.7 378 L 9.45 425 L -3.15 501 L 37.8 592 L 113 646 L 198 677 L 287 690 L 466 687 L 639 665 L 806 662 L 860 674 L 825 690 L 743 580 L 734 539 L 728 485 L 743 463 M 529 570 L 450 539 L 391 476 L 324 353 L 239 205 L 180 66.1 L 180 25.2 L 198 0 L 230 22 L 268 63"/>
          <glyph unicode="U" glyph-name="U" horiz-adv-x="671"
                 d="M 9.45 476 L 18.9 482 L 104 520 L 167 570 L 233 630 L 249 662 L 280 662 L 208 558 L 104 331 L 53.5 220 L 34.6 117 L 56.7 31.5 L 129 9.45 L 224 40.9 L 343 123 L 504 277 L 621 419 L 702 548 L 743 646 L 737 709 L 696 731 L 646 712 L 595 684 L 548 602 L 513 498 L 479 359 L 444 186 L 422 47.2 L 425 -56.7 L 441 -139 L 463 -180 L 498 -195 L 529 -198 L 558 -183"/>
          <glyph unicode="V" glyph-name="V" horiz-adv-x="737"
                 d="M 53.5 454 L 0 529 L 25.2 611 L 72.5 646 L 189 668 L 302 677 L 391 677 L 447 655 L 469 649 M 331 718 L 337 586 L 299 482 L 258 410 L 211 290 L 164 167 L 142 81.9 L 145 -9.45 L 186 -37.8 L 277 -37.8 L 400 31.5 L 532 154 L 677 343 L 784 507 L 844 598 L 895 662 L 939 696 L 983 724 L 1001.7 724"/>
          <glyph unicode="W" glyph-name="W" horiz-adv-x="1206.4"
                 d="M 69.3 444 L 34.6 476 L 9.45 545 L 47.2 614 L 145 662 L 265 680 L 391 677 L 460 665 L 488 652 M 416 709 L 387 592 L 328 501 L 220 353 L 135 217 L 91.4 145 L 53.5 66.1 L 41 6.3 L 47.2 -37.8 L 63 -56.7 L 97.6 -66.1 L 148 -59.9 L 233 -28.4 L 328 28.4 L 394 85.1 L 495 167 L 586 268 L 684 394 L 712 469 L 721 529 L 712 586 L 677 570 L 665 507 L 668 416 L 662 299 L 687 176 L 731 91.4 L 788 40.9 L 876 3.15 L 939 12.6 L 986 31.5 L 1052.1 126 L 1096.2 224 L 1118.2 324 L 1127.7 387 L 1115.1 517 L 1083.6 598 L 1017.4 649 L 945 668 L 898 662 L 876 643"/>
          <glyph unicode="X" glyph-name="X" horiz-adv-x="806"
                 d="M 66.1 457 L 15.8 491 L 3.15 554 L 25.2 621 L 104 665 L 195 687 L 268 696 L 378 684 L 441 674 L 469 665 L 485 662 M 419 699 L 397 561 L 410 410 L 432 284 L 488 148 L 558 53.6 L 621 15.8 L 702 50.4 L 775 113 L 816 158 M 778 696 L 696 583 L 570 419 L 469 287 L 350 173 L 243 63 L 135 -15.8 L 31.5 -88.2 L -101 -132 L -192 -120 L -246 -101 L -268 -59.9 L -271 -41"/>
          <glyph unicode="Y" glyph-name="Y" horiz-adv-x="627"
                 d="M 28.4 482 L 34.6 485 L 120 523 L 195 583 L 252 646 L 277 665 L 287 668 L 230 554 L 142 394 L 69.3 230 L 56.7 154 L 50.4 75.6 L 85 15.8 L 158 15.8 L 233 53.6 L 334 145 L 403 220 L 463 306 L 542 416 L 595 510 L 621 586 L 662 649 L 715 674 L 759 680 L 684 633 L 633 576 L 583 400 L 526 205 L 457 -6.3 L 406 -113 L 346 -211 L 296 -284 L 233 -346 L 148 -400 L 69.3 -413 L 31.5 -400 L 3.15 -350 L 6.3 -296 L 37.8 -233 L 107 -151 L 205 -59.9 L 331 9.45 L 416 40.9 L 570 91.4 L 598 91.4"/>
          <glyph unicode="Z" glyph-name="Z" horiz-adv-x="627"
                 d="M 145 554 L 135 611 L 180 662 L 255 693 L 381 699 L 501 690 L 595 674 L 674 649 L 734 633 L 788 649 L 822 668 L 835 702 L 803 709 L 759 684 L 721 646 L 595 539 L 457 400 L 362 290 L 302 224 L 227 148 L 164 104 L 107 63 L 56.7 37.8 L 18.9 28.4 L 0 53.6 L 15.8 72.4 L 63 53.6 L 145 22 L 243 -50.4 L 378 -135 L 513 -205 L 671 -205 L 747 -167 L 781 -97.6 L 775 -69.3 L 769 -41 M 239 340 L 236 321 L 621 340"/>
          <glyph unicode="[" glyph-name="bracketleft" horiz-adv-x="526"
                 d="M 570 652 L 444 652 L 318 469 L 180 236 L 94.5 75.6 L 69.3 12.6 L 202 12.6"/>
          <glyph unicode="\" glyph-name="backslash" horiz-adv-x="381"
                 d="M 44.1 652 L 148 447 L 214 277 L 258 161 L 309 28.4"/>
          <glyph unicode="]" glyph-name="bracketright" horiz-adv-x="510"
                 d="M 428 655 L 554 649 L 479 476 L 362 277 L 280 148 L 186 12.6 L 53.5 18.9"/>
          <glyph unicode="^" glyph-name="asciicircum" horiz-adv-x="791" d="M 186 662 L 378 765 L 485 658"/>
          <glyph unicode="_" glyph-name="underscore" horiz-adv-x="709" d="M -28.4 -34.6 L 674 -34.6"/>
          <glyph unicode="`" glyph-name="grave" horiz-adv-x="406" d="M 72.5 523 L 202 444"/>
          <glyph unicode="a" glyph-name="a" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343"/>
          <glyph unicode="b" glyph-name="b" horiz-adv-x="416"
                 d="M -31.5 183 L 47.2 252 L 132 328 L 233 406 L 312 476 L 394 583 L 416 674 L 372 721 L 284 680 L 195 564 L 97.6 359 L 37.8 202 L 28.4 72.4 L 37.8 53.6 L 50.4 145 L 132 243 L 249 315 L 334 334 L 365 296 L 369 252 L 328 183 L 287 120 L 189 40.9 L 135 18.9 L -12.6 -9.45"/>
          <glyph unicode="c" glyph-name="c" horiz-adv-x="346"
                 d="M 243 306 L 239 350 L 198 365 L 101 328 L -15.8 208 L -47.2 170 L -72.4 110 L -66.1 66.1 L -47.2 25.2 L 56.7 15.8 L 186 56.7 L 268 123 L 315 183"/>
          <glyph unicode="d" glyph-name="d" horiz-adv-x="381"
                 d="M 328 312 L 302 356 L 258 369 L 151 334 L 47.2 265 L -37.8 176 L -63 107 L -56.7 50.4 L 12.6 15.8 L 78.8 63 L 176 148 L 277 252 L 387 334 L 532 457 L 668 592 L 693 668 L 690 709 L 639 721 L 561 684 L 510 633 L 441 523 L 387 425 L 293 217 L 246 66.1 L 233 -44.1 L 258 -97.6 L 302 -113 L 340 -101"/>
          <glyph unicode="e" glyph-name="e" horiz-adv-x="346"
                 d="M 66.1 170 L 148 211 L 217 249 L 252 306 L 239 350 L 180 356 L 63 287 L 15.8 252 L -34.6 192 L -66.1 139 L -72.4 88.2 L -50.4 44.1 L 31.5 9.45 L 170 44.1 L 214 81.9 L 277 135 L 315 183"/>
          <glyph unicode="f" glyph-name="f" horiz-adv-x="334"
                 d="M -110 -365 L -59.9 -321 L 9.45 -94.5 L 104 154 L 198 369 L 277 517 L 328 617 L 419 696 L 466 718 L 523 696 L 507 598 L 406 444 L 290 321 L 220 261 L 173 220 L 117 192 L 25.2 183 L 28.4 208 L 208 205 L 306 217"/>
          <glyph unicode="g" glyph-name="g" horiz-adv-x="469"
                 d="M 306 350 L 195 353 L 69.3 287 L -15.8 205 L -56.7 164 L -78.8 110 L -59.9 56.7 L -18.9 18.9 L 91.4 69.3 L 176 158 L 265 252 L 287 274 L 318 274 L 164 -85 L 34.6 -331 L -22 -381 L -72.4 -410 L -117 -416 L -167 -381 L -148 -280 L -78.8 -220 L 22 -132 L 85 -88.2 L 258 22 L 369 110 L 438 183"/>
          <glyph unicode="h" glyph-name="h" horiz-adv-x="561"
                 d="M -31.5 183 L 113 315 L 343 482 L 447 605 L 469 702 L 394 718 L 324 662 L 255 586 L 180 457 L 101 309 L 12.6 31.5 L 110 148 L 192 252 L 287 315 L 328 334 L 350 312 L 340 261 L 290 183 L 261 75.6 L 284 18.9 L 350 18.9 L 413 63 L 482 129 L 529 183"/>
          <glyph unicode="i" glyph-name="i" horiz-adv-x="249"
                 d="M -31.5 183 L 37.8 236 L 59.9 328 L -37.8 85.1 L -18.9 22 L 53.5 6.3 L 132 69.3 L 183 129 L 217 183 M 123 476 L 94.5 438"/>
          <glyph unicode="j" glyph-name="j" horiz-adv-x="258"
                 d="M -31.5 183 L 66.1 287 L 104 312 L 113 299 L -81.9 -145 L -173 -309 L -243 -391 L -306 -416 L -365 -406 L -387 -353 L -359 -287 L -252 -183 L -69.3 -59.9 L 56.7 31.5 L 151 107 L 227 183 M 205 482 L 167 444 L 186 428"/>
          <glyph unicode="k" glyph-name="k" horiz-adv-x="356"
                 d="M -31.5 183 L 31.5 252 L 97.6 337 M 72.5 356 L 158 356 L 271 428 L 381 542 L 438 627 L 450 696 L 406 728 L 318 696 L 249 617 L 183 498 L 126 394 L 18.9 139 L -18.9 12.6 L 25.2 53.6 L 113 173 L 214 284 L 290 343 L 340 346 M 139 249 L 186 44.1 L 258 -85 L 362 -148 L 428 -148 L 457 -120 L 460 -101 L 457 -66.1"/>
          <glyph unicode="l" glyph-name="l" horiz-adv-x="261"
                 d="M -25.2 176 L 91.4 265 L 239 428 L 346 589 L 394 662 L 381 709 L 312 718 L 243 674 L 148 532 L 41 340 L -28.4 198 L -50.4 85.1 L -22 25.2 L 44.1 18.9 L 120 53.6 L 195 132 L 230 183"/>
          <glyph unicode="m" glyph-name="m" horiz-adv-x="687"
                 d="M -31.5 183 L 47.2 255 L 75.6 321 L -34.6 28.4 L 37.8 104 L 167 252 L 233 309 L 280 337 L 302 340 L 309 312 L 296 274 L 208 107 L 318 195 L 403 261 L 491 293 L 447 230 L 400 94.5 L 413 37.8 L 472 18.9 L 561 69.3 L 655 183"/>
          <glyph unicode="n" glyph-name="n" horiz-adv-x="580"
                 d="M 148 328 L 41 25.2 L 183 186 L 271 280 L 334 318 L 381 337 L 394 312 L 331 195 L 290 101 L 293 47.2 L 328 15.8 L 387 25.2 L 450 69.3 L 513 132 L 548 183"/>
          <glyph unicode="o" glyph-name="o" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183"/>
          <glyph unicode="p" glyph-name="p" horiz-adv-x="356"
                 d="M 25.2 359 L -72.4 56.7 L -176 -192 L -227 -350 L -255 -369 L -91.4 37.8 L -44.1 12.6 L 85 63 L 208 135 L 258 227 L 268 299 L 227 346 L 139 321 L 72.5 274 L 15.8 198 L -25.2 148 L -91.4 31.5"/>
          <glyph unicode="q" glyph-name="q" horiz-adv-x="542"
                 d="M 324 334 L 224 359 L 88.2 293 L -34.6 180 L -59.9 120 L -53.6 69.3 L -31.5 28.4 L 34.6 25.2 L 120 75.6 L 186 154 L 315 284 L 422 416 L 372 406 L 255 91.4 L 139 -205 L 129 -350 L 161 -403 L 246 -403 L 280 -356 L 293 -249 L 280 -110 L 246 34.6 L 321 28.4 L 413 78.8 L 476 135 L 507 183"/>
          <glyph unicode="r" glyph-name="r" horiz-adv-x="369"
                 d="M -31.5 183 L 34.6 287 L 154 463 L 47.2 391 L 47.2 365 L 59.9 356 L 258 353 L 145 214 L 81.9 101 L 97.6 22 L 186 28.4 L 296 132 L 337 183"/>
          <glyph unicode="s" glyph-name="s" horiz-adv-x="302"
                 d="M -31.5 183 L 9.45 217 L 34.6 261 L 66.1 328 L 117 394 L 249 447 L 293 454 L 343 444 L 350 413 L 343 381 L 328 365 M 53.5 274 L 72.5 233 L 161 183 L 198 135 L 195 88.2 L 151 34.6 L 78.8 -6.3 L 31.5 -28.4 L -25.2 -31.5 L -34.6 -18.9 L -34.6 15.8 L -15.8 34.6"/>
          <glyph unicode="t" glyph-name="t" horiz-adv-x="290"
                 d="M -31.5 183 L 18.9 224 L 53.5 261 L 110 337 L 183 457 L 217 510 L 183 517 L 9.45 151 L -6.3 66.1 L 18.9 22 L 97.6 28.4 L 192 110 L 258 183 M 53.5 346 L 258 356"/>
          <glyph unicode="u" glyph-name="u" horiz-adv-x="495"
                 d="M 47.2 309 L -18.9 217 L -53.6 123 L -56.7 56.7 L -9.45 28.4 L 78.8 53.6 L 145 139 L 227 239 L 293 353 L 324 343 L 214 164 L 205 97.6 L 202 53.6 L 255 22 L 321 40.9 L 413 120 L 463 183"/>
          <glyph unicode="v" glyph-name="v" horiz-adv-x="321"
                 d="M -31.5 183 L 56.7 274 L 72.5 312 L 69.3 337 L 34.6 356 L 0 356 M 41 334 L 28.4 170 L 0 85.1 L 0 9.45 L 126 186 L 224 299 L 318 381 L 403 432 L 447 419"/>
          <glyph unicode="w" glyph-name="w" horiz-adv-x="554"
                 d="M 69.3 346 L -12.6 227 L -56.7 120 L -63 69.3 L -50.4 31.5 L -3.15 18.9 L 56.7 40.9 L 120 113 L 195 227 L 236 290 L 265 287 L 205 176 L 195 85.1 L 224 31.5 L 280 15.8 L 391 81.9 L 501 205 L 551 312 L 551 369 L 529 422 L 476 435"/>
          <glyph unicode="x" glyph-name="x" horiz-adv-x="488"
                 d="M -31.5 183 L 59.9 306 L 126 321 L 142 277 L 158 202 L 180 117 L 202 40.9 L 271 12.6 L 340 40.9 L 397 101 L 457 183 M 400 346 L 362 343 L 227 236 L 110 135 L -3.15 6.3 L -81.9 -101 L -97.6 -132 L -117 -183"/>
          <glyph unicode="y" glyph-name="y" horiz-adv-x="488"
                 d="M 88.2 312 L 3.15 233 L -31.5 186 L -47.2 132 L -53.6 85.1 L -37.8 47.2 L 12.6 31.5 L 69.3 47.2 L 176 151 L 280 277 L 334 334 L 369 331 L 274 139 L 183 -97.6 L 107 -230 L 28.4 -346 L -28.4 -397 L -135 -394 L -167 -346 L -123 -252 L -15.8 -167 L 123 -66.1 L 265 9.45 L 406 123 L 457 183"/>
          <glyph unicode="z" glyph-name="z" horiz-adv-x="551"
                 d="M 34.6 202 L 85 277 L 145 331 L 214 340 L 302 315 L 384 296 L 447 318 L 457 340 L 432 356 L 397 334 L 340 280 L 126 85.1 L 59.9 22 L 3.15 9.45 L -12.6 37.8 L 18.9 66.1 L 66.1 66.1 L 117 40.9 L 220 -15.8 L 315 -18.9 L 384 28.4 L 469 117 L 520 183"/>
          <glyph unicode="{" glyph-name="braceleft" horiz-adv-x="488"
                 d="M 432 668 L 299 643 L 233 545 L 227 444 L 189 384 L 132 369 L 63 362 L 126 328 L 154 274 L 123 208 L 75.6 158 L 34.6 72.4 L 72.5 -3.15 L 113 -18.9 L 158 -28.4"/>
          <glyph unicode="|" glyph-name="bar" horiz-adv-x="296" d="M 132 684 L 126 -28.4"/>
          <glyph unicode="}" glyph-name="braceright" horiz-adv-x="558"
                 d="M 372 674 L 447 665 L 482 627 L 472 567 L 432 510 L 397 444 L 369 384 L 419 362 L 482 356 L 375 315 L 324 274 L 302 227 L 293 145 L 255 75.6 L 161 -18.9 L 120 -28.4 L 28.4 -31.5"/>
          <glyph unicode="~" glyph-name="asciitilde" horiz-adv-x="491"
                 d="M 161 463 L 195 498 L 246 498 L 321 472 L 384 447 L 406 469 L 422 482"/>
          <glyph unicode="&#xa0;" glyph-name="nbspace" horiz-adv-x="378"/>
          <glyph unicode="&#xa1;" glyph-name="exclamdown" horiz-adv-x="359"
                 d="M 110 40.9 L 151 113 L 258 343 L 321 491 M 350 643 L 372 665"/>
          <glyph unicode="&#xa2;" glyph-name="cent" horiz-adv-x="266"
                 d="M 243 306 L 239 350 L 198 365 L 101 328 L -15.8 208 L -47.2 170 L -72.4 110 L -66.1 66.1 L -47.2 25.2 L 56.7 15.8 L 186 56.7 L 268 123 L 315 183 M 119 530 L 113 -111"/>
          <glyph unicode="&#xa3;" glyph-name="sterling" horiz-adv-x="942"
                 d="M 449 411 L 784 435 M 1001.7 709 L 1017.4 806 L 995 863 L 920 895 L 841 869 L 753 819 L 671 712 L 608 580 L 561 422 L 491 217 L 432 139 L 340 40.9 L 186 9.45 L 101 31.5 L 66.1 63 L 78.8 129 L 161 173 L 243 176 L 343 139 L 463 75.6 L 583 25.2 L 690 12.6 L 806 40.9 L 873 81.9 L 914 145"/>
          <glyph unicode="&#xa5;" glyph-name="yen" horiz-adv-x="510"
                 d="M 53.5 662 L 110 469 L 164 378 L 224 321 L 280 312 L 340 334 L 413 413 L 469 504 L 491 589 L 498 639 L 463 665 L 419 655 L 384 611 L 343 510 L 328 391 L 306 268 L 306 94.5 L 315 -53.5 M 186 135 L 416 135 M 186 261 L 416 261"/>
          <glyph unicode="&#xa6;" glyph-name="brokenbar" horiz-adv-x="90.7"
                 d="M 290 220 L 293 142 L 285 68 L 279 15.1 L 273 -15.1 L 267 -37.8 M 290 693 L 293 614 L 285 541 L 279 488 L 273 457 L 267 435"/>
          <glyph unicode="&#xa8;" glyph-name="dieresis" horiz-adv-x="567" d=" M 312 499 L 296 474 M 527 525 L 511 500"/>
          <glyph unicode="&#xa9;" glyph-name="copyright" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 369 339 L 422 343 L 484 378 L 529 421 L 550 461 L 540 498 L 502 513 L 408 488 L 345 446 L 276 367 L 241 298 L 227 224 L 250 170 L 315 142 L 394 150 L 458 175 L 518 214 L 554 252"/>
          <glyph unicode="&#xaa;" glyph-name="ordfeminine" horiz-adv-x="263"
                 d="M 405 721 L 386 696 L 361 669 L 323 646 L 293 639 L 279 662 L 285 701 L 306 767 L 296 751 L 246 702 L 192 658 L 148 639 L 126 663 L 129 707 L 175 761 L 232 795 L 272 808 L 313 808 L 320 802"/>
          <glyph unicode="&#xab;" glyph-name="guillemotleft" horiz-adv-x="270"
                 d="M 156 449 L 40.3 222 L 66.8 149 L 83.2 106 L 101 47.9 M 282 449 L 166 222 L 193 149 L 209 106 L 227 47.9"/>
          <glyph unicode="&#xae;" glyph-name="registered" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 438 444 L 398 439 L 367 408 L 359 376 L 335 324 L 293 257 L 266 200 L 260 175 L 269 159 L 288 167 L 299 176 L 302 180 M 230 342 L 203 367 L 200 405 L 216 438 L 269 476 L 326 493 L 392 506 L 468 504 L 524 498 L 575 466 L 595 425 L 583 381 L 528 340 L 466 318 L 405 299 L 356 298 L 290 304 L 288 315 L 345 272 L 380 216 L 438 146 L 502 99.2 L 570 69.3 L 630 69.3 L 662 88.2 L 674 107 L 677 124"/>
          <glyph unicode="&#xb0;" glyph-name="degree" horiz-adv-x="306"
                 d="M 153 665 L 153 667 L 168 714 L 198 747 L 242 771 L 275 782 L 307 781 L 337 776 L 363 755 L 375 725 L 379 703 L 374 664 L 360 627 L 333 591 L 304 567 L 276 554 L 229 551 L 196 567 L 177 606 L 180 656 L 197 687 L 222 717 L 248 730 L 267 740 L 280 740 L 293 738"/>
          <glyph unicode="&#xb1;" glyph-name="plusminus" horiz-adv-x="585"
                 d="M 582 0 L 764 5.04 M 534 383 L 922 383 M 801 534 L 653 202"/>
          <glyph unicode="&#xb2;" glyph-name="twosuperior" horiz-adv-x="351"
                 d="M 257 876 L 255 880 L 255 898 L 301 931 L 343 945 L 394 951 L 444 940 L 468 923 L 482 885 L 466 846 L 427 803 L 375 762 L 332 732 L 288 704 L 257 687 L 243 679 L 219 663 L 209 654 L 186 638 L 186 654 L 198 671 L 217 677 L 250 676 L 285 663 L 307 649 L 359 628 L 414 627 L 443 639 L 466 658 L 472 673"/>
          <glyph unicode="&#xb3;" glyph-name="threesuperior" horiz-adv-x="332"
                 d="M 277 879 L 285 914 L 318 939 L 361 950 L 397 951 L 436 942 L 460 912 L 461 879 L 452 860 L 430 841 L 413 827 L 376 819 L 339 813 L 313 803 L 307 808 L 304 822 L 342 819 L 398 808 L 425 799 L 441 775 L 446 734 L 435 702 L 405 669 L 372 646 L 334 630 L 268 621 L 232 625 L 209 639 L 195 666 L 200 685 L 208 696"/>
          <glyph unicode="&#xb4;" glyph-name="acute" horiz-adv-x="378" d=" M 291 609 L 162 530"/>
          <glyph unicode="&#xb7;" glyph-name="middot" horiz-adv-x="268" d="M 249 340 L 231 310"/>
          <glyph unicode="&#xb9;" glyph-name="onesuperior" horiz-adv-x="189"
                 d="M 243 855 L 288 891 L 315 925 L 335 953 L 350 953 L 301 844 L 254 736 L 235 680 L 230 649 M 161 635 L 192 646 L 224 646 L 260 649 L 299 647"/>
          <glyph unicode="&#xba;" glyph-name="ordmasculine" horiz-adv-x="306"
                 d="M 153 665 L 153 667 L 168 714 L 198 747 L 242 771 L 275 782 L 307 781 L 337 776 L 363 755 L 375 725 L 379 703 L 374 664 L 360 627 L 333 591 L 304 567 L 276 554 L 229 551 L 196 567 L 177 606 L 180 656 L 197 687 L 222 717 L 248 730 L 267 740 L 280 740 L 293 738"/>
          <glyph unicode="&#xbb;" glyph-name="guillemotright" horiz-adv-x="284"
                 d="M 101 444 L 131 350 L 156 300 L 117 224 L 69.3 131 L 34 63 M 227 444 L 257 350 L 282 300 L 243 224 L 195 131 L 160 63"/>
          <glyph unicode="&#xbc;" glyph-name="onequarter" horiz-adv-x="505"
                 d="M 102 648 L 157 692 L 189 731 L 214 765 L 231 765 L 172 635 L 115 505 L 92.6 438 L 86.9 401 M 3.78 384 L 41.6 397 L 79.4 397 L 123 401 L 170 399 M 639 655 L 410 356 L 284 183 L 183 22 M 618 -3.78 L 633 56.7 L 665 149 L 724 278 L 775 382 L 696 316 L 616 253 L 535 204 L 495 170 L 471 134 L 503 151 L 525 161 L 582 161 L 629 159 L 673 149 L 718 149 L 767 168 L 790 183 L 805 202"/>
          <glyph unicode="&#xbd;" glyph-name="onehalf" horiz-adv-x="583"
                 d="M 102 648 L 157 692 L 189 731 L 214 765 L 231 765 L 172 635 L 115 505 L 92.6 438 L 86.9 401 M 3.78 384 L 41.6 397 L 79.4 397 L 123 401 L 170 399 M 639 655 L 410 356 L 284 183 L 183 22 M 592 295 L 590 301 L 590 321 L 644 361 L 696 378 L 756 386 L 816 372 L 845 352 L 862 306 L 843 259 L 796 208 L 733 159 L 682 123 L 629 88.8 L 592 68 L 575 58.6 L 546 39.7 L 535 28.3 L 507 9.45 L 507 28.3 L 522 49.1 L 544 56.7 L 584 54.8 L 626 39.7 L 652 22.7 L 714 -1.89 L 781 -3.78 L 815 11.3 L 843 34 L 850 51"/>
          <glyph unicode="&#xbe;" glyph-name="threequarters" horiz-adv-x="660"
                 d="M 144 677 L 153 718 L 193 748 L 244 762 L 287 764 L 335 752 L 363 716 L 365 677 L 353 654 L 327 631 L 306 614 L 263 605 L 217 597 L 187 586 L 180 592 L 176 609 L 221 605 L 289 592 L 321 580 L 340 552 L 346 503 L 333 465 L 297 425 L 257 397 L 212 378 L 132 367 L 88.8 372 L 62.4 389 L 45.4 421 L 51 444 L 60.5 457 M 639 655 L 410 356 L 284 183 L 183 22 M 618 -3.78 L 633 56.7 L 665 149 L 724 278 L 775 382 L 696 316 L 616 253 L 535 204 L 495 170 L 471 134 L 503 151 L 525 161 L 582 161 L 629 159 L 673 149 L 718 149 L 767 168 L 790 183 L 805 202"/>
          <glyph unicode="&#xbf;" glyph-name="questiondown" horiz-adv-x="564"
                 d="M 466 167 L 454 126 L 432 104 L 359 63 L 296 31.5 L 192 34.6 L 135 75.6 L 107 167 L 139 252 L 183 315 L 243 362 L 290 391 L 359 447 L 391 491 L 403 523 M 476 671 L 498 696"/>
          <glyph unicode="&#xc0;" glyph-name="Agrave" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293 M 728 918 L 857 839"/>
          <glyph unicode="&#xc1;" glyph-name="Aacute" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293 M 1055.8 949 L 927 870"/>
          <glyph unicode="&#xc2;" glyph-name="Acircumflex" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293 M 818 889 L 938 953 L 1004.1 887"/>
          <glyph unicode="&#xc3;" glyph-name="Atilde" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293 M 925 876 L 954 905 L 995 905 L 1057.1 884 L 1109.0 864 L 1127.1 882 L 1140.0 892"/>
          <glyph unicode="&#xc4;" glyph-name="Adieresis" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293 M 737 889 L 721 864 M 993 924 L 977 899"/>
          <glyph unicode="&#xc5;" glyph-name="Aring" horiz-adv-x="1061.6"
                 d="M -9.45 40.9 L 9.45 -15.8 L 66.1 -56.7 L 154 -66.1 L 274 -25.2 L 406 78.8 L 529 205 L 662 359 L 737 463 L 813 558 L 882 636 L 939 699 L 958 706 L 876 570 L 797 346 L 753 189 L 750 97.6 L 775 18.9 L 819 3.15 L 910 53.6 L 986 126 L 1030.1 180 M 129 161 L 132 246 L 167 302 L 249 331 L 324 334 L 441 312 L 513 296 L 652 280 L 813 261 L 901 261 L 929 274 L 958 293 M 897 949 L 897 951 L 912 998 L 941 1030.0 L 986 1054.6 L 1018.7 1065.0 L 1050.8 1064.1 L 1081.1 1059.3 L 1106.6 1038.6 L 1118.9 1008.3 L 1122.7 987 L 1117.9 948 L 1103.8 910 L 1076.4 874 L 1048.0 850 L 1019.7 837 L 972 834 L 939 850 L 920 889 L 924 939 L 940 971 L 966 1000.8 L 991 1014.0 L 1011.1 1023.4 L 1023.4 1023.4 L 1036.7 1021.5"/>
          <glyph unicode="&#xc8;" glyph-name="Egrave" horiz-adv-x="850"
                 d="M 662 580 L 668 504 L 589 662 L 501 718 L 400 706 L 324 621 L 328 526 L 365 428 L 406 372 L 444 321 L 504 306 L 507 337 L 466 350 L 359 346 L 180 321 L 41 217 L -3.15 107 L 44.1 9.45 L 170 -50.4 L 318 -47.2 L 498 -22 L 643 37.8 L 756 113 L 803 180 L 810 205 L 806 252 M 434 917 L 563 838"/>
          <glyph unicode="&#xc9;" glyph-name="Eacute" horiz-adv-x="850"
                 d="M 662 580 L 668 504 L 589 662 L 501 718 L 400 706 L 324 621 L 328 526 L 365 428 L 406 372 L 444 321 L 504 306 L 507 337 L 466 350 L 359 346 L 180 321 L 41 217 L -3.15 107 L 44.1 9.45 L 170 -50.4 L 318 -47.2 L 498 -22 L 643 37.8 L 756 113 L 803 180 L 810 205 L 806 252 M 738 975 L 609 896"/>
          <glyph unicode="&#xca;" glyph-name="Ecircumflex" horiz-adv-x="850"
                 d="M 662 580 L 668 504 L 589 662 L 501 718 L 400 706 L 324 621 L 328 526 L 365 428 L 406 372 L 444 321 L 504 306 L 507 337 L 466 350 L 359 346 L 180 321 L 41 217 L -3.15 107 L 44.1 9.45 L 170 -50.4 L 318 -47.2 L 498 -22 L 643 37.8 L 756 113 L 803 180 L 810 205 L 806 252 M 437 859 L 553 922 L 619 857"/>
          <glyph unicode="&#xcb;" glyph-name="Edieresis" horiz-adv-x="850"
                 d="M 662 580 L 668 504 L 589 662 L 501 718 L 400 706 L 324 621 L 328 526 L 365 428 L 406 372 L 444 321 L 504 306 L 507 337 L 466 350 L 359 346 L 180 321 L 41 217 L -3.15 107 L 44.1 9.45 L 170 -50.4 L 318 -47.2 L 498 -22 L 643 37.8 L 756 113 L 803 180 L 810 205 L 806 252 M 552 899 L 536 874 M 802 906 L 786 880"/>
          <glyph unicode="&#xcc;" glyph-name="Igrave" horiz-adv-x="548"
                 d="M 501 693 L 410 413 L 334 224 L 280 126 L 220 50.4 L 167 28.4 L 97.6 18.9 L 9.45 25.2 L -6.3 50.4 L 22 72.4 L 66.1 40.9 L 117 31.5 L 447 37.8 M 233 450 L 176 523 L 202 602 L 277 665 L 394 684 L 523 677 L 598 674 L 665 649 M 295 931 L 424 852"/>
          <glyph unicode="&#xcd;" glyph-name="Iacute" horiz-adv-x="548"
                 d="M 501 693 L 410 413 L 334 224 L 280 126 L 220 50.4 L 167 28.4 L 97.6 18.9 L 9.45 25.2 L -6.3 50.4 L 22 72.4 L 66.1 40.9 L 117 31.5 L 447 37.8 M 233 450 L 176 523 L 202 602 L 277 665 L 394 684 L 523 677 L 598 674 L 665 649 M 587 961 L 458 882"/>
          <glyph unicode="&#xce;" glyph-name="Icircumflex" horiz-adv-x="548"
                 d="M 501 693 L 410 413 L 334 224 L 280 126 L 220 50.4 L 167 28.4 L 97.6 18.9 L 9.45 25.2 L -6.3 50.4 L 22 72.4 L 66.1 40.9 L 117 31.5 L 447 37.8 M 233 450 L 176 523 L 202 602 L 277 665 L 394 684 L 523 677 L 598 674 L 665 649 M 365 908 L 489 975 L 558 906"/>
          <glyph unicode="&#xcf;" glyph-name="Idieresis" horiz-adv-x="548"
                 d="M 501 693 L 410 413 L 334 224 L 280 126 L 220 50.4 L 167 28.4 L 97.6 18.9 L 9.45 25.2 L -6.3 50.4 L 22 72.4 L 66.1 40.9 L 117 31.5 L 447 37.8 M 233 450 L 176 523 L 202 602 L 277 665 L 394 684 L 523 677 L 598 674 L 665 649 M 409 928 L 393 902 M 660 928 L 644 902"/>
          <glyph unicode="&#xd0;" glyph-name="Eth" horiz-adv-x="1033.2"
                 d="M 306 284 L 578 291 M 652 554 L 545 507 L 472 403 L 454 334 L 387 186 L 350 107 L 302 9.45 L 265 -44.1 L 236 -37.8 L 205 31.5 L 202 113 L 214 208 L 233 145 L 375 34.6 L 510 -9.45 L 728 25.2 L 863 113 L 976 220 L 1033.2 372 L 1020.6 532 L 951 627 L 828 680 L 608 706 L 413 671 L 261 614 L 154 548 L 94.5 460 L 85 384 L 126 321 L 189 293"/>
          <glyph unicode="&#xd1;" glyph-name="Ntilde" horiz-adv-x="932"
                 d="M -230 -37.8 L -211 -91.4 L -154 -126 L -66.1 -107 L 37.8 -34.6 L 129 107 L 214 271 L 274 432 L 321 561 L 350 658 L 359 328 L 381 189 L 447 34.6 L 507 -18.9 L 573 -34.6 L 643 0 L 731 129 L 788 274 L 825 472 L 832 589 L 819 646 L 797 709 L 844 643 L 873 605 L 898 586 L 926 570 M 158 513 L 170 517 L 258 558 L 293 595 L 328 658 M 158 513 L 170 517 L 258 558 L 293 595 L 328 658 M 473 827 L 500 855 L 540 855 L 600 835 L 649 815 L 667 832 L 679 842"/>
          <glyph unicode="&#xd2;" glyph-name="Ograve" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 470 944 L 600 865"/>
          <glyph unicode="&#xd3;" glyph-name="Oacute" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 741 954 L 612 875"/>
          <glyph unicode="&#xd4;" glyph-name="Ocircumflex" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 404 793 L 513 852 L 573 792"/>
          <glyph unicode="&#xd5;" glyph-name="Otilde" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 411 861 L 439 890 L 480 890 L 541 869 L 593 849 L 611 866 L 623 877"/>
          <glyph unicode="&#xd6;" glyph-name="Odieresis" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 507 913 L 491 888 M 806 930 L 790 905"/>
          <glyph unicode="&#xd7;" glyph-name="multiply" horiz-adv-x="324"
                 d="M 88.2 369 L 132 381 L 158 397 L 180 343 L 220 214 L 246 85.1 L 265 31.5 L 261 12.6 M 365 397 L 362 406 L 287 334 L 170 208 L 81.9 101 L 18.9 25.2 L -18.9 -25.2 L -37.8 -66.1"/>
          <glyph unicode="&#xd8;" glyph-name="Oslash" horiz-adv-x="850"
                 d="M 37.8 328 L 37.8 334 L 88.2 491 L 186 598 L 334 680 L 444 715 L 551 712 L 652 696 L 737 627 L 778 526 L 791 454 L 775 324 L 728 198 L 636 78.8 L 542 0 L 447 -44.1 L 290 -53.5 L 180 0 L 117 129 L 129 296 L 183 400 L 268 501 L 353 545 L 419 576 L 460 576 L 504 570 M 778 757 L 468 353 L 298 119 L 162 -97.8"/>
          <glyph unicode="&#xd9;" glyph-name="Ugrave" horiz-adv-x="671"
                 d="M 9.45 476 L 18.9 482 L 104 520 L 167 570 L 233 630 L 249 662 L 280 662 L 208 558 L 104 331 L 53.5 220 L 34.6 117 L 56.7 31.5 L 129 9.45 L 224 40.9 L 343 123 L 504 277 L 621 419 L 702 548 L 743 646 L 737 709 L 696 731 L 646 712 L 595 684 L 548 602 L 513 498 L 479 359 L 444 186 L 422 47.2 L 425 -56.7 L 441 -139 L 463 -180 L 498 -195 L 529 -198 L 558 -183 M 430 919 L 559 840"/>
          <glyph unicode="&#xda;" glyph-name="Uacute" horiz-adv-x="671"
                 d="M 9.45 476 L 18.9 482 L 104 520 L 167 570 L 233 630 L 249 662 L 280 662 L 208 558 L 104 331 L 53.5 220 L 34.6 117 L 56.7 31.5 L 129 9.45 L 224 40.9 L 343 123 L 504 277 L 621 419 L 702 548 L 743 646 L 737 709 L 696 731 L 646 712 L 595 684 L 548 602 L 513 498 L 479 359 L 444 186 L 422 47.2 L 425 -56.7 L 441 -139 L 463 -180 L 498 -195 L 529 -198 L 558 -183 M 664 981 L 535 902"/>
          <glyph unicode="&#xdb;" glyph-name="Ucircumflex" horiz-adv-x="671"
                 d="M 9.45 476 L 18.9 482 L 104 520 L 167 570 L 233 630 L 249 662 L 280 662 L 208 558 L 104 331 L 53.5 220 L 34.6 117 L 56.7 31.5 L 129 9.45 L 224 40.9 L 343 123 L 504 277 L 621 419 L 702 548 L 743 646 L 737 709 L 696 731 L 646 712 L 595 684 L 548 602 L 513 498 L 479 359 L 444 186 L 422 47.2 L 425 -56.7 L 441 -139 L 463 -180 L 498 -195 L 529 -198 L 558 -183 M 337 795 L 444 853 L 503 793"/>
          <glyph unicode="&#xdc;" glyph-name="Udieresis" horiz-adv-x="671"
                 d="M 9.45 476 L 18.9 482 L 104 520 L 167 570 L 233 630 L 249 662 L 280 662 L 208 558 L 104 331 L 53.5 220 L 34.6 117 L 56.7 31.5 L 129 9.45 L 224 40.9 L 343 123 L 504 277 L 621 419 L 702 548 L 743 646 L 737 709 L 696 731 L 646 712 L 595 684 L 548 602 L 513 498 L 479 359 L 444 186 L 422 47.2 L 425 -56.7 L 441 -139 L 463 -180 L 498 -195 L 529 -198 L 558 -183 M 454 944 L 438 919 M 690 908 L 674 883"/>
          <glyph unicode="&#xdd;" glyph-name="Yacute" horiz-adv-x="627"
                 d="M 28.4 482 L 34.6 485 L 120 523 L 195 583 L 252 646 L 277 665 L 287 668 L 230 554 L 142 394 L 69.3 230 L 56.7 154 L 50.4 75.6 L 85 15.8 L 158 15.8 L 233 53.6 L 334 145 L 403 220 L 463 306 L 542 416 L 595 510 L 621 586 L 662 649 L 715 674 L 759 680 L 684 633 L 633 576 L 583 400 L 526 205 L 457 -6.3 L 406 -113 L 346 -211 L 296 -284 L 233 -346 L 148 -400 L 69.3 -413 L 31.5 -400 L 3.15 -350 L 6.3 -296 L 37.8 -233 L 107 -151 L 205 -59.9 L 331 9.45 L 416 40.9 L 570 91.4 L 598 91.4 M 646 971 L 517 892"/>
          <glyph unicode="&#xe0;" glyph-name="agrave" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343 M 88.5 571 L 218 492"/>
          <glyph unicode="&#xe1;" glyph-name="aacute" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343 M 372 601 L 243 522"/>
          <glyph unicode="&#xe2;" glyph-name="acircumflex" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343 M 107 464 L 217 524 L 278 463"/>
          <glyph unicode="&#xe3;" glyph-name="atilde" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343 M 147 493 L 175 521 L 216 521 L 276 501 L 327 481 L 345 498 L 357 509"/>
          <glyph unicode="&#xe4;" glyph-name="adieresis" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343 M 239 526 L 223 501 M 508 501 L 493 476"/>
          <glyph unicode="&#xe5;" glyph-name="aring" horiz-adv-x="526"
                 d="M 495 183 L 457 132 L 406 78.8 L 331 31.5 L 271 18.9 L 243 63 L 255 142 L 296 274 L 277 243 L 176 145 L 69.3 56.7 L -18.9 18.9 L -63 66.1 L -56.7 154 L 34.6 261 L 148 331 L 230 356 L 312 356 L 324 343 M 200 665 L 200 667 L 215 714 L 245 747 L 289 771 L 322 782 L 354 781 L 385 776 L 410 755 L 422 725 L 426 703 L 421 664 L 407 627 L 380 591 L 352 567 L 323 554 L 276 551 L 243 567 L 224 606 L 228 656 L 244 687 L 269 717 L 295 730 L 315 740 L 327 740 L 340 738"/>
          <glyph unicode="&#xe8;" glyph-name="egrave" horiz-adv-x="346"
                 d="M 66.1 170 L 148 211 L 217 249 L 252 306 L 239 350 L 180 356 L 63 287 L 15.8 252 L -34.6 192 L -66.1 139 L -72.4 88.2 L -50.4 44.1 L 31.5 9.45 L 170 44.1 L 214 81.9 L 277 135 L 315 183 M -21 577 L 108 498"/>
          <glyph unicode="&#xe9;" glyph-name="eacute" horiz-adv-x="346"
                 d="M 66.1 170 L 148 211 L 217 249 L 252 306 L 239 350 L 180 356 L 63 287 L 15.8 252 L -34.6 192 L -66.1 139 L -72.4 88.2 L -50.4 44.1 L 31.5 9.45 L 170 44.1 L 214 81.9 L 277 135 L 315 183 M 274 608 L 144 529"/>
          <glyph unicode="&#xea;" glyph-name="ecircumflex" horiz-adv-x="346"
                 d="M 66.1 170 L 148 211 L 217 249 L 252 306 L 239 350 L 180 356 L 63 287 L 15.8 252 L -34.6 192 L -66.1 139 L -72.4 88.2 L -50.4 44.1 L 31.5 9.45 L 170 44.1 L 214 81.9 L 277 135 L 315 183 M 59.2 459 L 168 518 L 229 457"/>
          <glyph unicode="&#xeb;" glyph-name="edieresis" horiz-adv-x="346"
                 d="M 66.1 170 L 148 211 L 217 249 L 252 306 L 239 350 L 180 356 L 63 287 L 15.8 252 L -34.6 192 L -66.1 139 L -72.4 88.2 L -50.4 44.1 L 31.5 9.45 L 170 44.1 L 214 81.9 L 277 135 L 315 183 M 164 498 L 148 472 M 410 481 L 394 455"/>
          <glyph unicode="&#xec;" glyph-name="igrave" horiz-adv-x="249"
                 d="M -31.5 183 L 37.8 236 L 59.9 328 L -37.8 85.1 L -18.9 22 L 53.5 6.3 L 132 69.3 L 183 129 L 217 183  M -68.8 592 L 60.4 513"/>
          <glyph unicode="&#xed;" glyph-name="iacute" horiz-adv-x="249"
                 d="M -31.5 183 L 37.8 236 L 59.9 328 L -37.8 85.1 L -18.9 22 L 53.5 6.3 L 132 69.3 L 183 129 L 217 183  M 246 602 L 117 523"/>
          <glyph unicode="&#xee;" glyph-name="icircumflex" horiz-adv-x="249"
                 d="M -31.5 183 L 37.8 236 L 59.9 328 L -37.8 85.1 L -18.9 22 L 53.5 6.3 L 132 69.3 L 183 129 L 217 183  M 37.9 450 L 145 508 L 204 449"/>
          <glyph unicode="&#xef;" glyph-name="idieresis" horiz-adv-x="249"
                 d="M -31.5 183 L 37.8 236 L 59.9 328 L -37.8 85.1 L -18.9 22 L 53.5 6.3 L 132 69.3 L 183 129 L 217 183  M 109 517 L 93.6 492 M 343 530 L 327 505"/>
          <glyph unicode="&#xf1;" glyph-name="ntilde" horiz-adv-x="580"
                 d="M 148 328 L 41 25.2 L 183 186 L 271 280 L 334 318 L 381 337 L 394 312 L 331 195 L 290 101 L 293 47.2 L 328 15.8 L 387 25.2 L 450 69.3 L 513 132 L 548 183 M 143 488 L 170 515 L 209 515 L 267 495 L 316 476 L 333 493 L 345 503"/>
          <glyph unicode="&#xf2;" glyph-name="ograve" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183 M 1.29 590 L 130 511"/>
          <glyph unicode="&#xf3;" glyph-name="oacute" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183 M 295 568 L 166 489"/>
          <glyph unicode="&#xf4;" glyph-name="ocircumflex" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183 M 79.3 476 L 192 536 L 254 474"/>
          <glyph unicode="&#xf5;" glyph-name="otilde" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183 M 60.6 529 L 89.8 558 L 132 558 L 196 537 L 249 515 L 268 534 L 281 545"/>
          <glyph unicode="&#xf6;" glyph-name="odieresis" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183 M 149 534 L 133 508 M 470 532 L 454 507"/>
          <glyph unicode="&#xf7;" glyph-name="divide" horiz-adv-x="666"
                 d="M 422 472 L 406 447 M 434 220 L 419 195 M 241 331 L 581 337"/>
          <glyph unicode="&#xf8;" glyph-name="oslash" horiz-adv-x="391"
                 d="M 195 337 L 142 365 L 66.1 315 L -6.3 233 L -40.9 161 L -56.7 75.6 L 12.6 9.45 L 101 40.9 L 183 110 L 230 208 L 239 246 L 239 284 L 220 284 M 167 158 L 183 101 L 214 72.4 L 255 75.6 L 296 110 L 359 183 M 293 437 L 132 227 L 44.1 106 L -26.5 -6.62"/>
          <glyph unicode="&#xf9;" glyph-name="ugrave" horiz-adv-x="495"
                 d="M 47.2 309 L -18.9 217 L -53.6 123 L -56.7 56.7 L -9.45 28.4 L 78.8 53.6 L 145 139 L 227 239 L 293 353 L 324 343 L 214 164 L 205 97.6 L 202 53.6 L 255 22 L 321 40.9 L 413 120 L 463 183 M 55.5 595 L 185 516"/>
          <glyph unicode="&#xfa;" glyph-name="uacute" horiz-adv-x="495"
                 d="M 47.2 309 L -18.9 217 L -53.6 123 L -56.7 56.7 L -9.45 28.4 L 78.8 53.6 L 145 139 L 227 239 L 293 353 L 324 343 L 214 164 L 205 97.6 L 202 53.6 L 255 22 L 321 40.9 L 413 120 L 463 183 M 347 585 L 218 507"/>
          <glyph unicode="&#xfb;" glyph-name="ucircumflex" horiz-adv-x="495"
                 d="M 47.2 309 L -18.9 217 L -53.6 123 L -56.7 56.7 L -9.45 28.4 L 78.8 53.6 L 145 139 L 227 239 L 293 353 L 324 343 L 214 164 L 205 97.6 L 202 53.6 L 255 22 L 321 40.9 L 413 120 L 463 183 M 105 500 L 225 564 L 291 498"/>
          <glyph unicode="&#xfc;" glyph-name="udieresis" horiz-adv-x="495"
                 d="M 47.2 309 L -18.9 217 L -53.6 123 L -56.7 56.7 L -9.45 28.4 L 78.8 53.6 L 145 139 L 227 239 L 293 353 L 324 343 L 214 164 L 205 97.6 L 202 53.6 L 255 22 L 321 40.9 L 413 120 L 463 183 M 204 514 L 189 488 M 492 505 L 476 479"/>
          <glyph unicode="&#xfd;" glyph-name="yacute" horiz-adv-x="488"
                 d="M 88.2 312 L 3.15 233 L -31.5 186 L -47.2 132 L -53.6 85.1 L -37.8 47.2 L 12.6 31.5 L 69.3 47.2 L 176 151 L 280 277 L 334 334 L 369 331 L 274 139 L 183 -97.6 L 107 -230 L 28.4 -346 L -28.4 -397 L -135 -394 L -167 -346 L -123 -252 L -15.8 -167 L 123 -66.1 L 265 9.45 L 406 123 L 457 183 M 337 604 L 208 525"/>
          <glyph unicode="&#xff;" glyph-name="ydieresis" horiz-adv-x="488"
                 d="M 88.2 312 L 3.15 233 L -31.5 186 L -47.2 132 L -53.6 85.1 L -37.8 47.2 L 12.6 31.5 L 69.3 47.2 L 176 151 L 280 277 L 334 334 L 369 331 L 274 139 L 183 -97.6 L 107 -230 L 28.4 -346 L -28.4 -397 L -135 -394 L -167 -346 L -123 -252 L -15.8 -167 L 123 -66.1 L 265 9.45 L 406 123 L 457 183 M 204 503 L 188 477 M 476 503 L 460 478"/>
          <glyph unicode="&#x2013;" glyph-name="endash" horiz-adv-x="666" d="M 241 236 L 581 243"/>
          <glyph unicode="&#x2014;" glyph-name="emdash" horiz-adv-x="888" d="M 321 236 L 775 243"/>
          <glyph unicode="&#x201c;" glyph-name="quotedblleft" horiz-adv-x="366"
                 d="M 103 669 L 162 598 M 245 669 L 303 598"/>
          <glyph unicode="&#x201d;" glyph-name="quotedblright" horiz-adv-x="366"
                 d="M 147 612 L 89.3 541 M 289 612 L 231 541"/>
          <glyph unicode="&#x2039;" glyph-name="guilsinglleft" horiz-adv-x="180"
                 d="M 156 449 L 40.3 222 L 66.8 149 L 83.2 106 L 101 47.9"/>
          <glyph unicode="&#x203a;" glyph-name="guilsinglright" horiz-adv-x="189"
                 d="M 101 444 L 131 350 L 156 300 L 117 224 L 69.3 131 L 34 63"/>
          <glyph unicode="&#x20ac;" glyph-name="Euro" horiz-adv-x="706"
                 d="M 595 554 L 602 558 L 617 586 L 608 652 L 545 702 L 460 715 L 328 702 L 217 639 L 135 554 L 75.6 416 L 63 293 L 91.4 154 L 161 85.1 L 255 34.6 L 362 22 L 479 40.9 L 580 88.2 L 627 120 L 662 164 L 662 180 M 80.3 354 L 52 321 L 340 331 M 80.3 543 L 52 510 L 340 520"/>
          <glyph unicode="&#x0178;" glyph-name="Ydieresis" horiz-adv-x="627"
                 d="M 28.4 482 L 34.6 485 L 120 523 L 195 583 L 252 646 L 277 665 L 287 668 L 230 554 L 142 394 L 69.3 230 L 56.7 154 L 50.4 75.6 L 85 15.8 L 158 15.8 L 233 53.6 L 334 145 L 403 220 L 463 306 L 542 416 L 595 510 L 621 586 L 662 649 L 715 674 L 759 680 L 684 633 L 633 576 L 583 400 L 526 205 L 457 -6.3 L 406 -113 L 346 -211 L 296 -284 L 233 -346 L 148 -400 L 69.3 -413 L 31.5 -400 L 3.15 -350 L 6.3 -296 L 37.8 -233 L 107 -151 L 205 -59.9 L 331 9.45 L 416 40.9 L 570 91.4 L 598 91.4 M 390 945 L 374 920 M 624 891 L 608 866"/>
          <glyph unicode="&#xc7;" glyph-name="Ccedilla" horiz-adv-x="690"
                 d="M233.66816 -25.389351L233.66816 -55.486613000000006C233.66816 -66.74656 234.60255 -78.25045300000001 232.62023 -89.442499C229.50619999999998 -107.02413 205.60396 -156.87126 191.75093999999999 -170.47359C174.82296 -187.09522 122.66828999999998 -208.05068 92.19755199999999 -200.57085M296.0 362.0L403.0 372.0L526.0 441.0L617.0 526.0L658.0 608.0L639.0 680.0L564.0 712.0L375.0 662.0L249.0 576.0L110.0 419.0L41.0 280.0L12.600000000000001 132.0L59.9 25.200000000000003L189.0 -31.5L346.0 -15.8L476.0 34.599999999999994L595.0 113.0L668.0 189.0"/>
          <glyph unicode="&#xdf;" glyph-name="germandbls" horiz-adv-x="416"
                 d="M76.219984 199.80912C76.219984 199.80912 -35.41031000000001 -59.163321999999994 -5.445592500000004 -12.928373999999991C45.207383 65.228133 44.001077 199.44067 111.57313 379.31882C157.20743000000002 500.79824 230.10342 614.31041 257.89289 677.7622100000001C308.59973 793.5413500000001 402.68739000000005 681.34211 381.45327000000003 566.7309600000001C360.21915 452.1198000000001 58.02934200000004 304.39393000000007 197.33378000000002 357.6656000000001C336.63823 410.9372700000001 519.47227 318.8044300000001 305.70855 84.1833430000001C91.944811 -150.43771 -26.905657 175.16018 -26.905657 175.16018"/>
          <glyph unicode="&#xe7;" glyph-name="ccedilla" horiz-adv-x="346"
                 d="M98.53501 27.711307L98.53501 5.2689217C98.53501 -3.1271935000000006 99.16296 -11.705210000000001 97.83075 -20.050693C95.73797 -33.160647 79.674497 -70.329758 70.364593 -80.472499C58.988166 -92.866617 23.937688 -108.49231 3.4598715 -102.91489M243.0 306.0L239.0 350.0L198.0 365.0L101.0 328.0L-15.799999999999997 208.0L-47.199999999999996 170.0L-72.39999999999999 110.0L-66.1 66.1L-47.199999999999996 25.199999999999996L56.70000000000001 15.799999999999995L186.00000000000003 56.699999999999996L268.0 123.0L315.0 183.0"/>
          <glyph unicode="&#xb8;" glyph-name="cedilla" horiz-adv-x="690"
                 d="M233.66816 -25.38935L233.66816 -55.486612C233.66816 -66.746559 234.60255 -78.250452 232.62023 -89.442498C229.50619999999998 -107.02413 205.60396 -156.87126 191.75093999999999 -170.47359C174.82296 -187.09522 122.66828999999998 -208.05068 92.19755199999999 -200.57085"/>
        </font>
      </defs>
    </svg>
  </div>
</template>

<script>
  import { SVG } from '@svgdotjs/svg.js'
  import parseFont from "@/util/loadfont";
  import he from 'he'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      paths: [],
      text: 'Type Text Here'
    }
  },
  methods: {
    convert() {
      this.paths = []
      //let draw = SVG().addTo(this.$refs.drawing).size(1000,600);
      const font = this.$refs.EMSNixish
      const fontData = parseFont(font)
      const inputString = this.text

      // Generate SVGs in a grid inside of SVG file

      let positionX = 0
      let positionY = 0
      let count = 0

      let characters = inputString.split('')

      characters.forEach((character) => {

        let encodedCharacter = he.encode(character)
        if (character === ' ') encodedCharacter = '&#xa0;'
        if (character === '&') encodedCharacter = '&'
        if (character === '\'') encodedCharacter = '&apos;'

        if (encodedCharacter.length > 2) encodedCharacter = encodedCharacter.toLowerCase()

        console.log(encodedCharacter)
        // Loop over the characters and find the character there
        fontData.forEach((character) => {
          if (character.unicode === encodedCharacter) {
            this.paths.push({d: character.d, x: positionX, y: 0})
            positionX += character.width + 1
          }
        })
      })

      // fontData.forEach((character) => {
      //
      //   // if (count < 150) {
      //     this.paths.push({d: character.d, x: positionX, y: 0})
      //     positionX += character.width + 1
      //   // }
      //
      //   // count++
      //   console.log(character)
      // })

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .hello {
    margin: 0;
    padding: 0;
  }

  #canvas {
    display: block;
  }
</style>
