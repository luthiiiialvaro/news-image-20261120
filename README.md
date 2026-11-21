# The world in one day: Friday 20 November 2026

[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/luthiiiialvaro/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/luthiiiialvaro/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

An entry for the [news-image-20261120](https://make.fun/bounty/news-image-20261120)
bounty on make.fun: one image summing up the world's news of Friday
20 November 2026.

The front page names the day and covers five stories: Russia's overnight
barrage on Kyiv, with missiles landing in Poland; the AI stock sell-off
that pushed the S&P 500 into correction; the EU–UK summit in Brussels;
COP31 stalling in Antalya; and a magnitude 6.7 earthquake in central Peru.
The footer adds Anthropic's Nasdaq debut, a pancreatic-cancer trial pill,
the US Senate's Iran war-powers vote, GTA 6's first-day sales, and
Estonia's border closure.

## How it works

`entry.png` (1024×1024, drawn at build time with PIL: generated photos for
the stories, all labels drawn in code) is copied to
`$MAKEFUN_OUTPUT_DIR/entry.png` by `main.ts` (Node 22, standard library
only, no network), so both runs write identical bytes.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
