"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function EcommerceApp() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            initializeEcommerceApp();
        }
    }, []);

    return (
        <>
            <style jsx global>{`
                /* ===== CSS变量主题系统 ===== */
                :root {
                    /* 配色方案 */
                    --color-primary: #000000;
                    --color-primary-hover: #1a1a1a;
                    --color-accent: #666666;
                    --color-bg: #ffffff;
                    --color-surface: #f5f5f5;
                    --color-border: #e0e0e0;
                    --color-text: #000000;
                    --color-text-secondary: #666666;
                    --color-text-muted: #999999;
                    --color-success: #4caf50;
                    --color-error: #f44336;
                    --color-warning: #ff9800;

                    /* 间距 */
                    --spacing-xs: 0.25rem;
                    --spacing-sm: 0.5rem;
                    --spacing-md: 1rem;
                    --spacing-lg: 1.5rem;
                    --spacing-xl: 2rem;
                    --spacing-2xl: 3rem;

                    /* 圆角 */
                    --radius-sm: 0.25rem;
                    --radius-md: 0.5rem;
                    --radius-lg: 1rem;

                    /* 过渡 */
                    --transition-fast: 150ms ease;
                    --transition-base: 250ms ease;
                    --transition-slow: 350ms ease;

                    /* 阴影 */
                    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
                    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
                    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
                    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

                    /* 字体 */
                    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI",
                        "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
                        sans-serif;
                }

                /* 暗黑模式 */
                [data-theme="dark"] {
                    --color-primary: #ffffff;
                    --color-primary-hover: #e6e6e6;
                    --color-accent: #999999;
                    --color-bg: #0a0a0a;
                    --color-surface: #1a1a1a;
                    --color-border: #2a2a2a;
                    --color-text: #ffffff;
                    --color-text-secondary: #b3b3b3;
                    --color-text-muted: #666666;
                    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
                    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
                    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
                    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.6);
                }

                /* ===== 基础样式重置 ===== */
                #ecommerce-root * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                #ecommerce-root {
                    font-family: var(--font-sans);
                    background-color: var(--color-bg);
                    color: var(--color-text);
                    line-height: 1.6;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 var(--spacing-md);
                }

                img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }

                a {
                    color: var(--color-text);
                    text-decoration: none;
                    transition: color var(--transition-fast);
                }

                a:hover {
                    color: var(--color-accent);
                }

                button {
                    font-family: inherit;
                    cursor: pointer;
                    border: none;
                    background: none;
                }

                /* ===== 页面加载动画 ===== */
                .page-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--color-bg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    transition: opacity var(--transition-base),
                        visibility var(--transition-base);
                }

                .page-loader.hidden {
                    opacity: 0;
                    visibility: hidden;
                }

                .loader-spinner {
                    width: 50px;
                    height: 50px;
                    border: 3px solid var(--color-border);
                    border-top-color: var(--color-primary);
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* ===== 头部导航 ===== */
                .header {
                    position: sticky;
                    top: 0;
                    background-color: var(--color-bg);
                    border-bottom: 1px solid var(--color-border);
                    z-index: 100;
                }

                .nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--spacing-md) 0;
                    gap: var(--spacing-lg);
                }

                .nav-brand .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }

                .nav-toggle {
                    display: none;
                    flex-direction: column;
                    width: 24px;
                    height: 24px;
                    padding: 0;
                }

                .hamburger {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: var(--color-text);
                    position: relative;
                    transition: background-color var(--transition-fast);
                }

                .hamburger::before,
                .hamburger::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: var(--color-text);
                    transition: transform var(--transition-base);
                }

                .hamburger::before {
                    top: -8px;
                }
                .hamburger::after {
                    bottom: -8px;
                }

                .nav-toggle[aria-expanded="true"] .hamburger {
                    background-color: transparent;
                }

                .nav-toggle[aria-expanded="true"] .hamburger::before {
                    transform: rotate(45deg) translate(6px, 6px);
                }

                .nav-toggle[aria-expanded="true"] .hamburger::after {
                    transform: rotate(-45deg) translate(6px, -6px);
                }

                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-xl);
                    flex: 1;
                }

                .nav-list {
                    display: flex;
                    list-style: none;
                    gap: var(--spacing-lg);
                    flex: 1;
                }

                .nav-link {
                    font-size: 0.9375rem;
                    font-weight: 500;
                    padding: var(--spacing-sm) var(--spacing-md);
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast);
                }

                .nav-link:hover,
                .nav-link.active {
                    background-color: var(--color-surface);
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-md);
                }

                .theme-toggle {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast);
                }

                .theme-toggle:hover {
                    background-color: var(--color-surface);
                }

                .icon-sun,
                .icon-moon {
                    transition: opacity var(--transition-fast);
                }

                [data-theme="dark"] .icon-sun {
                    display: block;
                }
                [data-theme="dark"] .icon-moon {
                    display: none;
                }
                [data-theme="light"] .icon-sun {
                    display: none;
                }
                [data-theme="light"] .icon-moon {
                    display: block;
                }

                .btn-icon {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast);
                }

                .btn-icon:hover {
                    background-color: var(--color-surface);
                }

                .cart-badge {
                    position: absolute;
                    top: -4px;
                    right: -4px;
                    min-width: 18px;
                    height: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--color-error);
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border-radius: 9px;
                    padding: 0 4px;
                }

                .btn-primary {
                    padding: var(--spacing-sm) var(--spacing-lg);
                    background-color: var(--color-primary);
                    color: var(--color-bg);
                    font-weight: 500;
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast),
                        transform var(--transition-fast);
                }

                .btn-primary:hover {
                    background-color: var(--color-primary-hover);
                    transform: translateY(-1px);
                }

                .btn-primary:active {
                    transform: translateY(0);
                }

                .btn-primary:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }

                .btn-block {
                    width: 100%;
                }

                /* ===== 主要内容 ===== */
                .main {
                    min-height: calc(100vh - 200px);
                    padding: var(--spacing-xl) 0;
                }

                /* ===== 搜索栏 ===== */
                .search-section {
                    padding: var(--spacing-lg) 0;
                }

                .search-wrapper {
                    position: relative;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .search-box {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .search-icon {
                    position: absolute;
                    left: var(--spacing-md);
                    color: var(--color-text-secondary);
                    pointer-events: none;
                }

                .search-input {
                    width: 100%;
                    padding: var(--spacing-md) var(--spacing-md)
                        var(--spacing-md) 48px;
                    background-color: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    font-size: 1rem;
                    color: var(--color-text);
                    transition: border-color var(--transition-fast),
                        box-shadow var(--transition-fast);
                }

                .search-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
                }

                [data-theme="dark"] .search-input:focus {
                    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
                }

                .search-results {
                    position: absolute;
                    top: calc(100% + var(--spacing-sm));
                    left: 0;
                    right: 0;
                    background-color: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-lg);
                    max-height: 400px;
                    overflow-y: auto;
                    z-index: 50;
                }

                .search-result-item {
                    padding: var(--spacing-md);
                    display: flex;
                    gap: var(--spacing-md);
                    cursor: pointer;
                    transition: background-color var(--transition-fast);
                }

                .search-result-item:hover {
                    background-color: var(--color-bg);
                }

                .search-result-item img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: var(--radius-sm);
                }

                .search-result-info {
                    flex: 1;
                }

                .search-result-name {
                    font-weight: 500;
                    margin-bottom: var(--spacing-xs);
                }

                .search-result-price {
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                }

                .search-highlight {
                    background-color: rgba(255, 255, 0, 0.3);
                    padding: 2px 0;
                }

                /* ===== 筛选和排序 ===== */
                .filters-section {
                    padding: var(--spacing-lg) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .filters-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--spacing-lg);
                    flex-wrap: wrap;
                }

                .filter-group {
                    display: flex;
                    gap: var(--spacing-sm);
                    flex-wrap: wrap;
                }

                .filter-btn {
                    padding: var(--spacing-sm) var(--spacing-md);
                    background-color: transparent;
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                    font-weight: 500;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    transition: all var(--transition-fast);
                }

                .filter-btn:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-primary);
                }

                .filter-btn.active {
                    background-color: var(--color-primary);
                    color: var(--color-bg);
                    border-color: var(--color-primary);
                }

                .sort-group {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-sm);
                }

                .sort-label {
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                }

                .sort-select {
                    padding: var(--spacing-sm) var(--spacing-md);
                    background-color: var(--color-surface);
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: border-color var(--transition-fast);
                }

                .sort-select:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }

                /* ===== 商品网格 ===== */
                .products-section {
                    padding: var(--spacing-xl) 0;
                }

                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(280px, 1fr)
                    );
                    gap: var(--spacing-lg);
                }

                .product-card {
                    background-color: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    transition: transform var(--transition-base),
                        box-shadow var(--transition-base);
                    cursor: pointer;
                    opacity: 0;
                    animation: fadeInUp 0.5s ease forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .product-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                }

                .product-image-wrapper {
                    position: relative;
                    width: 100%;
                    padding-top: 100%;
                    overflow: hidden;
                    background-color: var(--color-bg);
                }

                .product-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform var(--transition-slow);
                }

                .product-card:hover .product-image {
                    transform: scale(1.05);
                }

                .product-badge {
                    position: absolute;
                    top: var(--spacing-md);
                    left: var(--spacing-md);
                    padding: var(--spacing-xs) var(--spacing-sm);
                    background-color: var(--color-error);
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border-radius: var(--radius-sm);
                }

                .product-info {
                    padding: var(--spacing-md);
                }

                .product-category {
                    font-size: 0.75rem;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: var(--spacing-xs);
                }

                .product-name {
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-sm);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .product-rating {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-xs);
                    margin-bottom: var(--spacing-sm);
                    font-size: 0.875rem;
                }

                .stars {
                    color: #ffc107;
                }

                .product-price-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: var(--spacing-md);
                }

                .product-price {
                    font-size: 1.25rem;
                    font-weight: 700;
                }

                .product-old-price {
                    font-size: 0.875rem;
                    color: var(--color-text-muted);
                    text-decoration: line-through;
                    margin-left: var(--spacing-sm);
                }

                .btn-add-cart {
                    padding: var(--spacing-sm) var(--spacing-md);
                    background-color: var(--color-primary);
                    color: var(--color-bg);
                    font-size: 0.875rem;
                    font-weight: 500;
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast),
                        transform var(--transition-fast);
                }

                .btn-add-cart:hover {
                    background-color: var(--color-primary-hover);
                    transform: scale(1.05);
                }

                .btn-add-cart:active {
                    transform: scale(0.95);
                }

                /* 骨架屏 */
                .product-skeleton {
                    background-color: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }

                .product-skeleton::before {
                    content: "";
                    display: block;
                    padding-top: 100%;
                    background: linear-gradient(
                        90deg,
                        var(--color-surface) 0%,
                        var(--color-bg) 50%,
                        var(--color-surface) 100%
                    );
                    background-size: 200% 100%;
                    animation: skeleton 1.5s ease-in-out infinite;
                }

                @keyframes skeleton {
                    0% {
                        background-position: 200% 0;
                    }
                    100% {
                        background-position: -200% 0;
                    }
                }

                /* ===== 最近浏览 ===== */
                .history-section {
                    padding: var(--spacing-xl) 0;
                    border-top: 1px solid var(--color-border);
                }

                .section-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: var(--spacing-lg);
                }

                .history-grid {
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(200px, 1fr)
                    );
                    gap: var(--spacing-md);
                }

                /* ===== 页脚 ===== */
                .footer {
                    background-color: var(--color-surface);
                    border-top: 1px solid var(--color-border);
                    padding: var(--spacing-2xl) 0 var(--spacing-lg);
                    margin-top: var(--spacing-2xl);
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: var(--spacing-xl);
                    margin-bottom: var(--spacing-xl);
                }

                .footer-section h3 {
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-md);
                }

                .footer-section ul {
                    list-style: none;
                }

                .footer-section ul li {
                    margin-bottom: var(--spacing-sm);
                }

                .footer-section a {
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                }

                .social-links {
                    display: flex;
                    gap: var(--spacing-md);
                }

                .footer-bottom {
                    text-align: center;
                    padding-top: var(--spacing-lg);
                    border-top: 1px solid var(--color-border);
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                }

                /* ===== 购物车侧边栏 ===== */
                .cart-sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    max-width: 400px;
                    height: 100vh;
                    background-color: var(--color-bg);
                    box-shadow: var(--shadow-xl);
                    display: flex;
                    flex-direction: column;
                    transform: translateX(100%);
                    transition: transform var(--transition-base);
                    z-index: 200;
                }

                .cart-sidebar.open {
                    transform: translateX(0);
                }

                .cart-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--spacing-lg);
                    border-bottom: 1px solid var(--color-border);
                }

                .cart-header h2 {
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .btn-close {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast);
                }

                .btn-close:hover {
                    background-color: var(--color-surface);
                }

                .cart-body {
                    flex: 1;
                    overflow-y: auto;
                    padding: var(--spacing-lg);
                }

                .cart-empty {
                    text-align: center;
                    padding: var(--spacing-2xl) var(--spacing-lg);
                    color: var(--color-text-secondary);
                }

                .cart-item {
                    display: flex;
                    gap: var(--spacing-md);
                    padding: var(--spacing-md);
                    background-color: var(--color-surface);
                    border-radius: var(--radius-md);
                    margin-bottom: var(--spacing-md);
                }

                .cart-item-image {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: var(--radius-sm);
                }

                .cart-item-info {
                    flex: 1;
                }

                .cart-item-name {
                    font-weight: 500;
                    margin-bottom: var(--spacing-xs);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .cart-item-price {
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                    margin-bottom: var(--spacing-sm);
                }

                .cart-item-controls {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-sm);
                }

                .quantity-btn {
                    width: 28px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--color-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    font-weight: 600;
                    transition: background-color var(--transition-fast);
                }

                .quantity-btn:hover:not(:disabled) {
                    background-color: var(--color-surface);
                }

                .quantity-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .quantity-value {
                    min-width: 32px;
                    text-align: center;
                    font-weight: 500;
                }

                .btn-remove {
                    margin-left: auto;
                    color: var(--color-error);
                    font-size: 0.875rem;
                    padding: var(--spacing-xs) var(--spacing-sm);
                    border-radius: var(--radius-sm);
                    transition: background-color var(--transition-fast);
                }

                .btn-remove:hover {
                    background-color: rgba(244, 67, 54, 0.1);
                }

                .cart-footer {
                    padding: var(--spacing-lg);
                    border-top: 1px solid var(--color-border);
                }

                .cart-summary {
                    margin-bottom: var(--spacing-lg);
                }

                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: var(--spacing-sm);
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                }

                .summary-total {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--color-text);
                    padding-top: var(--spacing-sm);
                    border-top: 1px solid var(--color-border);
                }

                /* ===== 弹窗 ===== */
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 300;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity var(--transition-base),
                        visibility var(--transition-base);
                }

                .modal:not([hidden]) {
                    opacity: 1;
                    visibility: visible;
                }

                .modal-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                }

                .modal-content {
                    position: relative;
                    width: 90%;
                    max-width: 900px;
                    max-height: 90vh;
                    background-color: var(--color-bg);
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-xl);
                    overflow: hidden;
                    z-index: 1;
                    animation: modalSlideUp 0.3s ease;
                }

                .modal-small {
                    max-width: 450px;
                }

                @keyframes modalSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .modal-close {
                    position: absolute;
                    top: var(--spacing-md);
                    right: var(--spacing-md);
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--color-surface);
                    border-radius: var(--radius-md);
                    z-index: 2;
                    transition: background-color var(--transition-fast);
                }

                .modal-close:hover {
                    background-color: var(--color-border);
                }

                .modal-body {
                    padding: var(--spacing-xl);
                    overflow-y: auto;
                    max-height: calc(90vh - 40px);
                }

                /* 商品详情 */
                .product-detail {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--spacing-xl);
                }

                .product-detail-images {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-md);
                }

                .main-image-wrapper {
                    width: 100%;
                    padding-top: 100%;
                    position: relative;
                    background-color: var(--color-surface);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }

                .main-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .thumbnail-list {
                    display: flex;
                    gap: var(--spacing-sm);
                    overflow-x: auto;
                }

                .thumbnail {
                    width: 80px;
                    height: 80px;
                    flex-shrink: 0;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: border-color var(--transition-fast);
                    object-fit: cover;
                }

                .thumbnail:hover,
                .thumbnail.active {
                    border-color: var(--color-primary);
                }

                .product-detail-info {
                    display: flex;
                    flex-direction: column;
                }

                .product-detail-info h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: var(--spacing-sm);
                }

                .product-detail-rating {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-md);
                    margin-bottom: var(--spacing-lg);
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                }

                .product-detail-price {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: var(--spacing-xs);
                }

                .product-detail-stock {
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                    margin-bottom: var(--spacing-lg);
                }

                .product-detail-description {
                    padding: var(--spacing-lg) 0;
                    border-top: 1px solid var(--color-border);
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: var(--spacing-lg);
                }

                .product-detail-description h3 {
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-sm);
                }

                .product-detail-description p {
                    color: var(--color-text-secondary);
                    line-height: 1.6;
                }

                .product-specs {
                    margin-bottom: var(--spacing-lg);
                }

                .spec-row {
                    display: flex;
                    padding: var(--spacing-sm) 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .spec-label {
                    width: 120px;
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                }

                .spec-value {
                    flex: 1;
                    font-size: 0.875rem;
                }

                .product-detail-actions {
                    display: flex;
                    gap: var(--spacing-md);
                    margin-top: auto;
                }

                .btn-secondary {
                    padding: var(--spacing-md) var(--spacing-xl);
                    background-color: transparent;
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    font-weight: 500;
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast),
                        border-color var(--transition-fast);
                }

                .btn-secondary:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-primary);
                }

                /* ===== 表单 ===== */
                .form {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-sm);
                }

                .form-label {
                    font-weight: 500;
                    font-size: 0.875rem;
                }

                .form-input {
                    padding: var(--spacing-md);
                    background-color: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    color: var(--color-text);
                    transition: border-color var(--transition-fast),
                        box-shadow var(--transition-fast);
                }

                .form-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
                }

                [data-theme="dark"] .form-input:focus {
                    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
                }

                .form-input.error {
                    border-color: var(--color-error);
                }

                .form-error {
                    color: var(--color-error);
                    font-size: 0.875rem;
                    min-height: 1.25rem;
                }

                .text-center {
                    text-align: center;
                }

                .text-muted {
                    color: var(--color-text-muted);
                    font-size: 0.875rem;
                }

                /* ===== Toast通知 ===== */
                .toast-container {
                    position: fixed;
                    top: var(--spacing-lg);
                    right: var(--spacing-lg);
                    z-index: 400;
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-sm);
                    pointer-events: none;
                }

                .toast {
                    min-width: 300px;
                    padding: var(--spacing-md) var(--spacing-lg);
                    background-color: var(--color-surface);
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-lg);
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-md);
                    pointer-events: auto;
                    animation: toastSlideIn 0.3s ease;
                }

                @keyframes toastSlideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .toast.toast-success {
                    border-left: 4px solid var(--color-success);
                }

                .toast.toast-error {
                    border-left: 4px solid var(--color-error);
                }

                .toast.toast-warning {
                    border-left: 4px solid var(--color-warning);
                }

                .toast-icon {
                    flex-shrink: 0;
                }

                .toast-message {
                    flex: 1;
                    font-size: 0.875rem;
                }

                /* ===== 响应式设计 ===== */
                @media (max-width: 768px) {
                    .nav-toggle {
                        display: flex;
                    }

                    .nav-menu {
                        position: fixed;
                        top: 65px;
                        left: 0;
                        right: 0;
                        flex-direction: column;
                        background-color: var(--color-bg);
                        border-bottom: 1px solid var(--color-border);
                        padding: var(--spacing-lg);
                        transform: translateY(-100%);
                        opacity: 0;
                        visibility: hidden;
                        transition: transform var(--transition-base),
                            opacity var(--transition-base),
                            visibility var(--transition-base);
                    }

                    .nav-menu.open {
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }

                    .nav-list {
                        flex-direction: column;
                        width: 100%;
                    }

                    .nav-actions {
                        width: 100%;
                        justify-content: space-between;
                    }

                    .products-grid {
                        grid-template-columns: repeat(
                            auto-fill,
                            minmax(160px, 1fr)
                        );
                        gap: var(--spacing-md);
                    }

                    .product-detail {
                        grid-template-columns: 1fr;
                    }

                    .cart-sidebar {
                        max-width: 100%;
                    }

                    .filters-bar {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .filter-group {
                        order: 2;
                    }

                    .sort-group {
                        order: 1;
                    }
                }

                @media (max-width: 480px) {
                    .container {
                        padding: 0 var(--spacing-sm);
                    }

                    .products-grid {
                        grid-template-columns: 1fr 1fr;
                    }

                    .product-info {
                        padding: var(--spacing-sm);
                    }

                    .product-name {
                        font-size: 0.875rem;
                    }

                    .product-price {
                        font-size: 1rem;
                    }

                    .modal-body {
                        padding: var(--spacing-md);
                    }

                    .toast {
                        min-width: auto;
                        width: calc(100vw - 2rem);
                    }

                    .toast-container {
                        left: var(--spacing-md);
                        right: var(--spacing-md);
                    }
                }

                /* ===== 工具类 ===== */
                [hidden] {
                    display: none !important;
                }

                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                }

                /* ===== 性能优化：懒加载图片 ===== */
                img[data-src] {
                    opacity: 0;
                    transition: opacity var(--transition-base);
                }

                img.loaded {
                    opacity: 1;
                }
            `}</style>

            <div id="ecommerce-root">
                {/* 页面加载动画 */}
                <div id="page-loader" className="page-loader">
                    <div className="loader-spinner"></div>
                </div>

                {/* 顶部导航栏 */}
                <header className="header" role="banner">
                    <div className="container">
                        <nav className="nav" aria-label="主导航">
                            <div className="nav-brand">
                                <h1 className="logo">优选商城</h1>
                            </div>

                            <button
                                className="nav-toggle"
                                aria-label="切换导航菜单"
                                aria-expanded="false"
                            >
                                <span className="hamburger"></span>
                            </button>

                            <div className="nav-menu">
                                <ul className="nav-list">
                                    <li>
                                        <a href="#" className="nav-link active">
                                            首页
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-category="electronics"
                                        >
                                            电子产品
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-category="fashion"
                                        >
                                            时尚服饰
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-category="home"
                                        >
                                            家居生活
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="nav-link"
                                            data-category="books"
                                        >
                                            图书文具
                                        </a>
                                    </li>
                                </ul>

                                <div className="nav-actions">
                                    <button
                                        className="theme-toggle"
                                        aria-label="切换主题模式"
                                        title="切换暗黑模式"
                                    >
                                        <svg
                                            className="icon-sun"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="5"
                                            ></circle>
                                            <line
                                                x1="12"
                                                y1="1"
                                                x2="12"
                                                y2="3"
                                            ></line>
                                            <line
                                                x1="12"
                                                y1="21"
                                                x2="12"
                                                y2="23"
                                            ></line>
                                            <line
                                                x1="4.22"
                                                y1="4.22"
                                                x2="5.64"
                                                y2="5.64"
                                            ></line>
                                            <line
                                                x1="18.36"
                                                y1="18.36"
                                                x2="19.78"
                                                y2="19.78"
                                            ></line>
                                            <line
                                                x1="1"
                                                y1="12"
                                                x2="3"
                                                y2="12"
                                            ></line>
                                            <line
                                                x1="21"
                                                y1="12"
                                                x2="23"
                                                y2="12"
                                            ></line>
                                            <line
                                                x1="4.22"
                                                y1="19.78"
                                                x2="5.64"
                                                y2="18.36"
                                            ></line>
                                            <line
                                                x1="18.36"
                                                y1="5.64"
                                                x2="19.78"
                                                y2="4.22"
                                            ></line>
                                        </svg>
                                        <svg
                                            className="icon-moon"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                    </button>

                                    <button
                                        className="btn-icon cart-button"
                                        aria-label="购物车"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                            ></circle>
                                            <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                            ></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        <span className="cart-badge">0</span>
                                    </button>

                                    <button
                                        className="btn-primary"
                                        id="login-btn"
                                    >
                                        登录
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* 主要内容 */}
                <main className="main">
                    {/* 搜索栏 */}
                    <section className="search-section">
                        <div className="container">
                            <div className="search-wrapper">
                                <div className="search-box">
                                    <svg
                                        className="search-icon"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                    <input
                                        type="search"
                                        className="search-input"
                                        placeholder="搜索商品..."
                                        aria-label="搜索商品"
                                        id="search-input"
                                    />
                                </div>
                                <div
                                    className="search-results"
                                    id="search-results"
                                    hidden
                                ></div>
                            </div>
                        </div>
                    </section>

                    {/* 商品筛选和排序 */}
                    <section className="filters-section">
                        <div className="container">
                            <div className="filters-bar">
                                <div className="filter-group">
                                    <button
                                        className="filter-btn active"
                                        data-category="all"
                                    >
                                        全部商品
                                    </button>
                                    <button
                                        className="filter-btn"
                                        data-category="electronics"
                                    >
                                        电子产品
                                    </button>
                                    <button
                                        className="filter-btn"
                                        data-category="fashion"
                                    >
                                        时尚服饰
                                    </button>
                                    <button
                                        className="filter-btn"
                                        data-category="home"
                                    >
                                        家居生活
                                    </button>
                                    <button
                                        className="filter-btn"
                                        data-category="books"
                                    >
                                        图书文具
                                    </button>
                                </div>

                                <div className="sort-group">
                                    <label
                                        htmlFor="sort-select"
                                        className="sort-label"
                                    >
                                        排序：
                                    </label>
                                    <select
                                        id="sort-select"
                                        className="sort-select"
                                    >
                                        <option value="default">默认</option>
                                        <option value="price-asc">
                                            价格从低到高
                                        </option>
                                        <option value="price-desc">
                                            价格从高到低
                                        </option>
                                        <option value="sales">销量</option>
                                        <option value="rating">评分</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 商品列表 */}
                    <section className="products-section" aria-label="商品列表">
                        <div className="container">
                            <div id="products-grid" className="products-grid">
                                {/* 骨架屏加载效果 */}
                                <div className="product-skeleton"></div>
                                <div className="product-skeleton"></div>
                                <div className="product-skeleton"></div>
                                <div className="product-skeleton"></div>
                                <div className="product-skeleton"></div>
                                <div className="product-skeleton"></div>
                            </div>
                        </div>
                    </section>

                    {/* 最近浏览 */}
                    <section
                        className="history-section"
                        id="history-section"
                        hidden
                    >
                        <div className="container">
                            <h2 className="section-title">最近浏览</h2>
                            <div
                                className="history-grid"
                                id="history-grid"
                            ></div>
                        </div>
                    </section>
                </main>

                {/* 页脚 */}
                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <h3>关于我们</h3>
                                <p>优选商城致力于为您提供最优质的购物体验</p>
                            </div>
                            <div className="footer-section">
                                <h3>客户服务</h3>
                                <ul>
                                    <li>
                                        <a href="#">帮助中心</a>
                                    </li>
                                    <li>
                                        <a href="#">退换货政策</a>
                                    </li>
                                    <li>
                                        <a href="#">联系我们</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>关注我们</h3>
                                <div className="social-links">
                                    <a href="#" aria-label="微信">
                                        微信
                                    </a>
                                    <a href="#" aria-label="微博">
                                        微博
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2025 优选商城. 综合性电商网站开发项目</p>
                        </div>
                    </div>
                </footer>

                {/* 购物车侧边栏 */}
                <aside
                    className="cart-sidebar"
                    id="cart-sidebar"
                    aria-label="购物车"
                >
                    <div className="cart-header">
                        <h2>购物车</h2>
                        <button className="btn-close" aria-label="关闭购物车">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="cart-body" id="cart-items">
                        <div className="cart-empty">
                            <p>购物车是空的</p>
                            <p className="text-muted">快去挑选心仪的商品吧！</p>
                        </div>
                    </div>

                    <div className="cart-footer">
                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>小计：</span>
                                <span id="cart-subtotal">¥0.00</span>
                            </div>
                            <div className="summary-row">
                                <span>运费：</span>
                                <span id="cart-shipping">¥0.00</span>
                            </div>
                            <div className="summary-row summary-total">
                                <span>总计：</span>
                                <span id="cart-total">¥0.00</span>
                            </div>
                        </div>
                        <button
                            className="btn-primary btn-block"
                            id="checkout-btn"
                            disabled
                        >
                            去结算
                        </button>
                    </div>
                </aside>

                {/* 商品详情弹窗 */}
                <div
                    className="modal"
                    id="product-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    hidden
                >
                    <div className="modal-overlay"></div>
                    <div className="modal-content">
                        <button className="modal-close" aria-label="关闭">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="modal-body" id="modal-body"></div>
                    </div>
                </div>

                {/* 登录弹窗 */}
                <div
                    className="modal"
                    id="login-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="login-title"
                    hidden
                >
                    <div className="modal-overlay"></div>
                    <div className="modal-content modal-small">
                        <button className="modal-close" aria-label="关闭">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="modal-body">
                            <h2 id="login-title">登录账户</h2>
                            <form id="login-form" className="form" noValidate>
                                <div className="form-group">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        邮箱
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-input"
                                        placeholder="your@email.com"
                                        required
                                        aria-required="true"
                                        aria-describedby="email-error"
                                    />
                                    <span
                                        className="form-error"
                                        id="email-error"
                                        role="alert"
                                    ></span>
                                </div>

                                <div className="form-group">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        密码
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-input"
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                        aria-required="true"
                                        aria-describedby="password-error"
                                    />
                                    <span
                                        className="form-error"
                                        id="password-error"
                                        role="alert"
                                    ></span>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary btn-block"
                                >
                                    登录
                                </button>
                                <p className="text-center text-muted">
                                    还没有账户？{" "}
                                    <a href="#" id="show-register">
                                        注册
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Toast通知 */}
                <div
                    className="toast-container"
                    id="toast-container"
                    aria-live="polite"
                    aria-atomic="true"
                ></div>
            </div>

            <Script id="ecommerce-app-init" strategy="afterInteractive">
                {`${initializeEcommerceApp.toString()}
        initializeEcommerceApp();`}
            </Script>
        </>
    );
}

