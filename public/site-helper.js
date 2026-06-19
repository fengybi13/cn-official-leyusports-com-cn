const samples = [
  { keyword: "乐鱼体育", url: "https://cn-official-leyusports.com.cn", tag: "推荐" },
  { keyword: "体育平台", url: "https://cn-official-leyusports.com.cn", tag: "热门" },
  { keyword: "赛事资讯", url: "https://cn-official-leyusports.com.cn", tag: "资讯" },
];

const pageHintCard = {
  title: "欢迎访问",
  description: "乐鱼体育为您提供最新体育赛事动态与专业分析。",
  linkText: "了解更多",
  linkUrl: "https://cn-official-leyusports.com.cn",
};

function createCard(cardData) {
  const container = document.createElement("div");
  container.className = "site-helper-card";

  const title = document.createElement("h3");
  title.textContent = cardData.title;
  container.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = cardData.description;
  container.appendChild(desc);

  const link = document.createElement("a");
  link.href = cardData.linkUrl;
  link.textContent = cardData.linkText;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  container.appendChild(link);

  return container;
}

function createBadge(item) {
  const badge = document.createElement("span");
  badge.className = "keyword-badge";
  badge.textContent = item.keyword;

  const tagSpan = document.createElement("sup");
  tagSpan.className = "badge-tag";
  tagSpan.textContent = item.tag;
  badge.appendChild(tagSpan);

  badge.addEventListener("click", function () {
    window.open(item.url, "_blank");
  });

  return badge;
}

function createAccessNotice() {
  const notice = document.createElement("div");
  notice.className = "site-helper-notice";

  const strong = document.createElement("strong");
  strong.textContent = "访问说明：";
  notice.appendChild(strong);

  const text = document.createElement("span");
  text.textContent = "本页面内容仅供展示，乐鱼体育相关链接将跳转至官方网站。";
  notice.appendChild(text);

  return notice;
}

function initSiteHelper() {
  const wrapper = document.createElement("div");
  wrapper.id = "site-helper-root";

  const card = createCard(pageHintCard);
  wrapper.appendChild(card);

  const badgeGroup = document.createElement("div");
  badgeGroup.className = "badge-group";

  samples.forEach((item) => {
    const badge = createBadge(item);
    badgeGroup.appendChild(badge);
  });
  wrapper.appendChild(badgeGroup);

  const notice = createAccessNotice();
  wrapper.appendChild(notice);

  document.body.appendChild(wrapper);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteHelper);
} else {
  initSiteHelper();
}