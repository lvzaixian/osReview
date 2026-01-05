/**
 * 系统化学习组件
 * 深度课程内容可视化展示
 */

import { useState } from 'react';
import { ArrowLeft, BookOpen, Target, Lightbulb, Map, ChevronDown, ChevronRight } from 'lucide-react';
import type { CourseChapter, ContentBlock, KnowledgeMapData } from '../types';
import { courseChapters } from '../data/course_chapters';

// 颜色映射
const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
  purple: { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-900', hover: 'hover:bg-purple-200' },
  indigo: { bg: 'bg-indigo-100', border: 'border-indigo-400', text: 'text-indigo-900', hover: 'hover:bg-indigo-200' },
  blue: { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-900', hover: 'hover:bg-blue-200' },
  cyan: { bg: 'bg-cyan-100', border: 'border-cyan-400', text: 'text-cyan-900', hover: 'hover:bg-cyan-200' },
  teal: { bg: 'bg-teal-100', border: 'border-teal-400', text: 'text-teal-900', hover: 'hover:bg-teal-200' },
  green: { bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-900', hover: 'hover:bg-green-200' },
  yellow: { bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-900', hover: 'hover:bg-yellow-200' },
  orange: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-900', hover: 'hover:bg-orange-200' },
  red: { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-900', hover: 'hover:bg-red-200' },
  pink: { bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-900', hover: 'hover:bg-pink-200' },
  rose: { bg: 'bg-rose-100', border: 'border-rose-400', text: 'text-rose-900', hover: 'hover:bg-rose-200' },
};

// 根据章节获取激励语
const getChapterMotivation = (chapterId: string): string => {
  const motivations: Record<string, string> = {
    'chp1_2': '学完这章，你就是城堡守卫队长，让任何入侵者无法突破！',
    'chp3': '学完这章，你就是Shell魔法师，可以用命令咒语操控整个系统！',
    'chp4': '学完这章，你就是人事总监，掌控所有用户账号和权限分配！',
    'chp5': '学完这章，你就是公寓物业经理，管理好每个文件的访问权限！',
    'chp6': '学完这章，你就是工厂生产经理，掌控所有进程的生死大权！',
    'chp7': '学完这章，你就是城市规划局长，网络道路畅通无阻！',
    'chp8': '学完这章，你就是自动化专家，让Shell脚本替你完成重复工作！',
    'chp9': '学完这章，你就是五星级酒店总经理，掌控所有Web服务！',
    'chp10': '学完这章，你就是停车场智能管理员，让IP地址自动分配！',
  };
  return motivations[chapterId] || '学完这章，你将掌握Linux的核心技能！';
};

// 根据章节获取emoji图标
const getChapterEmoji = (chapterId: string, isSecond: boolean = false): string => {
  const emojis: Record<string, [string, string]> = {
    'chp1_2': ['🏯', '⚔️'],
    'chp3': ['🧙', '✨'],
    'chp4': ['🏢', '👥'],
    'chp5': ['🏠', '🔑'],
    'chp6': ['🏭', '⚙️'],
    'chp7': ['🏙️', '🌐'],
    'chp8': ['📝', '🤖'],
    'chp9': ['🏨', '🌟'],
    'chp10': ['🅿️', '🚗'],
  };
  const [first, second] = emojis[chapterId] || ['🎓', '✅'];
  return isSecond ? second : first;
};

// 知识图谱组件 - 紧凑型树状结构
const KnowledgeMapVisual = ({ data }: { data: KnowledgeMapData }) => {
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleChapter = (id: string) => {
    const newSet = new Set(expandedChapters);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedChapters(newSet);
  };

  const toggleSection = (id: string) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedSections(newSet);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Root 节点 - 紧凑版 */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="relative">
          <div className={`${
            colorMap[data.root.color]?.bg || 'bg-purple-100'
          } px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-3 ${
            colorMap[data.root.color]?.border || 'border-purple-400'
          } shadow-xl`}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-2xl sm:text-3xl">{data.root.icon}</div>
              <div className={`text-lg sm:text-xl font-black ${
                colorMap[data.root.color]?.text || 'text-purple-900'
              }`}>
                {data.root.title}
              </div>
            </div>
          </div>
          {/* 向下连接线 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-4 sm:h-6 bg-purple-300"></div>
        </div>
      </div>

      {/* Chapters 层 - 垂直树状结构 */}
      <div className="space-y-4 sm:space-y-6">
        {data.chapters.map((chapter, chIdx) => (
          <div key={chapter.id} className="relative">
            {/* 垂直连接线到Root */}
            {chIdx === 0 && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-6 w-0.5 h-4 sm:h-6 bg-purple-300"></div>
            )}
            
            {/* Chapter 卡片 - 紧凑版 */}
            <div
              onClick={() => toggleChapter(chapter.id)}
              className={`${
                colorMap[chapter.color]?.bg || 'bg-indigo-100'
              } px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 ${
                colorMap[chapter.color]?.border || 'border-indigo-400'
              } shadow-lg cursor-pointer transform transition-all ${
                colorMap[chapter.color]?.hover || 'hover:bg-indigo-200'
              } relative`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl">{chapter.icon}</div>
                  <div className={`text-base sm:text-lg font-bold ${
                    colorMap[chapter.color]?.text || 'text-indigo-900'
                  }`}>
                    {chapter.title}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    {chapter.sections.length}节
                  </span>
                  {expandedChapters.has(chapter.id) ? (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  )}
                </div>
              </div>
              
              {/* 向下连接线 */}
              {expandedChapters.has(chapter.id) && chapter.sections.length > 0 && (
                <div className="absolute left-8 sm:left-12 top-full w-0.5 h-3 sm:h-4 bg-gray-300"></div>
              )}
            </div>

            {/* Sections 层 - 折叠展开 */}
            {expandedChapters.has(chapter.id) && (
              <div className="mt-3 sm:mt-4 ml-6 sm:ml-10 space-y-3 sm:space-y-4">
                {chapter.sections.map((section, secIdx) => (
                  <div key={section.id} className="relative">
                    {/* 水平连接线 */}
                    <div className="absolute -left-6 sm:-left-10 top-4 sm:top-5 w-6 sm:w-10 h-0.5 bg-gray-300"></div>
                    {/* 垂直连接线 */}
                    {secIdx !== chapter.sections.length - 1 && (
                      <div className="absolute -left-6 sm:-left-10 top-4 sm:top-5 w-0.5 h-full bg-gray-300"></div>
                    )}
                    
                    {/* Section 卡片 - 紧凑版 */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSection(section.id);
                      }}
                      className={`${
                        colorMap[section.color]?.bg || 'bg-blue-100'
                      } px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border ${
                        colorMap[section.color]?.border || 'border-blue-400'
                      } shadow-md cursor-pointer transform transition-all ${
                        colorMap[section.color]?.hover || 'hover:bg-blue-200'
                      } relative`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-lg sm:text-xl">{section.icon}</div>
                          <div className={`text-sm sm:text-base font-bold ${
                            colorMap[section.color]?.text || 'text-blue-900'
                          }`}>
                            {section.title}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-gray-600 font-medium">
                            {section.items.length}
                          </span>
                          {expandedSections.has(section.id) ? (
                            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Items 层 - 折叠展开 */}
                    {expandedSections.has(section.id) && (
                      <div className="mt-2 sm:mt-3 grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 ml-3 sm:ml-4">
                        {section.items.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded border border-gray-300 shadow-sm hover:shadow-md hover:border-gray-400 transition-all"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm sm:text-base">{item.icon}</span>
                              <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">
                                {item.title}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 操作提示 */}
      <div className="mt-6 sm:mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700">
          <Lightbulb className="w-4 h-4" />
          <span>点击卡片展开/折叠详细内容</span>
        </div>
      </div>
    </div>
  );
};

export default function SystematicLearning({ onBack }: { onBack: () => void }) {
  const [selectedChapter, setSelectedChapter] = useState<CourseChapter | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  
  // 核心知识骨架折叠状态
  const [showScenario, setShowScenario] = useState(true); // 场景引入默认展开
  const [showFramework, setShowFramework] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);

  const toggleSection = (sectionId: string) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(sectionId)) {
      newSet.delete(sectionId);
    } else {
      newSet.add(sectionId);
    }
    setExpandedSections(newSet);
  };

  // 渲染内容块
  const renderContentBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'diagram':
        // 不再渲染 mermaid/dot，已用自定义组件替代
        return null;

      case 'text':
      case 'list':
      case 'highlight':
      case 'scenario':
        return (
          <div key={block.id} className="my-3 sm:my-4">
            <div
              className="text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
            {block.mnemonic && (
              <div className="mt-3 bg-amber-50 p-3 sm:p-4 rounded-lg border-l-4 border-amber-400">
                <div
                  className="text-sm sm:text-base text-amber-900"
                  dangerouslySetInnerHTML={{ __html: block.mnemonic }}
                />
              </div>
            )}
            {block.scenario && (
              <div className="mt-3">
                <div
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: block.scenario }}
                />
              </div>
            )}
          </div>
        );

      case 'table':
        return (
          <div key={block.id} className="my-4 overflow-x-auto">
            <div dangerouslySetInnerHTML={{ __html: block.content }} />
          </div>
        );

      case 'code':
        return (
          <div key={block.id} className="my-4">
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code className={`language-${block.language || 'bash'}`}>
                {block.content}
              </code>
            </pre>
          </div>
        );

      case 'tip':
        return (
          <div key={block.id} className="my-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div
              className="text-sm sm:text-base text-blue-900"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  // 章节详情页
  if (selectedChapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* 固定头部 */}
        <div className="sticky top-0 z-50 pointer-events-none">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <button
              onClick={() => {
                setSelectedChapter(null);
                setExpandedSections(new Set());
                // 重置核心知识骨架状态
                setShowScenario(true);
                setShowFramework(false);
                setShowObjectives(false);
                setShowKeyPoints(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 sm:gap-2 text-gray-700 hover:text-gray-900 font-semibold bg-white/95 backdrop-blur-md shadow-lg rounded-xl px-3 sm:px-5 py-2 sm:py-2.5 pointer-events-auto transition-all hover:shadow-xl hover:scale-105 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              返回章节列表
            </button>
          </div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-5xl">
          {/* 章节标题 */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="text-6xl sm:text-7xl mb-4">{selectedChapter.icon}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              {selectedChapter.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {selectedChapter.overview}
            </p>
            {selectedChapter.estimatedMinutes && (
              <div className="mt-3 text-sm sm:text-base text-purple-600 font-medium">
                ⏱️ 预计学习时长: {selectedChapter.estimatedMinutes} 分钟
              </div>
            )}
          </div>

          {/* 核心知识骨架 - 舒适配色版 */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl mb-6 sm:mb-8">
            {/* 柔和渐变背景层 */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-indigo-800 to-purple-900"></div>
            {/* 柔和装饰圆形 */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
            
            {/* 内容层 */}
            <div className="relative z-10 p-4 sm:p-6">
              {/* 标题 */}
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 shadow-lg">
                  <Map className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">📋 核心知识骨架</h2>
                </div>
              </div>

              {/* 🎯 问题引入 - 重设计版 */}
              {selectedChapter.skeleton.scenarioIntro && (
                <div className="mb-4">
                  <button
                    onClick={() => setShowScenario(!showScenario)}
                    className="group w-full flex items-center justify-between bg-gradient-to-r from-amber-600/30 to-orange-600/30 hover:from-amber-600/40 hover:to-orange-600/40 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-300 border-2 border-amber-500/40 shadow-lg hover:shadow-xl hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <span className="text-2xl sm:text-3xl">🎯</span>
                      </div>
                      <div className="text-left">
                        <div className="text-base sm:text-lg font-black text-white">为什么要学这个？</div>
                        <div className="text-xs sm:text-sm text-white/80">场景引入 · 问题驱动</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-xs text-white/70">
                        {showScenario ? '点击收起' : '点击展开'}
                      </span>
                      {showScenario ? (
                        <ChevronDown className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>
                  {showScenario && (
                    <div className="mt-3 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20 shadow-inner space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {/* 场景标题 */}
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-12 bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500 rounded-full"></div>
                        <div>
                          <div className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
                            {selectedChapter.skeleton.scenarioIntro.title}
                          </div>
                          <div className="text-xs sm:text-sm text-amber-200 mt-1 font-medium">✨ 跨界类比 · 通俗易懂</div>
                        </div>
                      </div>
                                      
                      {/* 场景描述 - 增强版 */}
                      <div className="relative group">
                        <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400/50 via-orange-400/50 to-amber-500/50 rounded-full group-hover:w-1.5 transition-all"></div>
                        <div className="text-sm sm:text-base leading-relaxed text-white bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4 sm:p-5 pl-6 border border-white/15 shadow-lg">
                          <div className="flex items-start gap-2">
                            <span className="text-2xl flex-shrink-0">🎭</span>
                            <p className="leading-relaxed font-medium">{selectedChapter.skeleton.scenarioIntro.description}</p>
                          </div>
                        </div>
                      </div>
                                      
                      {/* 核心问题列表 - 类比版 */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                            <span className="text-lg">💡</span>
                          </div>
                          <div>
                            <div className="text-base sm:text-lg font-bold text-white">技术概念 = 生活场景</div>
                            <div className="text-xs text-amber-200">跨界类比，一看就懂</div>
                          </div>
                        </div>
                        <div className="space-y-2.5">
                          {selectedChapter.skeleton.scenarioIntro.problems.map((problem, idx) => {
                            // 提取类比部分（括号内容）
                            const match = problem.match(/（(.+?)）/);
                            const analogy = match ? match[1] : '';
                            const mainText = problem.replace(/（.+?）/, '').trim();
                                                  
                            return (
                              <div
                                key={idx}
                                className="group relative overflow-hidden rounded-xl border-2 border-white/15 hover:border-amber-400/30 transition-all bg-gradient-to-r from-white/10 via-white/8 to-white/5 hover:from-white/15 hover:via-white/12 hover:to-white/8 shadow-lg hover:shadow-xl"
                              >
                                {/* 左侧渐变条 */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500 group-hover:w-1.5 transition-all"></div>
                                                      
                                <div className="flex items-start gap-3 p-3 sm:p-4 pl-5">
                                  {/* 编号徽章 */}
                                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center font-black text-sm sm:text-base text-white shadow-xl group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                  </div>
                                                        
                                  {/* 内容 */}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm sm:text-base text-white font-semibold leading-relaxed mb-1.5">
                                      {mainText}
                                    </div>
                                    {analogy && (
                                      <div className="flex items-start gap-2 mt-2 bg-amber-500/15 rounded-lg px-2.5 py-1.5 border border-amber-400/25">
                                        <span className="text-xs flex-shrink-0 mt-0.5">🔗</span>
                                        <span className="text-xs sm:text-sm text-amber-100 italic leading-relaxed font-medium">
                                          {analogy}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                                      
                      {/* 底部激励语 - 增强版（根据章节动态显示）*/}
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 p-4 border-2 border-amber-500/30 shadow-lg">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
                        <div className="relative flex items-center justify-center gap-2">
                          <span className="text-2xl">{getChapterEmoji(selectedChapter.id)}</span>
                          <div className="text-sm sm:text-base text-center text-white font-bold">
                            {getChapterMotivation(selectedChapter.id)}
                          </div>
                          <span className="text-2xl">{getChapterEmoji(selectedChapter.id, true)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 章节框架 */}
              <div className="mb-4">
                <button
                  onClick={() => setShowFramework(!showFramework)}
                  className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-bold text-white">章节结构</div>
                      <div className="text-xs text-blue-200">{selectedChapter.skeleton.framework.length}项内容</div>
                    </div>
                  </div>
                  {showFramework ? (
                    <ChevronDown className="w-5 h-5 text-white/80" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-white/80" />
                  )}
                </button>
                {showFramework && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 animate-in fade-in slide-in-from-top-2 duration-300">
                    {selectedChapter.skeleton.framework.map((item, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-white/15 hover:border-blue-300/30 transition-all cursor-default shadow-md hover:shadow-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
                          {idx + 1}
                        </div>
                        <span className="text-sm sm:text-base text-white font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 学习目标 */}
              {selectedChapter.skeleton.learningObjectives && (
                <div className="mb-4">
                  <button
                    onClick={() => setShowObjectives(!showObjectives)}
                    className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-base sm:text-lg font-bold text-white">学习目标</div>
                        <div className="text-xs text-emerald-200">{selectedChapter.skeleton.learningObjectives.length}项目标</div>
                      </div>
                    </div>
                    {showObjectives ? (
                      <ChevronDown className="w-5 h-5 text-white/80" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-white/80" />
                    )}
                  </button>
                  {showObjectives && (
                    <ul className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      {selectedChapter.skeleton.learningObjectives.map((obj, idx) => (
                        <li
                          key={idx}
                          className="group flex items-start gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-white/15 hover:border-emerald-300/30 transition-all shadow-md hover:shadow-lg"
                        >
                          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-xs sm:text-sm text-white shadow-lg">
                            {idx + 1}
                          </div>
                          <span className="text-sm sm:text-base text-white font-semibold">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* 关键要点 */}
              <div>
                <button
                  onClick={() => setShowKeyPoints(!showKeyPoints)}
                  className="group w-full flex items-center justify-between bg-gradient-to-r from-rose-600/25 to-pink-600/25 hover:from-rose-600/35 hover:to-pink-600/35 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-300 border-2 border-rose-400/40 hover:border-rose-400/60 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-bold text-white">关键要点</div>
                      <div className="text-xs text-rose-200">{selectedChapter.skeleton.keyPoints.length}项重点</div>
                    </div>
                  </div>
                  {showKeyPoints ? (
                    <ChevronDown className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-white" />
                  )}
                </button>
                {showKeyPoints && (
                  <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    {selectedChapter.skeleton.keyPoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start gap-3 bg-gradient-to-r from-rose-500/15 to-pink-500/15 hover:from-rose-500/25 hover:to-pink-500/25 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-rose-400/25 hover:border-rose-400/40 transition-all shadow-md hover:shadow-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                          <span className="text-base font-bold">💡</span>
                        </div>
                        <span className="text-sm sm:text-base text-white font-bold leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 知识图谱 - 紧凑型树状结构 */}
          {selectedChapter.skeleton.knowledgeMap && (
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-indigo-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-2xl sm:text-3xl">🗺️</span>
                <span>知识图谱</span>
              </h2>
              <KnowledgeMapVisual data={selectedChapter.skeleton.knowledgeMap} />
            </div>
          )}

          {/* 详细知识点 */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />
              📚 详细知识点
            </h2>

            {selectedChapter.sections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {section.sectionNumber} {section.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500">
                      {section.blocks.length} 个知识模块
                    </p>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedSections.has(section.id) && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 bg-gray-50 border-t border-gray-200">
                    {section.blocks.map((block) => renderContentBlock(block))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 章节列表页
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 固定头部 */}
      <div className="sticky top-0 z-50 pointer-events-none">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={() => {
              onBack();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-800 font-medium bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 pointer-events-auto transition-all hover:bg-white text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            返回主菜单
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* 标题区 */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" />
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">系统化学习</h1>
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            📖 深度课程 · 完整知识体系
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            基于PPT课件的系统化知识梳理 · 图文并茂 · 场景化学习
          </p>
        </div>

        {/* 章节卡片 */}
        <div className="max-w-4xl mx-auto space-y-6">
          {courseChapters.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => {
                setSelectedChapter(chapter);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-indigo-100 hover:border-indigo-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="text-6xl sm:text-7xl">{chapter.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {chapter.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-4">
                    {chapter.overview}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm sm:text-base">
                    <div className="bg-indigo-50 text-indigo-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                      📚 {chapter.sections.length} 个章节
                    </div>
                    {chapter.estimatedMinutes && (
                      <div className="bg-purple-50 text-purple-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                        ⏱️ {chapter.estimatedMinutes} 分钟
                      </div>
                    )}
                    <div className="bg-pink-50 text-pink-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
                      🗺️ 含知识图谱
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