// TypeScript implementation function
function initializeEcommerceApp() {
    // ===== 接口定义 =====
    interface Product {
        id: number;
        name: string;
        category: string;
        price: number;
        oldPrice?: number;
        rating: number;
        reviews: number;
        image: string;
        images?: string[];
        stock: number;
        sales: number;
        description: string;
        badge?: string;
        specs?: Record<string, string>;
    }

    interface CartItem {
        product: Product;
        quantity: number;
    }

    // ===== 商品数据 =====
    const products: Product[] = [
        {
            id: 1,
            name: "无线蓝牙耳机 降噪版",
            category: "electronics",
            price: 299,
            oldPrice: 399,
            rating: 4.8,
            reviews: 2345,
            image: "/wireless-bluetooth-headphones.jpg",
            images: [
                "/wireless-bluetooth-headphones.jpg",
                "/headphones-side-view.png",
                "/headphones-case.png",
            ],
            stock: 156,
            sales: 8932,
            description:
                "采用先进的主动降噪技术，配合人体工学设计，带来极致的音频体验。续航时间长达30小时，支持快速充电。",
            badge: "热卖",
            specs: {
                品牌: "优选",
                连接方式: "蓝牙5.3",
                续航时间: "30小时",
                降噪: "主动降噪",
            },
        },
        {
            id: 2,
            name: "智能手表 运动版",
            category: "electronics",
            price: 599,
            oldPrice: 799,
            rating: 4.7,
            reviews: 1876,
            image: "/smart-watch-fitness.png",
            images: ["/smart-watch-fitness.png"],
            stock: 89,
            sales: 5621,
            description:
                "全天候健康监测，支持多种运动模式。防水等级50米，超长续航7天。实时心率监测、血氧检测、睡眠分析。",
            badge: "新品",
            specs: {
                屏幕: "1.43英寸AMOLED",
                防水: "50米防水",
                续航: "7天",
                传感器: "心率/血氧/加速度",
            },
        },
        {
            id: 3,
            name: "时尚商务背包",
            category: "fashion",
            price: 199,
            rating: 4.9,
            reviews: 3421,
            image: "/modern-backpack-business.jpg",
            images: ["/modern-backpack-business.jpg"],
            stock: 234,
            sales: 12456,
            description:
                "大容量设计，多功能分隔，防水面料。适合商务出行和日常通勤，内置USB充电口。",
            specs: {
                材质: "防水尼龙",
                容量: "25L",
                尺寸: "45x30x15cm",
                特性: "USB充电口",
            },
        },
        {
            id: 4,
            name: "意式浓缩咖啡机",
            category: "home",
            price: 1299,
            oldPrice: 1599,
            rating: 4.6,
            reviews: 987,
            image: "/espresso-coffee-machine.png",
            images: ["/espresso-coffee-machine.png"],
            stock: 45,
            sales: 3421,
            description:
                "专业级萃取系统，15Bar压力泵，支持多种咖啡制作。不锈钢机身，自动清洁功能。",
            badge: "限时优惠",
            specs: {
                压力: "15Bar",
                容量: "1.5L",
                功率: "1450W",
                材质: "不锈钢",
            },
        },
        {
            id: 5,
            name: "高级笔记本套装",
            category: "books",
            price: 89,
            rating: 4.8,
            reviews: 5432,
            image: "/notebook-set-premium.jpg",
            images: ["/notebook-set-premium.jpg"],
            stock: 567,
            sales: 18765,
            description:
                "包含3本不同规格笔记本，高品质纸张，防水封面。适合学习、工作、创作。",
            specs: {
                数量: "3本",
                纸张: "80g米黄纸",
                封面: "防水硬壳",
                页数: "每本160页",
            },
        },
        {
            id: 6,
            name: "运动跑鞋 透气款",
            category: "fashion",
            price: 399,
            oldPrice: 599,
            rating: 4.7,
            reviews: 2109,
            image: "/running-shoes-sport.jpg",
            images: ["/running-shoes-sport.jpg"],
            stock: 178,
            sales: 7654,
            description:
                "飞织鞋面透气舒适，高弹缓震中底。适合跑步、健身等多种运动场景。",
            badge: "热卖",
            specs: {
                鞋面: "飞织材质",
                鞋底: "高弹EVA",
                适用: "跑步/健身",
                重量: "单只约240g",
            },
        },
        {
            id: 7,
            name: "空气净化器",
            category: "home",
            price: 899,
            rating: 4.9,
            reviews: 1543,
            image: "/air-purifier-home.jpg",
            images: ["/air-purifier-home.jpg"],
            stock: 92,
            sales: 4321,
            description:
                "H13级HEPA滤网，高效去除PM2.5、甲醛、花粉。智能感应空气质量，静音运行。适用面积35-60平米。",
            specs: {
                净化面积: "35-60㎡",
                滤网等级: "H13 HEPA",
                噪音: "低至22dB",
                功能: "智能感应",
            },
        },
        {
            id: 8,
            name: "机械键盘 RGB背光",
            category: "electronics",
            price: 459,
            rating: 4.8,
            reviews: 3876,
            image: "/mechanical-keyboard-rgb.jpg",
            images: ["/mechanical-keyboard-rgb.jpg"],
            stock: 203,
            sales: 9876,
            description:
                "青轴机械键盘，RGB炫彩背光。铝合金面板，支持宏编程。适合游戏和办公。",
            badge: "推荐",
            specs: {
                轴体: "青轴",
                背光: "RGB",
                连接: "有线/无线双模",
                按键数: "87键",
            },
        },
        {
            id: 9,
            name: "保温杯 316不锈钢",
            category: "home",
            price: 129,
            rating: 4.9,
            reviews: 6543,
            image: "/insulated-bottle-steel.jpg",
            images: ["/insulated-bottle-steel.jpg"],
            stock: 432,
            sales: 23456,
            description:
                "316不锈钢内胆，真空保温24小时。防漏设计，易清洗。容量500ml。",
            specs: {
                材质: "316不锈钢",
                容量: "500ml",
                保温: "24小时",
                特性: "防漏设计",
            },
        },
        {
            id: 10,
            name: "LED护眼台灯",
            category: "home",
            price: 259,
            oldPrice: 359,
            rating: 4.7,
            reviews: 1987,
            image: "/desk-lamp-led.jpg",
            images: ["/desk-lamp-led.jpg"],
            stock: 145,
            sales: 5432,
            description:
                "无频闪护眼光源，三档色温调节。触摸开关，USB充电设计。适合阅读、学习、工作。",
            specs: {
                光源: "LED无频闪",
                色温: "三档可调",
                供电: "USB充电",
                寿命: "50000小时",
            },
        },
        {
            id: 11,
            name: "电子书阅读器",
            category: "electronics",
            price: 899,
            rating: 4.8,
            reviews: 2345,
            image: "/e-reader-tablet.jpg",
            images: ["/e-reader-tablet.jpg"],
            stock: 67,
            sales: 3456,
            description:
                "6英寸E-Ink屏幕，护眼不伤眼。轻薄便携，续航数周。支持多种格式，内置阅读灯。",
            specs: {
                屏幕: "6英寸E-Ink",
                分辨率: "300PPI",
                存储: "8GB",
                续航: "数周",
            },
        },
        {
            id: 12,
            name: "瑜伽垫 加厚防滑",
            category: "fashion",
            price: 149,
            rating: 4.9,
            reviews: 4321,
            image: "/yoga-mat-exercise.jpg",
            images: ["/yoga-mat-exercise.jpg"],
            stock: 289,
            sales: 15678,
            description:
                "NBR环保材质，10mm加厚设计。双面防滑纹理，回弹性好。附赠背包和绑带。",
            specs: {
                材质: "NBR环保材料",
                厚度: "10mm",
                尺寸: "183x61cm",
                配件: "背包+绑带",
            },
        },
    ];

    // ===== 数据存储 =====
    class Store {
        private cart: CartItem[] = [];
        private history: Product[] = [];
        private theme: "light" | "dark" = "light";

        constructor() {
            this.loadFromLocalStorage();
            this.applyTheme();
        }

        // 加载本地存储
        private loadFromLocalStorage() {
            try {
                const savedCart = localStorage.getItem("cart");
                const savedHistory = localStorage.getItem("history");
                const savedTheme = localStorage.getItem("theme");

                if (savedCart) this.cart = JSON.parse(savedCart);
                if (savedHistory) this.history = JSON.parse(savedHistory);
                if (savedTheme) this.theme = savedTheme as "light" | "dark";
            } catch (error) {
                console.error("Failed to load from localStorage:", error);
            }
        }

        // 保存到本地存储
        private saveToLocalStorage() {
            try {
                localStorage.setItem("cart", JSON.stringify(this.cart));
                localStorage.setItem("history", JSON.stringify(this.history));
                localStorage.setItem("theme", this.theme);
            } catch (error) {
                console.error("Failed to save to localStorage:", error);
            }
        }

        // 购物车操作
        addToCart(product: Product, quantity = 1) {
            const existingItem = this.cart.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.cart.push({ product, quantity });
            }

            this.saveToLocalStorage();
        }

        removeFromCart(productId: number) {
            this.cart = this.cart.filter(
                (item) => item.product.id !== productId
            );
            this.saveToLocalStorage();
        }

        updateCartQuantity(productId: number, quantity: number) {
            const item = this.cart.find(
                (item) => item.product.id === productId
            );
            if (item) {
                item.quantity = Math.max(1, quantity);
                this.saveToLocalStorage();
            }
        }

        getCart(): CartItem[] {
            return this.cart;
        }

        getCartTotal(): number {
            return this.cart.reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
            );
        }

        getCartCount(): number {
            return this.cart.reduce((count, item) => count + item.quantity, 0);
        }

        clearCart() {
            this.cart = [];
            this.saveToLocalStorage();
        }

        // 浏览历史操作
        addToHistory(product: Product) {
            // 移除重复项
            this.history = this.history.filter((p) => p.id !== product.id);
            // 添加到开头
            this.history.unshift(product);
            // 只保留最近10个
            this.history = this.history.slice(0, 10);
            this.saveToLocalStorage();
        }

        getHistory(): Product[] {
            return this.history;
        }

        // 主题操作
        toggleTheme() {
            this.theme = this.theme === "light" ? "dark" : "light";
            this.applyTheme();
            this.saveToLocalStorage();
        }

        private applyTheme() {
            document.documentElement.setAttribute("data-theme", this.theme);
        }

        getTheme(): "light" | "dark" {
            return this.theme;
        }
    }

    // ===== UI管理 =====
    class UI {
        private store: Store;
        private currentFilter = "all";
        private currentSort = "default";
        private searchTimeout: number | null = null;

        constructor(store: Store) {
            this.store = store;
        }

        // 渲染商品列表
        renderProducts(productsToRender: Product[]) {
            const grid = document.getElementById("products-grid");
            if (!grid) return;

            grid.innerHTML = "";

            productsToRender.forEach((product, index) => {
                const card = this.createProductCard(product);
                card.style.animationDelay = `${index * 0.05}s`;
                grid.appendChild(card);
            });

            // 懒加载图片
            this.lazyLoadImages();
        }

        // 创建商品卡片
        private createProductCard(product: Product): HTMLElement {
            const card = document.createElement("div");
            card.className = "product-card";
            card.dataset.productId = String(product.id);

            card.innerHTML = `
        <div class="product-image-wrapper">
          ${
              product.badge
                  ? `<span class="product-badge">${product.badge}</span>`
                  : ""
          }
          <img 
            class="product-image" 
            data-src="${product.image}" 
            alt="${product.name}"
            loading="lazy"
          >
        </div>
        <div class="product-info">
          <div class="product-category">${this.getCategoryName(
              product.category
          )}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span>${product.rating}</span>
            <span class="text-muted">(${product.reviews})</span>
          </div>
          <div class="product-price-row">
            <div>
              <span class="product-price">¥${product.price}</span>
              ${
                  product.oldPrice
                      ? `<span class="product-old-price">¥${product.oldPrice}</span>`
                      : ""
              }
            </div>
            <button class="btn-add-cart" data-product-id="${product.id}">
              加入购物车
            </button>
          </div>
        </div>
      `;

            // 点击卡片查看详情
            card.addEventListener("click", (e) => {
                if (!(e.target as HTMLElement).closest(".btn-add-cart")) {
                    this.showProductDetail(product);
                }
            });

            // 加入购物车
            const addBtn = card.querySelector(".btn-add-cart");
            addBtn?.addEventListener("click", (e) => {
                e.stopPropagation();
                this.addToCart(product);
            });

            return card;
        }

        // 获取分类名称
        private getCategoryName(category: string): string {
            const names: Record<string, string> = {
                electronics: "电子产品",
                fashion: "时尚服饰",
                home: "家居生活",
                books: "图书文具",
            };
            return names[category] || category;
        }

        // 显示商品详情
        showProductDetail(product: Product) {
            const modal = document.getElementById("product-modal");
            const modalBody = document.getElementById("modal-body");
            if (!modal || !modalBody) return;

            // 添加到浏览历史
            this.store.addToHistory(product);
            this.renderHistory();

            modalBody.innerHTML = `
        <div class="product-detail">
          <div class="product-detail-images">
            <div class="main-image-wrapper">
              <img class="main-image" src="${product.image}" alt="${
                product.name
            }">
            </div>
            ${
                product.images && product.images.length > 1
                    ? `
              <div class="thumbnail-list">
                ${product.images
                    .map(
                        (img, i) => `
                  <img 
                    class="thumbnail ${i === 0 ? "active" : ""}" 
                    src="${img}" 
                    alt="图片${i + 1}"
                    data-index="${i}"
                  >
                `
                    )
                    .join("")}
              </div>
            `
                    : ""
            }
          </div>
          <div class="product-detail-info">
            <h2>${product.name}</h2>
            <div class="product-detail-rating">
              <span class="stars">★★★★★</span>
              <span>${product.rating}</span>
              <span>(${product.reviews}条评价)</span>
              <span>已售${product.sales}件</span>
            </div>
            <div class="product-detail-price">¥${product.price}</div>
            <div class="product-detail-stock">库存：${product.stock}件</div>
            
            <div class="product-detail-description">
              <h3>商品介绍</h3>
              <p>${product.description}</p>
            </div>
            
            ${
                product.specs
                    ? `
              <div class="product-specs">
                <h3>规格参数</h3>
                ${Object.entries(product.specs)
                    .map(
                        ([key, value]) => `
                  <div class="spec-row">
                    <div class="spec-label">${key}</div>
                    <div class="spec-value">${value}</div>
                  </div>
                `
                    )
                    .join("")}
              </div>
            `
                    : ""
            }
            
            <div class="product-detail-actions">
              <button class="btn-secondary btn-add-cart-detail" data-product-id="${
                  product.id
              }">
                加入购物车
              </button>
              <button class="btn-primary" style="flex:1" onclick="alert('立即购买功能开发中...')">
                立即购买
              </button>
            </div>
          </div>
        </div>
      `;

            // 图片切换
            const thumbnails = modalBody.querySelectorAll(".thumbnail");
            const mainImage = modalBody.querySelector(
                ".main-image"
            ) as HTMLImageElement;
            thumbnails.forEach((thumb) => {
                thumb.addEventListener("click", () => {
                    thumbnails.forEach((t) => t.classList.remove("active"));
                    thumb.classList.add("active");
                    if (mainImage) {
                        mainImage.src = (thumb as HTMLImageElement).src;
                    }
                });
            });

            // 加入购物车
            const addBtn = modalBody.querySelector(".btn-add-cart-detail");
            addBtn?.addEventListener("click", () => {
                this.addToCart(product);
            });

            this.openModal(modal);
        }

        // 加入购物车
        addToCart(product: Product) {
            this.store.addToCart(product);
            this.updateCartUI();
            this.showToast("已添加到购物车", "success");
        }

        // 更新购物车UI
        updateCartUI() {
            const badge = document.querySelector(".cart-badge");
            const cartItems = document.getElementById("cart-items");
            const subtotalEl = document.getElementById("cart-subtotal");
            const shippingEl = document.getElementById("cart-shipping");
            const totalEl = document.getElementById("cart-total");
            const checkoutBtn = document.getElementById("checkout-btn");

            if (
                !badge ||
                !cartItems ||
                !subtotalEl ||
                !shippingEl ||
                !totalEl ||
                !checkoutBtn
            )
                return;

            const cart = this.store.getCart();
            const count = this.store.getCartCount();
            const subtotal = this.store.getCartTotal();
            const shipping = subtotal >= 99 ? 0 : 10;
            const total = subtotal + shipping;

            // 更新徽章
            badge.textContent = String(count);

            // 更新购物车列表
            if (cart.length === 0) {
                cartItems.innerHTML = `
          <div class="cart-empty">
            <p>购物车是空的</p>
            <p class="text-muted">快去挑选心仪的商品吧！</p>
          </div>
        `;
                (checkoutBtn as HTMLButtonElement).disabled = true;
            } else {
                cartItems.innerHTML = cart
                    .map(
                        (item) => `
          <div class="cart-item">
            <img class="cart-item-image" src="${item.product.image}" alt="${item.product.name}">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.product.name}</div>
              <div class="cart-item-price">¥${item.product.price}</div>
              <div class="cart-item-controls">
                <button class="quantity-btn" data-action="decrease" data-product-id="${item.product.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" data-action="increase" data-product-id="${item.product.id}">+</button>
                <button class="btn-remove" data-product-id="${item.product.id}">删除</button>
              </div>
            </div>
          </div>
        `
                    )
                    .join("");
                (checkoutBtn as HTMLButtonElement).disabled = false;

                // 绑定事件
                cartItems.querySelectorAll(".quantity-btn").forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        const target = e.target as HTMLElement;
                        const productId = Number(target.dataset.productId);
                        const action = target.dataset.action;
                        const item = cart.find(
                            (i) => i.product.id === productId
                        );

                        if (item) {
                            if (action === "increase") {
                                this.store.updateCartQuantity(
                                    productId,
                                    item.quantity + 1
                                );
                            } else if (
                                action === "decrease" &&
                                item.quantity > 1
                            ) {
                                this.store.updateCartQuantity(
                                    productId,
                                    item.quantity - 1
                                );
                            }
                            this.updateCartUI();
                        }
                    });
                });

                cartItems.querySelectorAll(".btn-remove").forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        const productId = Number(
                            (e.target as HTMLElement).dataset.productId
                        );
                        this.store.removeFromCart(productId);
                        this.updateCartUI();
                        this.showToast("已从购物车移除", "success");
                    });
                });
            }

            // 更新金额
            subtotalEl.textContent = `¥${subtotal.toFixed(2)}`;
            shippingEl.textContent =
                shipping === 0 ? "免运费" : `¥${shipping.toFixed(2)}`;
            totalEl.textContent = `¥${total.toFixed(2)}`;
        }

        // 渲染浏览历史
        renderHistory() {
            const history = this.store.getHistory();
            const historySection = document.getElementById("history-section");
            const historyGrid = document.getElementById("history-grid");

            if (!historySection || !historyGrid) return;

            if (history.length === 0) {
                historySection.setAttribute("hidden", "");
                return;
            }

            historySection.removeAttribute("hidden");
            historyGrid.innerHTML = history
                .map(
                    (product) => `
        <div class="product-card" data-product-id="${product.id}" style="cursor:pointer">
          <div class="product-image-wrapper">
            <img class="product-image" src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-price">¥${product.price}</div>
          </div>
        </div>
      `
                )
                .join("");

            // 绑定点击事件
            historyGrid.querySelectorAll(".product-card").forEach((card) => {
                card.addEventListener("click", () => {
                    const productId = Number(
                        (card as HTMLElement).dataset.productId
                    );
                    const product = products.find((p) => p.id === productId);
                    if (product) {
                        this.showProductDetail(product);
                    }
                });
            });
        }

        // 筛选商品
        filterProducts(category: string) {
            this.currentFilter = category;
            this.applyFilterAndSort();
        }

        // 排序商品
        sortProducts(sortBy: string) {
            this.currentSort = sortBy;
            this.applyFilterAndSort();
        }

        // 应用筛选和排序
        private applyFilterAndSort() {
            let filtered = products;

            // 筛选
            if (this.currentFilter !== "all") {
                filtered = filtered.filter(
                    (p) => p.category === this.currentFilter
                );
            }

            // 排序
            switch (this.currentSort) {
                case "price-asc":
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case "price-desc":
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case "sales":
                    filtered.sort((a, b) => b.sales - a.sales);
                    break;
                case "rating":
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
            }

            this.renderProducts(filtered);
        }

        // 搜索功能
        search(query: string) {
            const searchResults = document.getElementById("search-results");
            if (!searchResults) return;

            if (!query.trim()) {
                searchResults.setAttribute("hidden", "");
                return;
            }

            const results = products.filter(
                (p) =>
                    p.name.toLowerCase().includes(query.toLowerCase()) ||
                    p.category.includes(query.toLowerCase())
            );

            if (results.length === 0) {
                searchResults.innerHTML =
                    '<div style="padding:1rem;text-align:center;color:var(--color-text-muted)">未找到相关商品</div>';
            } else {
                searchResults.innerHTML = results
                    .slice(0, 5)
                    .map((product) => {
                        const nameHighlighted = this.highlightText(
                            product.name,
                            query
                        );
                        return `
            <div class="search-result-item" data-product-id="${product.id}">
              <img src="${product.image}" alt="${product.name}">
              <div class="search-result-info">
                <div class="search-result-name">${nameHighlighted}</div>
                <div class="search-result-price">¥${product.price}</div>
              </div>
            </div>
          `;
                    })
                    .join("");

                // 绑定点击事件
                searchResults
                    .querySelectorAll(".search-result-item")
                    .forEach((item) => {
                        item.addEventListener("click", () => {
                            const productId = Number(
                                (item as HTMLElement).dataset.productId
                            );
                            const product = products.find(
                                (p) => p.id === productId
                            );
                            if (product) {
                                this.showProductDetail(product);
                                searchResults.setAttribute("hidden", "");
                                (
                                    document.getElementById(
                                        "search-input"
                                    ) as HTMLInputElement
                                ).value = "";
                            }
                        });
                    });
            }

            searchResults.removeAttribute("hidden");
        }

        // 高亮文本
        private highlightText(text: string, query: string): string {
            const regex = new RegExp(`(${query})`, "gi");
            return text.replace(
                regex,
                '<span class="search-highlight">$1</span>'
            );
        }

        // 防抖搜索
        debouncedSearch(query: string) {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = window.setTimeout(() => {
                this.search(query);
            }, 300);
        }

        // Toast通知
        showToast(
            message: string,
            type: "success" | "error" | "warning" = "success"
        ) {
            const container = document.getElementById("toast-container");
            if (!container) return;

            const toast = document.createElement("div");
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
        <div class="toast-icon">
          ${type === "success" ? "✓" : type === "error" ? "✕" : "⚠"}
        </div>
        <div class="toast-message">${message}</div>
      `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = "0";
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // 打开弹窗
        openModal(modal: HTMLElement) {
            modal.removeAttribute("hidden");
            document.body.style.overflow = "hidden";
        }

        // 关闭弹窗
        closeModal(modal: HTMLElement) {
            modal.setAttribute("hidden", "");
            document.body.style.overflow = "";
        }

        // 切换购物车侧边栏
        toggleCart() {
            const cart = document.getElementById("cart-sidebar");
            if (!cart) return;

            cart.classList.toggle("open");
        }

        // 切换移动端菜单
        toggleMobileMenu() {
            const navMenu = document.querySelector(".nav-menu");
            const navToggle = document.querySelector(".nav-toggle");

            if (!navMenu || !navToggle) return;

            const isExpanded =
                navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!isExpanded));
            navMenu.classList.toggle("open");
        }

        // 懒加载图片
        lazyLoadImages() {
            const images = document.querySelectorAll("img[data-src]");

            const imageObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const img = entry.target as HTMLImageElement;
                            img.src = img.dataset.src || "";
                            img.classList.add("loaded");
                            img.removeAttribute("data-src");
                            observer.unobserve(img);
                        }
                    });
                }
            );

            images.forEach((img) => imageObserver.observe(img));
        }

        // 切换主题
        toggleTheme() {
            this.store.toggleTheme();
        }
    }

    // ===== 初始化应用 =====
    function init() {
        const store = new Store();
        const ui = new UI(store);

        // 隐藏加载动画
        setTimeout(() => {
            const loader = document.getElementById("page-loader");
            if (loader) {
                loader.classList.add("hidden");
            }
        }, 500);

        // 初始化渲染
        ui.renderProducts(products);
        ui.updateCartUI();
        ui.renderHistory();

        // 筛选按钮
        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                const category = target.dataset.category || "all";

                document
                    .querySelectorAll(".filter-btn")
                    .forEach((b) => b.classList.remove("active"));
                target.classList.add("active");

                ui.filterProducts(category);
            });
        });

        // 排序选择
        const sortSelect = document.getElementById("sort-select");
        sortSelect?.addEventListener("change", (e) => {
            const target = e.target as HTMLSelectElement;
            ui.sortProducts(target.value);
        });

        // 搜索
        const searchInput = document.getElementById("search-input");
        searchInput?.addEventListener("input", (e) => {
            const target = e.target as HTMLInputElement;
            ui.debouncedSearch(target.value);
        });

        // 点击外部关闭搜索结果
        document.addEventListener("click", (e) => {
            const searchWrapper = document.querySelector(".search-wrapper");
            const searchResults = document.getElementById("search-results");
            if (searchWrapper && !searchWrapper.contains(e.target as Node)) {
                searchResults?.setAttribute("hidden", "");
            }
        });

        // 购物车
        const cartButton = document.querySelector(".cart-button");
        cartButton?.addEventListener("click", () => ui.toggleCart());

        const cartClose = document.querySelector(".cart-sidebar .btn-close");
        cartClose?.addEventListener("click", () => ui.toggleCart());

        // 结算按钮
        const checkoutBtn = document.getElementById("checkout-btn");
        checkoutBtn?.addEventListener("click", () => {
            alert("结算功能开发中...");
        });

        // 弹窗关闭
        document
            .querySelectorAll(".modal-close, .modal-overlay")
            .forEach((el) => {
                el.addEventListener("click", (e) => {
                    const modal = (e.target as HTMLElement).closest(".modal");
                    if (modal) {
                        ui.closeModal(modal as HTMLElement);
                    }
                });
            });

        // 登录按钮
        const loginBtn = document.getElementById("login-btn");
        const loginModal = document.getElementById("login-modal");
        loginBtn?.addEventListener("click", () => {
            if (loginModal) ui.openModal(loginModal);
        });

        // 登录表单
        const loginForm = document.getElementById("login-form");
        loginForm?.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailInput = document.getElementById(
                "email"
            ) as HTMLInputElement;
            const passwordInput = document.getElementById(
                "password"
            ) as HTMLInputElement;
            const emailError = document.getElementById("email-error");
            const passwordError = document.getElementById("password-error");

            let isValid = true;

            // 验证邮箱
            if (!emailInput.value.includes("@")) {
                if (emailError) emailError.textContent = "请输入有效的邮箱地址";
                emailInput.classList.add("error");
                isValid = false;
            } else {
                if (emailError) emailError.textContent = "";
                emailInput.classList.remove("error");
            }

            // 验证密码
            if (passwordInput.value.length < 6) {
                if (passwordError)
                    passwordError.textContent = "密码至少需要6个字符";
                passwordInput.classList.add("error");
                isValid = false;
            } else {
                if (passwordError) passwordError.textContent = "";
                passwordInput.classList.remove("error");
            }

            if (isValid) {
                ui.showToast("登录成功！", "success");
                if (loginModal) ui.closeModal(loginModal);
                loginForm.reset();
            }
        });

        // 主题切换
        const themeToggle = document.querySelector(".theme-toggle");
        themeToggle?.addEventListener("click", () => ui.toggleTheme());

        // 移动端菜单
        const navToggle = document.querySelector(".nav-toggle");
        navToggle?.addEventListener("click", () => ui.toggleMobileMenu());
    }

    // 等待DOM加载完成
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
}
